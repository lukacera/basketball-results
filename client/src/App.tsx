import { FaSearch } from "react-icons/fa";
import CalendarDiv from "./components/CalendarDiv";

import GamesContainer from "./components/GamesContainer";
import AllCountriesSidebar from "./components/AllCountriesSidebar";
function App() {


  /*
    useEffect(() => {
      const fetchLeagues = async () => {
        try {
          const fetchedData: LeagueType[] = await getAllLeagues()
          setLeagues(fetchedData)
        } catch (error) {
          console.log("Error occured while fetching all leagues! " + error)
        }
      }
  
      fetchLeagues()
    }, [])
  */


  return (
    <div className='grid grid-rows-[5rem_auto] bg-mainBg
    min-h-screen h-auto text-white font-mainFont'>

      {/* Header div */}
      <div className='bg-headerBg flex items-center justify-around
      px-20 sticky top-0 right-0'>

        <h1 className='text-3xl font-bold text-textWhite'>
          BallScore
        </h1>

        <div className='flex items-center bg-secondaryBlueBoxes pl-5 rounded-xl'>
          < FaSearch />
          <input type="text" className='bg-secondaryBlueBoxes pl-5 pr-16 py-3 outline-none
          placeholder:text-[1.2rem] rounded-xl w-auto'
            autoComplete='off' placeholder='Search' />
        </div>

        <div></div>

      </div>
      {/* Main div */}
      <main className='bg-mainBg w-[70%] mx-auto h-auto
      grid grid-cols-[1fr,1.6fr,1fr] gap-8 mt-10'>

        <div className="flex flex-col gap-5">

          <CalendarDiv />
          <AllCountriesSidebar />

        </div>

        {/* Games div */}
        <GamesContainer />

      </main>

    </div>
  )
}

export default App
