'use client';
import Image from "next/image";

export default function navbar() {
   return (
    <div className="w-full h-[92px] bg-[#043873] py-4 px-[220px] flex justify-between items-center">
        {/* Logo Section */}
        <div>
            <Image src="/logo.png" alt="logo" width={191} height={34} />
        </div>
        
        {/* Navigation Menu */}
        <div className="w-[700px] h-[60px] flex justify-between items-center gap-[60px]">
            <div className="w-[300px] h-[23px]">
                <ul className="text-[18px] font-[DM Sans] font-[500] leading-[23px] flex justify-between text-white gap-8 h-[23px]">
                <li>Resources</li>
                    <li>Products</li>
                    <li>Pricing</li>
                    <li>Services</li>
                    
                </ul>
            </div>
            
            {/* Login Button */}
            <div className="w-[126px] h-[60px] flex items-center">
                <button className="py-4 px-10 rounded-[8px] bg-[#FFE491]">
                    Login
                </button>
            </div>
        </div>
    </div>
   );
}
