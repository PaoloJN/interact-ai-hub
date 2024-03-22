import fs from 'fs/promises'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'database/database.json')

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
