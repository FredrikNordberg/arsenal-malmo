"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
    
    <header className="relative bg-[#EF0107] text-white shadow-md h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">

        {/* Logga – ensamt till vänster */}
        <div className="flex items-center">
        <Link href="/" className="">
          <Image
            src="/images/logo1.png"
            alt="Arsenal Malmö logotyp"
            width={130}
            height={100}
            className="h-40 w-auto object-contain"
          />
          </Link>
        </div>

        {/* Meny */}
        <nav className="space-x-4 font-bold text-lg">
  {[
    { name: "Hem", href: "/" },
    { name: "Medlem", href: "/member" },
    { name: "Styrelsen", href: "/styrelsen" },
    { name: "Om Oss", href: "/about" },
    { name: "Podcast", href: "/podcast" },
    { name: "Shop", href: "/shop" },
    { name: "Kontakt", href: "/contact" },
  ].map((item) => (
    <Link
  key={item.href}
  href={item.href}
  className="relative inline-block transition-transform transform hover:scale-105 hover:text-white"
>
  <span className="after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
    {item.name}
  </span>
</Link>
  ))}
</nav>
      </div>
    </header>
    <div className="w-full h-1 bg-white" />
    </>
  );
}

