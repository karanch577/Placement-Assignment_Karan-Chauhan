import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Dashboard() {
  const [user, setUser] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8000/api/user/dashboard", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <h3>user: </h3>
    </div>
  )
}

export default Dashboard