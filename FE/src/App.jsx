
import './App.css'
import { useState } from 'react'
import Countdown from './Countdown';
import axios from 'axios';

function App() {
  const [text, setText] = useState({
    data: ""
  })
  const [time, setTime] = useState("");
  function convertDateFormat(inputDateString) {
    const inputDate = new Date(inputDateString);

    const year = inputDate.getUTCFullYear();
    const month = (inputDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = inputDate.getUTCDate().toString().padStart(2, '0');
    const hours = inputDate.getUTCHours().toString().padStart(2, '0');
    const minutes = inputDate.getUTCMinutes().toString().padStart(2, '0');
    const seconds = inputDate.getUTCSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text.data);
    axios.post("http://localhost:3000/tasks/create", text)
      .then((res) => {
        const timedData = convertDateFormat(res.data)
        console.log(timedData);
        setTime(timedData)
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <div className='flex flex-col gap-12'><p>Hi</p>
        <form onSubmit={handleSubmit}>
          <input type='text' className='border' placeholder='Enter the task' onChange={(e) => { text.data = e.target.value }} />
          <button type='submit'></button>
        </form>
        <Countdown count={time} /></div>
    </>
  )
}

export default App
