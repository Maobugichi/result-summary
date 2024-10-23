export default function ResultCard({height,width,mobileWidth,mobileHeight}) {
    return(
        <>
          <div className={`font-custom rounded-bl-[40px] rounded-br-[40px] xl:rounded-2xl xl:w-1/2  bg-gradient-to-b from-slateBlue to-lightRoyalBlue xl:h-full ${width} flex items-center ${mobileWidth} ${mobileHeight} md:h-full md:rounded-2xl`}>
            <div className="flex flex-col items-center h-[90%]  justify-around">
             <span className="text-xl font-bold text-lightLavender">Your Result</span>
             <div className="flex items-center justify-center rounded-[50%] h-[160px] w-[40%] xl:h-[250px] xl:w-[55%] bg-gradient-to-b from-violetBlue to-persianBlue ">
                <p className="flex flex-col items-center text-xl gap-6 text-lightLavender/50"><span className="xl:text-[80px] text-[54px] text-white font-bold">76</span>of 100</p>
             </div>

             <div className="flex flex-col items-center">
                <h2 className="text-3xl mb-4 font-bold text-white ">Great</h2>
                <p className="w-[70%] xl:w-[55%] text-center text-lightLavender text-[18px]">You scored higher than 65% of the people who have taken these  tests</p>
             </div>
            </div>
          </div>
        </>
    ) 
}