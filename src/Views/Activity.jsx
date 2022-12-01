import { FetchDisplay } from "./";

// import { Button } from "../Components";

export function Activity() {
  return (
    <div style={{ textAlign: 'left ', height: '100vh' }}>
      <h1>Activity</h1>
      <FetchDisplay id={'userGroup'} />
    </div>
  )
}
