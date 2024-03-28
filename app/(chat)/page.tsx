import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import {
  getInstalled,
  getModelsList,
  getOllamaModels,
  isOllamaAvailable,
  syncModels
} from '../actions'
// import { getSupportedModels } from '../actions'

export default async function IndexPage() {
  const id = nanoid()

  const status = await isOllamaAvailable()
  if (!status) return <div>OLLAMA is not available</div>

  const ollama_models = await getOllamaModels()
  if (ollama_models.length === 0) return <div>No models installed</div>

  await syncModels(ollama_models)

  const models = await getModelsList()
  const installed = Object.values(models).filter(model => model.installed)
  const defaultModel = installed[0]

  return (
    <AI initialAIState={{ chatId: id, messages: [], model: defaultModel }}>
      <Chat id={id} models={models} />
    </AI>
  )
}
