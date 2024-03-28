// TODO: Add more to the data before sending it back

// - model icon: svg
// - short description: string

const OLLAMA_URL =
  process.env.NEXT_PUBLIC_OLLAMA_URL || 'http://localhost:11434'

export async function GET() {
  const res = await fetch(OLLAMA_URL + '/api/tags')
  const data = await res.json()
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json'
    }
  })
}
