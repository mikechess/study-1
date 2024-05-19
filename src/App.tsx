import './App.css'

function App() {
  return (
    // <div className='m-4 grid sm:grid-cols-2 gap-4'>
    //   <div className='min-h-[100px] rounded-lg shadow bg-orange-500'></div>
    //   <div className='min-h-[100px] rounded-lg shadow bg-teal-500'></div>
    // </div>

    // Equal Section Layout
    // <div className='m-4 grid gap-4 sm:grid-cols-4'>
    //   <div className='min-h-[100px] rounded-lg shadow bg-orange-500'></div>
    //   <div className='min-h-[100px] rounded-lg shadow bg-teal-500'></div>
    //   <div className='min-h-[100px] rounded-lg shadow bg-red-500'></div>
    //   <div className='min-h-[100px] rounded-lg shadow bg-purple-500'></div>
    // </div>

    // Unequal Section Layout
    // <div className="m-4 grid gap-4 sm:grid-cols-12 grid-cols-1">
    //   <div className="min-h-[100px] rounded-lg shadow bg-orange-500 sm:col-span-2"></div>
    //   <div className="min-h-[100px] rounded-lg shadow bg-teal-500 sm:col-span-10"></div>
    // </div>

    <div className="m-4 grid gap-4 sm:grid-cols-12">
      <div className="min-h-[100px] rounded-lg shadow bg-orange-500 sm:col-span-2 sm:block hidden"></div>
      <div className="min-h-[100px] rounded-lg shadow bg-teal-500 sm:col-span-8"></div>
      <div className="min-h-[100px] rounded-lg shadow bg-purple-500 sm:col-span-2 sm:block hidden"></div>
    </div>
  )
}

export default App
