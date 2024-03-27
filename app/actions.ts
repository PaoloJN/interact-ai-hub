'use server'

// GLOBAL: Auth: userId: "123"

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { readDatabase, writeDatabase } from '@/database/functions'

import { type Chat } from '@/lib/types'

const userId = '123'

export async function getChats(userId?: string | null): Promise<Chat[]> {
  if (!userId) {
    return []
  }

  try {
    const allChats = await readDatabase()
    const chats = Object.values(allChats).filter(chat => chat.userId === userId)
    return chats as Chat[]
  } catch (error) {
    console.error('Error getting chats:', error)
    return []
  }
}

export async function getChat(
  id: string,
  userId: string
): Promise<Chat | null> {
  try {
    const chats = await readDatabase()
    const chatKey = `chat:${id}` // Construct the correct key
    const chat = chats[chatKey] // Use the constructed key to access the chat

    if (!chat || (userId && chat.userId !== userId)) {
      return null
    }

    return chat
  } catch (error) {
    console.error('Error getting chat:', error)
    return null
  }
}

export async function removeChat({ id, path }: { id: string; path: string }) {
  if (!userId) {
    return {
      error: 'Unauthorized'
    }
  }

  try {
    const chats = await readDatabase()
    const chatKey = `chat:${id}` // Construct the correct key
    const chat = chats[chatKey] // Use the constructed key to access the chat

    if (!chat || chat.userId !== userId) {
      return {
        error: 'Unauthorized'
      }
    }

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
  if (!userId) {
    return {
      error: 'Unauthorized'
    }
  }

  try {
    const chats = await readDatabase()
    const userChats = Object.values(chats).filter(
      chat => chat.userId === userId
    )

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

// export async function saveChat(chat: Chat) {
//   const session = await auth()

//   if (session && session.user) {
//     const pipeline = kv.pipeline()
//     pipeline.hmset(`chat:${chat.id}`, chat)
//     pipeline.zadd(`user:chat:${chat.userId}`, {
//       score: Date.now(),
//       member: `chat:${chat.id}`
//     })
//     await pipeline.exec()
//   } else {
//     return
//   }
// }

// convert saveChat to use json
export async function saveChat(chat: Chat) {
  const session = {
    user: {
      id: '123',
      email: ''
    }
  }

  if (session && session.user) {
    const chats = await readDatabase()
    chats[`chat:${chat.id}`] = chat
    await writeDatabase(chats)
  } else {
    return
  }
}

// TODO: See What does this function do ?
export async function refreshHistory(path: string) {
  redirect(path)
}

// TODO: See What does this function do ?
export async function getMissingKeys() {
  const keysRequired = ['OPENAI_API_KEY']
  return keysRequired
    .map(key => (process.env[key] ? '' : key))
    .filter(key => key !== '')
}

// // Get installed models and check if env variables are set for OpenAI
// export async function getSupportedModels() {
//   // call api/tags to get all models
//   const res = await fetch('http://localhost:3000/api/tags')
//   const models = await res.body()
//   return models
// }
