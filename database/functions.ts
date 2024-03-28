import { promises as fs } from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'database/chats.json')

export async function readDatabase(): Promise<Record<string, any>> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading database:', error)
    return {}
  }
}

export async function writeDatabase(data: Record<string, any>): Promise<void> {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8')
  } catch (error) {
    console.error('Error writing to database:', error)
  }
}

const DB_MODELS_PATH = path.join(process.cwd(), 'database/models.json')

export async function readDatabaseModels(): Promise<Record<string, any>> {
  try {
    const data = await fs.readFile(DB_MODELS_PATH, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading database:', error)
    return {}
  }
}

export async function writeDatabaseModels(
  data: Record<string, any>
): Promise<void> {
  try {
    await fs.writeFile(DB_MODELS_PATH, JSON.stringify(data, null, 2), 'utf8')
  } catch (error) {
    console.error('Error writing to database:', error)
  }
}
