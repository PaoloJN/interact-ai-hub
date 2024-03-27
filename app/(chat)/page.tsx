import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { MetaLlama } from '@/components/ui/icons'
// import { getSupportedModels } from '../actions'

export const metadata = {
  title: 'Next.js AI Chatbot'
}

export default async function IndexPage() {
  const id = nanoid()

  const session = {
    user: {
      id: '123',
      email: ''
    }
  }
  // TODO: get installed models and use the first one. if user has no models installed handle it
  const model = {
    id: '6',
    compony: 'Meta',
    label: 'llama-v2-7b-chat',
    name: 'llama2',
    properties: {
      description:
        '7 billion parameter open source model by Meta fine-tuned for chat purposes served by Fireworks. LLaMA v2 was trained on more data (~2 trillion tokens) compared to LLaMA v1 and supports context windows up to 4k tokens.',
      context: '4,096 tokens',
      inputPricing: '$0.07 / million tokens',
      outputPricing: '$0.28 / million tokens'
    }
    // icon: (
    //   <MetaLlama
    //     width={16}
    //     height={16}
    //     className="size-4 align-middle block shrink-0 mr-2"
    //   />
    // )
  }

  // const models = getSupportedModels()

  // console.log('installed models', models)

  return (
    <AI initialAIState={{ chatId: id, messages: [], model: model }}>
      <Chat id={id} session={session} />
    </AI>
  )
}
