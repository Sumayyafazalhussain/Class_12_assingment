import Image from "next/image";

function Sec() {
  return (
    <div className="w-full h-[350px] bg-white py-16 px-8 flex flex-col items-center gap-12">
      <div className="text-center mt-14">
        <h1 className="font-inter font-bold text-4xl lg:text-5xl xl:text-6xl text-black leading-tight tracking-wide">
          Our Sponsors
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-8 xl:gap-16">
        <div className="flex justify-center items-center">
          <Image src="/Apple.png" alt="Apple" width={45} height={68} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/microsoft.png" alt="Microsoft" width={150} height={62} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/Slack.png" alt="Slack" width={140} height={71} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/Google.png" alt="Google" width={120} height={69.81} />
        </div>
      </div>
    </div>
  );
}

export default Sec;
