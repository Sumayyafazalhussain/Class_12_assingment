import Image from "next/image"
function HeroSection() {
    return(
        <div className="w-full min-h-[700px] py-16 px-8 bg-[#043873] flex flex-col xl:flex-row justify-around items-center">
            {/* Left Content */}
            <div className="xl:w-1/2 w-full flex flex-col items-center gap-6 xl:gap-8 text-center">
                <h2 className="font-inter font-bold text-[2.5rem] xl:text-[3rem] text-white leading-tight tracking-[-2%]">
                    Get More Done <br /> With  Whitepace
                </h2>
                <p className="font-inter font-normal text-white text-[1rem] xl:text-[1.125rem] leading-relaxed tracking-[-2%]">
                    Project management software that enables your teams to  collaborate, <br /> plan,
                    analyze, and manage everyday tasks.
                </p> 
                <div className="flex items-center justify-center">
                    <button className="h-[70px] w-[190px] rounded-lg bg-[#4F9CF8] font-inter font-medium text-[16px] xl:text-[18px] text-white whitespace-nowrap">
                        Try Whitepace Free
                    </button>
                </div>
            </div>
        
           {/* Right Image */}
            <div className="mt-8 xl:mt-0 xl:w-1/2 w-full flex justify-center mr-36">
                <Image
                    src="/image.png"
                    alt="Hero Image"
                    width={624}
                    height={549}
                    className="max-w-full h-auto" />
            </div>
         </div>

    )
}
export default HeroSection