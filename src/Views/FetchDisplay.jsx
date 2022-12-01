import { useState } from 'react'
import { Button } from '../Components'

export function FetchDisplay({id, url}) {
  const [ data, setData ] = useState()
  const fetchData = (id, url) => {
    fetch(`${url?url:''}/${id?id:''}`)
     .then(response => response.json())
     .then(json => {
      setData(json)
    })
  }
  const displayData = () => {
    if(Array.isArray(data)) {
      return data.map((item, idx) => (
        <p key={idx}>{item.first} {item.last}</p>
      ))
    } else {
      return (
        <>
          No Data Fetched.
        </>
      )
    }
  }
  return (
    <>
      <div>FetchDisplay</div>
      <Button type="primary" onClick={() => fetchData(id, url)}>
        Fetch
      </Button>
      {displayData()}
    </>
  )
}
