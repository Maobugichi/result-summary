import ResultCard from "./Result";
import { useState } from "react";
import Summary from "./Summary";
import  data  from "/data.json";

export default function Card() {
const [useScore, setUseScore] = useState(0)
 function setScore(value) {
   setUseScore(() => {
     
   })
 }
 
  return(
    <>
     <div className="font-custom bg-white shadow-xl rounded-3xl  flex flex-col h-[105vh] lg:flex lg:flex-row lg:w-[70%] lg:mx-auto lg:h-[550px] lg:pr-4  gap-6">
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