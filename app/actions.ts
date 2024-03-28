'use server'

// GLOBAL: Auth: userId: "123"

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import {
  readDatabase,
  writeDatabase,
  readDatabaseModels,
  writeDatabaseModels
} from '@/database/functions'

import { type Chat } from '@/lib/types'

export async function getChats(): Promise<Chat[]> {
  try {
    const allChats = await readDatabase()
    const chats = Object.values(allChats)
    return chats as Chat[]
  } catch (error) {
    console.error('Error getting chats:', error)
    return []
  }
}

export async function getChat(id: string): Promise<Chat | null> {
  try {
    const chats = await readDatabase()
    const chatKey = `chat:${id}` // Construct the correct key
    const chat = chats[chatKey] // Use the constructed key to access the chat

    return chat
  } catch (error) {
    console.error('Error getting chat:', error)
    return null
  }
}

export async function removeChat({ id, path }: { id: string; path: string }) {
  try {
    const chats = await readDatabase()
    const chatKey = `chat:${id}` // Construct the correct key
    const chat = chats[chatKey] // Use the constructed key to access the chat

    delete chats[chatKey] // Delete using the correct key
    await writeDatabase(chats)
    revalidatePath('/')
    return revalidatePath(path)
  } catch (error) {
    console.error('Error removing chat:', error)
    return {
      error: 'Something went wrong'
    }
  }
}

export async function clearChats() {
  try {
    const chats = await readDatabase()
    const userChats = Object.values(chats)

    if (userChats.length === 0) {
      return redirect('/')
    }

    // Remove user's chats from the database
    for (const chat of userChats) {
      delete chats[chat.id]
    }

    await writeDatabase(chats)

    revalidatePath('/')
    return redirect('/')
  } catch (error) {
    console.error('Error clearing chats:', error)
    return {
      error: 'Something went wrong'
    }
  }
}

export async function saveChat(chat: Chat) {
  const chats = await readDatabase()
  chats[`chat:${chat.id}`] = chat
  await writeDatabase(chats)
}

//  ********************** OLLAMA **********************

const OLLAMA_URL = 'http://localhost:11434'

export async function isOllamaAvailable() {
  try {
    const data = await fetch(OLLAMA_URL)
    return data.ok
  } catch (error) {
    console.error('Error checking OLLAMA:', error)
    return false
  }
}

// create a sync function to sync installed models with supported models by getting installed models and then updating the supported models installed field to true.

export async function getOllamaModels() {
  const res = await fetch('http://localhost:11434/api/tags', {
    cache: 'no-store'
  })
  const data = await res.json()

  console.log('OLLAMA Models:', data)

  return data
}

export async function getModelsList() {
  const models = await readDatabaseModels()
  return models
}

// TODO: Handle unsupported models
export async function syncModels(ollama_models: any) {
  let models = await getModelsList()
  // @ts-ignore
  const installedModelNames = ollama_models.models.map(model => model.name)

  for (let modelName in models) {
    if (installedModelNames.includes(modelName)) {
      models[modelName].installed = true
    }
  }

  await writeDatabaseModels(models)
  return 'Models synced successfully'
}

// get installed models
export async function getInstalled() {
  const models = await readDatabaseModels()
  // filter out models with installed field set to true
  const installed = Object.values(models).filter(model => model.installed)
  return installed
}

// get uninstalled models
export async function getUninstalled() {
  const models = await readDatabaseModels()
  // filter out models with installed field set to false
  const uninstalled = Object.values(models).filter(model => !model.installed)
  return uninstalled
}
