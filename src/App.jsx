import { useState } from 'react'
import './App.css'
import Car from './Car'
import Company from './Company'
import Employee from './Employee'
import Clock from './Clock'
import User from './User'


function App() {
  //jscode
  const [username, setUsername] = useState("")

  const empName = "Arrya"
  const spanStyle = { fontWeight: 600, color: 'red' }
  //inside return jsx code
  return (
    <>
      <h1 style={{ marginTop: '50px', textAlign: 'center', color: 'blue' }}>Demo Project</h1>
      <h3>Employee Name : <span style={spanStyle}>{empName}</span> </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus perspiciatis eligendi voluptas magnam odio illum ipsa, nam nulla reprehenderit libero optio quisquam ab voluptatum molestias hic, commodi, totam rerum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat impedit recusandae dolor magnam, cum exercitationem quas vitae saepe, eveniet tempora amet quia ullam perferendis cumque corrupti hic rem, deserunt nesciunt?</p>
      <Employee dataFromParent={empName} empStatus empCheck="data can be displayed like this also" />
      <Company />
      <Car />
      <div className='container m-5 border rounded p-5'>
        <input onChange={e => { setUsername(e.target.value) }} placeholder='Enter username' type="text" className='form-control' />
        {username &&
          <div className='bg-warning p-5 text-center mt-5'>
            <h2>Username is : <span className='text-light'>{username}</span></h2>
          </div>
        }
      </div>

      <Clock/>
      <User/>
    </>

  )
}

export default App
