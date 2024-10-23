import ResultCard from "./Result";
import { useState } from "react";
import Summary from "./Summary";

export default function Card() {
const [useScore, setUseScore] = useState(0)
 function setScore(value) {
   setUseScore(() => {
     
   })
 }
 
  return(
    <>
    
     <div className="font-custom bg-white shadow-xl rounded-3xl  flex flex-col h-[125vh] xl:flex xl:flex-row xl:w-[70%] xl:mx-auto lg:h-[550px] xl:pr-4  gap-6 md:flex md:flex-row md:h-[60vh]">
      <ResultCard 
       mobileWidth='w-full'
       mobileHeight="h-[45%]"
       width="w-[45%]"
       height="h-full"
       score={useScore}
      />
      <Summary
       mobileWidth='w-full'
       mobileHeight="h-[50%]"
       width="w-1/2"
       height="h-full"
       scoreTrack={() => setScore(value)}
      />
     </div>
     
    </>
    
  ) 
}