import data from "../../data.json";
import img from "../../assets1/images/icon-memory.svg"

export default function Summary({width,height, mobileWidth,mobileHeight}) {
 const tabItem = data.map(data => {
  return <Tab
     key={data.score}
     {...data}/>})
    return(
        <>
         <div className={`xl:${width} flex  xl:pb-5 rounded-  xl:${height} justify-center xl:items-center ${mobileWidth} ${mobileHeight}`}>
          <div className={`flex flex-col   w-[95%] xl:h-[95%]  justify-between `} >
           <h1 className="text-2xl text-darkGrayBlue font-bold">Summary</h1>
           <div className="flex flex-col h-[75%] justify-between ">
             {tabItem}
           </div>
          <Button/>
         </div>
         </div>
         
        </>
    )
}


 function Tab({category,icon,score,color,backgroundColor}) {
    //console.log(icon)
    const text = {
        red: 'bg-lightRedAlpha text-lightRed',
        yellow: 'bg-orangeyYellowAlpha text-orangeyYellow',
        green: 'bg-greenTealAlpha text-greenTeal',
        blue : 'bg-cobaltBlueAlpha text-cobaltBlue',
    }
    return(
        <>
         <div className={`font-custom bg-${backgroundColor} flex h-[60px] xl:h-[80px] justify-between items-center rounded-lg `}> 
          <div className="flex items-center ml-4 gap-3">
           <img src={img} alt="icon" />
            <p className={`text-xl text-${color}`}>{category}</p>
            <img src="" alt="" />
          </div>
          <p className="mr-6 text-darkGrayBlue/60"><span className="text-darkGrayBlue font-bold">{score}</span>/100</p>
         </div>

        </>
    ) 
}

function Button() {
    return <button className="rounded-full bg-darkGrayBlue text-white h-[60px] mt-5">Continue</button>
}