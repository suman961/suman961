import React, {useState} from 'react'


const App = () => {
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [phone, setphone] = useState("");

const submitHandler=(e)=>{
  e.preventDefault()
  console.log(name)
  setname("")
}
const companyhandler=(elem)=>{
  elem.preventDefault()
  console.log(company)
  setcompany("")
}  
const phoneHandler=(event)=>{
event.preventDefault()
console.log(phone)
setphone("")
}
  return (
    <div className='h-screen border-2 px-5 py-5 ml-10 mt-5'>
      <h1 className='font-bold text-2xl'>Add Contact</h1>
      <h2 className='mt-5'>Name*</h2>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input className='h-1 px-1 py-4 text-center border-2' value={name} onChange={(e)=>{
          setname(e.target.value)
        }} type="text" placeholder='Enter your name' />
      </form>

      <h2>company*</h2>
      <form onSubmit={(elem)=>{companyhandler(elem)}}>
        <input className='h-1 px-1 py-4 text-center border-2' value={company} onChange={(elem)=>{
          setcompany(elem.target.value)
        }} type="text" placeholder='Enter company' />
      </form>

      <h2>Phone*</h2>
      <form onSubmit={(event)=>{phoneHandler(event)}}> 
        <input className='h-1 px-1 py-4 text-center border-2' value={phone} onChange={(event)=>{
          setphone(event.target.value)
        }} type="text" placeholder='Enter phone number' />
      </form>
   
      <button className='h-12 w-full bg-blue-600 text-center rounded-s font-color-white text-2xl' >Add Contact</button>

    </div>
  )
}

export default App
