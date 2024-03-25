export const dynamic = 'force-dynamic'

// TODO: Add more to the data before sending it back

// - model icon: svg
// - short description: string

export async function GET() {
  const OLLAMA_URL =
    process.env.NEXT_PUBLIC_OLLAMA_URL || 'http://localhost:11434'
  const res = await fetch(OLLAMA_URL + '/api/tags')
  return new Response(res.body, res)
}
