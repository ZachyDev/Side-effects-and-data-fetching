import React, { useState, useEffect } from 'react'

function Users() {
    const [peopleInSpace, setPeopleInSpace] = useState([]);

    // fetch data inside useEffect
    useEffect(() => {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            setPeopleInSpace(data.people);
        })
    })
  return (
    <div>
        <h5>People in Space API</h5>
        <div className='users'>
            {
                peopleInSpace.map(person => {
                    return person.name;
                }, [])
            }
        </div>
    </div>
  )
}

export default Users