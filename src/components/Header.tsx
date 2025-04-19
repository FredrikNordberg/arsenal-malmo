// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// const navLinks = [
//   { name: "Hem", href: "/" },
//   { name: "Medlem", href: "/member" },
//   { name: "Styrelsen", href: "/styrelsen" },
//   { name: "Om Oss", href: "/about" },
//   { name: "Podcast", href: "/podcast" },
//   { name: "Shop", href: "/shop" },
//   { name: "Kontakt", href: "/contact" },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="bg-red-600 text-white p-4 shadow-md fixed top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logotyp */}
//         <Link href="/" className="relative w-[90px] h-[40px] ml-5">
//           <Image
//             src="/images/logo1.png"
//             alt="Arsenal Malmö logotyp"
//             fill
//             className="object-contain scale-425"
//           />
//         </Link>

//         {/* Desktop navigation */}
//         <nav className="hidden md:flex space-x-6 font-bold text-lg">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="relative inline-block transition-transform transform hover:scale-105 hover:text-white"
//               onClick={closeMenu}
//             >
//               <span className="after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
//                 {link.name}
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Hamburger ikon - Mobil */}
//         <button
//           className="md:hidden text-3xl focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobilmeny */}
//       {menuOpen && (
//         <div className="absolute top-full left-0 w-full bg-red-700 text-white px-6 py-4 space-y-4 z-40 backdrop-blur-sm shadow-lg">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="block font-semibold text-lg hover:text-white"
//               onClick={closeMenu}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Hem", href: "/" },
  { name: "Medlem", href: "/member" },
  { name: "Styrelsen", href: "/styrelsen" },
  { name: "Om Oss", href: "/about" },
  { name: "Podcast", href: "/podcast" },
  { name: "Shop", href: "/shop" },
  { name: "Kontakt", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="bg-red-600 text-white p-4 shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logotyp */}
          <Link href="/" className="relative w-[90px] h-[40px] ml-5 z-50">
            <Image
              src="/images/logo1.png"
              alt="Arsenal Malmö logotyp"
              fill
              className="object-contain scale-425"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6 font-bold text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative inline-block transition-transform transform hover:scale-105 hover:text-white"
                onClick={closeMenu}
              >
                <span className="after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Hamburger ikon - Mobil */}
          <button
            className="md:hidden text-3xl focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Fullscreen mobilmeny */}
      {menuOpen && (
  <div className="fixed inset-0 bg-[#1a1a1a] z-40 pt-24 flex flex-col items-center justify-center text-white space-y-6 px-6">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-2xl font-semibold hover:text-[#FF6666]"
        onClick={closeMenu}
      >
        {link.name}
      </Link>
    ))}
  </div>
      )}
    </>
  );
}
