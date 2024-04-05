import { useState } from 'react'
import { FaSearch } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1c2632] grid grid-rows-[10%_auto]
    min-h-screen h-auto text-white'>
      {/* Header */}
      <div className='bg-headerBg flex items-center justify-around
      px-20'>
        <h1 className='font-mainFont text-2xl font-bold'>
          BallScore
        </h1>
        <div className='flex items-center bg-mainBg pl-5'>
          < FaSearch />
          <input type="text" className='bg-mainBg px-5 py-3'
            autoComplete='off' placeholder='Search' />
        </div>

      </div>
      {/* Main div */}
      <div className='bg-mainBg'>
        <p>Div 2</p>
      </div>
    </div>
  )
}

export default App
