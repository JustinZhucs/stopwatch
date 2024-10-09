import React from 'react'
import { useState , useEffect ,useRef } from 'react'

const StopWatch = () => {

    const [IsRunning,setIsRunning] = useState(false);
    const [ElapsedTime,setElapsedTime] = useState(0);
    const IntervalIdRef = useRef(null); // use local variable instead of using useRef hook to avoid memory leak
    const StartTimeRef = useRef(0);

    useEffect(() => {
        if (!IsRunning) { return } // if IsRunning put inside of the const intervalId, setInterval will be called every 10ms
      const intervalId = setInterval(() => {
          setElapsedTime(Date.now() -  StartTimeRef.current)
      }, 10);

      return () => {
          clearInterval(intervalId);
      }
      
    }, [IsRunning])
    
    function Start() {
      setIsRunning(true);
      StartTimeRef.current = Date.now() - ElapsedTime;
      
    }
    function Pause() {
      setIsRunning(false);
    }
    function Reset() {
      setIsRunning(false);
      setElapsedTime(0);
    }
    function FormatTime() {

      let Hours = Math.floor(ElapsedTime / (1000 * 60 * 60));
      let Minutes = Math.floor(ElapsedTime / (1000 * 60) % 60);
      let Seconds = Math.floor(ElapsedTime / (1000 ) % 60);
      let Miliseconds = Math.floor((ElapsedTime % 1000) / 10);

      Hours = String(Hours).padStart(2, "0");
      Minutes = String(Minutes).padStart(2, "0");
      Seconds = String(Seconds).padStart(2, "0");
      Miliseconds = String(Miliseconds).padStart(2, "0");
      
      return `${Minutes}:${Seconds}:${Miliseconds}`
    }


  return (
    <div className='h-[350px] w-[600px] border-4 border-sky-600 bg-zinc-900 flex justify-center items-center rounded-3xl hover:bg-zinc-800 transition-all duration-500 drop-shadow-xl'>
      <div className='space-y-6'>
        <h1 className='text-center font-bold text-8xl text-yellow-300'>{FormatTime()}</h1>
        <div className='text-center space-x-6'>
          <button onClick={Start} className='px-4 py-2 text-2xl rounded-2xl text-white cursor-pointer font-semibold transition-all duration-500 bg-gradient-to-br to-green-500 via-black from-yellow-500 bg-size-200 hover:bg-right-bottom scale-[1] hover:scale-[1.03]'>Start</button>
          <button onClick={Pause}  className='px-4 py-2 text-2xl rounded-2xl text-white cursor-pointer font-semibold transition-all duration-500 bg-gradient-to-br to-sky-500 via-black from-yellow-600 bg-size-200 hover:bg-right-bottom scale-[1] hover:scale-[1.03]'>Pause</button>
          <button onClick={Reset}  className='px-4 py-2 text-2xl rounded-3xl text-white cursor-pointer font-semibold transition-all duration-500 bg-gradient-to-br to-red-500 via-black from-yellow-700 bg-size-200 hover:bg-right-bottom scale-[1] hover:scale-[1.03]'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default StopWatch