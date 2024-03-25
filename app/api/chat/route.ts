// TODO: Add OpenAi support

import { StreamingTextResponse, Message, LangChainStream } from 'ai'
import { ChatOllama } from '@langchain/community/chat_models/ollama'
import { BytesOutputParser } from '@langchain/core/output_parsers'
import { AIMessage, HumanMessage } from '@langchain/core/messages'
import { nanoid } from '@/lib/utils'
import { promises as fs } from 'fs'
import path from 'path'

// export const runtime = 'edge'
// export const dynamic = 'force-dynamic'

const DB_PATH = path.join(process.cwd(), 'database/database.json')
const userId = '123'

export async function POST(req: Request) {
  const { id, messages, baseUrl, options } = await req.json()
  console.log('id: ', id)
  console.log('messages: ', messages)

  const { stream, handlers } = LangChainStream({
    async onCompletion(completion) {
      // Save the new chat with completion to the database
      const payload = {
        id: id ?? nanoid(),
        title: messages[0].content.substring(0, 100),
        path: `/chat/${id}`,
        userId,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant'
          }
        ]
      }
      const chats = await readDatabase()
      chats[`chat:${id}`] = payload
      await writeDatabase(chats)
    }
  })

  const llm = new ChatOllama({
    baseUrl: baseUrl || 'http://localhost:11434'
    // model: selected
  })

  const parser = new BytesOutputParser()

  llm
    .invoke(
      (messages as Message[]).map(m =>
        m.role == 'user'
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      ),
      { callbacks: [handlers] }
    )
    .catch(console.error)

  return new StreamingTextResponse(stream)
}

// ##################### DATABASE #####################

async function readDatabase(): Promise<Record<string, any>> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading database:', error)
    return {}
  }
}

async function writeDatabase(data: Record<string, any>): Promise<void> {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8')
  } catch (error) {
    console.error('Error writing to database:', error)
  }
}

// ##################### DATABASE #####################
