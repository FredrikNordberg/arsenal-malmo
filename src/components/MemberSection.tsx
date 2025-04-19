"use client";

import Image from "next/image";
import { FaCheckCircle, FaSwatchbook, FaPercent, FaUsers } from "react-icons/fa";

export default function MemberSection() {
  return (
    <>
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero-bild */}
          <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-lg mb-12">
  <Image
    src="/images/supporters.png"
    alt="Arsenal Malmö medlemsbild"
    fill
    className="object-cover object-[0_30%]"
  />
</div>

          {/* Rubrik */}
          <h2 className="text-4xl font-bold text-center mb-1">Bli medlem</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-12 rounded-full" />

          {/* Förmåner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#262626] p-6 rounded-lg border border-gray-700 text-center">
              <FaPercent className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Rabatter</h3>
              <p className="text-gray-300 text-sm">
                20% hos Jacks Sport i Svedala, upp till 35% hos Minposter.se, samt fina deals på Drumbar.
              </p>
            </div>
            <div className="bg-[#262626] p-6 rounded-lg border border-gray-700 text-center">
              <FaUsers className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Gemenskap</h3>
              <p className="text-gray-300 text-sm">
                Matchträffar, medlemsresor, fester och chans att träffa andra gooners i Malmöområdet.
              </p>
            </div>
            <div className="bg-[#262626] p-6 rounded-lg border border-gray-700 text-center">
              <FaSwatchbook className="text-red-600 text-4xl mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2">Souvenirer</h3>
              <p className="text-gray-300 text-sm">
                Medlemmar får tillgång till vår webshop & får Arsenal Malmö-kortet som du kan visa upp.
              </p>
            </div>
          </div>

          {/* Medlemskort-bild */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/arsenalmedlem.jpeg"
                alt="Arsenal Malmö medlemskort"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 text-gray-300 text-sm leading-relaxed">
              <p className="mb-4">
                Som medlem får du ett exklusivt medlemskort som visar att du är en del av Arsenal Malmö. Kortet fungerar även som bevis för rabatter hos våra samarbetspartners.
              </p>
              <p>
                Medlemskortet delas ut på matchträffar eller kan skickas på begäran via e-post.
              </p>
            </div>
          </div>

          {/* Betalningsinfo */}
          <div className="bg-[#262626] rounded-lg p-8 border border-gray-700 mb-16">
            <h3 className="text-2xl font-bold mb-4 text-white">Betalning</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                Swisha <strong>100 kr</strong> till:{" "}
                <span className="font-bold text-white">123 514 43 32</span> (lägg till 3 kr för avgift)
              </li>
              <li>
                Bankgiro: <span className="font-bold text-white">5062-9500</span>
              </li>
              <li>
                Familjemedlemskap: <strong>250 kr</strong> (samma adress)
              </li>
              <li>
                Ange <em>namn, adress & e-post</em> vid betalning för att få nyhetsbrev.
              </li>
            </ul>
          </div>

          {/* Steg */}
          <div className="space-y-4 text-sm text-gray-300 text-center max-w-2xl mx-auto">
            <p><FaCheckCircle className="inline text-[#44B154] mr-2" /> Swisha eller betala via bankgiro</p>
            <p><FaCheckCircle className="inline text-[#44B154] mr-2" /> Ange dina kontaktuppgifter</p>
            <p><FaCheckCircle className="inline text-[#44B154] mr-2" /> Klart! Välkommen till Arsenal Malmö 🎉</p>
          </div>
        </div>
      </section>

      {/* Grön linje */}
      <div className="w-full h-1 bg-red-600" />
    </>
  );
}
