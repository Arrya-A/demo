import './App.css'
import Company from './Company'
import Employee from './Employee'


function App() {

  const empName="Arrya"

  return (
    <>
      <h1 className='text-center mt-5 text-primary'>Demo Project</h1>
      <h3>Employee Name : <span className='fw-bolder text-danger'>{empName}</span> </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus perspiciatis eligendi voluptas magnam odio illum ipsa, nam nulla reprehenderit libero optio quisquam ab voluptatum molestias hic, commodi, totam rerum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat impedit recusandae dolor magnam, cum exercitationem quas vitae saepe, eveniet tempora amet quia ullam perferendis cumque corrupti hic rem, deserunt nesciunt?</p>
      <Employee dataFromParent={empName} empStatus empCheck="data can be displayed like this also"/>
      <Company/>
    </>

  )
}

export default App
