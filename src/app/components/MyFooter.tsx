import Image from "next/image";

function MyFooter() {
  return (
    <footer className="w-full h-[370px] absolute top-[1140px] left-[0px] px-[120px] pt-[100px] pb-[20px] gap-[150px] bg-[#043873] flex flex-col items-center">
      <div className="w-[1200px] h-[250px] gap-[80px] justify-center flex flex-col items-center">
        <div className="w-[1200px] h-[150px] gap-[80px] flex justify-center items-center">
          <div className="w-[250px] h-[150px] gap-[10px] flex flex-col items-center mt-5">
            <Image src="/Logo.png" alt="logo" width={150} height={30} />
            <p className="w-[200px] h-[100px] font-normal font-inter text-[14px] leading-[28px] tracking-[-2%] text-white text-center">
              whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>
          <div className="w-[250px] h-[120px] gap-[10px] flex flex-col items-center">
            <ul className="font-normal font-inter text-[14px] leading-[25px] tracking-[-2%] text-white text-center">
              <li className="font-bold">Product</li>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer Stories</li>
            </ul>
          </div>
          <div className="w-[250px] h-[120px] gap-[10px] flex flex-col items-center">
            <ul className="font-normal font-inter text-[14px] leading-[25px] tracking-[-2%] text-white text-center">
              <li className="font-bold">Resources</li>
              <li>Blog</li>
              <li>Guides & Tutorials</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="w-[250px] h-[120px] gap-[10px] flex flex-col items-center">
            <ul className="font-normal font-inter text-[14px] leading-[25px] tracking-[-2%] text-white text-center">
              <li className="font-bold">Our Company</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
        <div className="w-[1200px] h-[20px] flex justify-center">
          <p className="font-normal font-inter text-[14px] leading-[18px] tracking-[-2%] text-white text-left">
            ©  Whitepace LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
