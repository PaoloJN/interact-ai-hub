import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
// import { auth } from '@/auth'
// import { Session } from '@/lib/types'
import { getMissingKeys } from '../actions'

export const metadata = {
  title: 'Next.js AI Chatbot'
}

export default async function IndexPage() {
  const session = {
    user: {
      id: '123',
      email: ''
    }
  }

  const id = nanoid()
  const missingKeys = await getMissingKeys()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} session={session} missingKeys={missingKeys} />
    </AI>
  )
}
