import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-center items-center h-32 bg-[#a80017]">
      <Image
        alt="logo"
        src="/casawhite.png"
        height={1500}
        width={1500}
        className="w-40"
      />
    </div>
  );
};

export default Header;
