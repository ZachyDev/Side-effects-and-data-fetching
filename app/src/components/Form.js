import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
function Form() {
  const [count, setCount] = useState(0);
  const [time,setTime] = useState(new Date());
  const [showClock,setShowClock] = useState(true);

  //useEffect hook
  useEffect(() => {
    setInterval(() => {
        setTime(new Date())
    }, 1000)
  }, [])

  const updateCounter = () => {
    setCount(count => count + 1);
  }
  console.log('Component Rendering')
  return (
    <div>
        <Alert variant='success'>Create Account</Alert>
        <Button variant='info' onClick={updateCounter}>Count - { count }</Button><br/>
        {
            showClock ? ( <Badge>{ time.toString() }</Badge>) : null
        }
        <Button variant='danger' onClick={() => setShowClock(false)}>Hide Clock</Button>
    </div>
  )
}

export default Form