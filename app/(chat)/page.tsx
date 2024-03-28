import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import {
  getModelsList,
  getOllamaModels,
  isOllamaAvailable,
  syncModels
} from '../actions'
import { getAIState, useAIState } from 'ai/rsc'
import { Models } from '@/lib/types'

interface IndexPageProps {
  searchParams: {
    model: string
  }
}

export default async function IndexPage({ searchParams }: IndexPageProps) {
  const id = nanoid()

  const status = await isOllamaAvailable()
  if (!status) return <div>OLLAMA is not available</div>

  const ollama_models = await getOllamaModels()
  if (ollama_models.length === 0) return <div>No models installed</div>

  await syncModels(ollama_models)

  const models: Models = (await getModelsList()) ?? {}

  const installed = Object.values(models).filter(model => model.installed)

  const defaultModel = searchParams.model
    ? installed.find(model => model.name === searchParams.model)
    : installed[0]

  return (
    <AI initialAIState={{ chatId: id, messages: [], model: defaultModel }}>
      <Chat id={id} models={models} />
    </AI>
  )
}
