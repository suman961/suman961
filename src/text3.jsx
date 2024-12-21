import React from 'react'

const App = () => {
const [name, setname] = useState();
const submitHandler=(e)=>{
e.preventDefault()
console.log(e)
}  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input className='h-10 w-[70%] border-2 border-black-600 gap-x-2 my-2 mt-2 ml-2' type="text"  placeholder='Enter your name' />
        <input className='h-10 w-[70%] border-2 border-black-600 gap-x-2 my-2 mt-2 ml-2' type="text"  placeholder='Enter your age' />
        <input className='h-10 w-[70%] border-2 border-black-600 gap-x-2 my-2 mt-2 ml-2' type="text"  placeholder='Enter your contact' />
        <input className='h-10 w-[70%] border-2 border-black-600 gap-x-2 my-2 mt-2 ml-2' type="text"  placeholder='Enter your branch' />
        <button className='h-10 w-[50%] border-2 border-black-600 bg-blue-500 gap-x-2 my-2 mt-2 ml-2'>Submit</button>
      </form>

    </div>
  )
}

export default App
