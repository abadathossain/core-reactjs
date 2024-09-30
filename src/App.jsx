
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  return (
    <div className='App'>
      <ExternalUsers></ExternalUsers>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        users.map(user =><User key={user.id} name={user.name}></User>)
      }

    </div>
  )
}
function User(props){
  return(
    <>
    <h2>Name: {props.name}</h2>
    </>
  )
}


export default App
