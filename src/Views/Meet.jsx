import { APIView } from "./APIView"

export function Meet() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100vh' }}>
      <article>
        <h1>Meet</h1>
        <APIView />
      </article>
    </div>
  )
}
