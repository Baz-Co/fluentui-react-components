import { useState } from 'react'
import { useLocation, NavLink } from "react-router-dom";

export function deeptypeof(tarVar) {
  if(typeof tarVar === "object") {
    if(Array.isArray(tarVar)) {
      return "array"
    } else {
      return "object"
    }
  }

  return typeof tarVar
}

export function NavLinkQueryString({ to, ...props }) {
  let location = useLocation();
  return <NavLink
    to={to + location.search}
    style={({ isActive }) => {
      return {
        display: "block",
        margin: "1rem 0",
        color: isActive ? "red" : "",
      };
    }}
    {...props}
  />;
}

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
      <button onClick={() => fetchData(id, url)}>
        Fetch
      </button>
      {displayData()}
    </>
  )
}
