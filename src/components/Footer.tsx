import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logotyp och tagline */}
        <div className="h-20 w-20 relative scale-225 -ml-1">
          <Image
            src="/images/logo1.png"
            alt="Arsenal Malmö logotyp"
            fill
            className="object-contain"
          />
          
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
          <p className="text-sm">
            Arsenal Malmö
            <br />
            Hyllie Boulevard
            <br />
            59 215 37 Malmö
          </p>
          <p className="text-sm mt-2">
            Telefon:{" "}
            <a href="tel:+467012345XX" className="underline">
              070-123 45 XX
            </a>
            <br />
            E-post:{" "}
            <a href="mailto:info@arsenalmalmo.se" className="underline">
              info@arsenalmalmo.se
            </a>
          </p>
        </div>

        {/* Följ oss */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Följ oss</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href="https://facebook.com/arsenalmalmo"
                target="_blank"
                className="hover:text-[#45B649]"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#45B649]">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer-linje */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Arsenal Malmö. All rights reserved.
      </div>
    </footer>
  );
}
