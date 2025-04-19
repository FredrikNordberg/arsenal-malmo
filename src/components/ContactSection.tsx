"use client";

export default function ContactSection() {
  return (
    <>
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Rubrik */}
          <h2 className="text-4xl font-bold text-center text-white mb-1">
            Kontakt
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6 rounded-full" />

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10">
            {/* Kontaktinfo */}
            <div className="h-[400px] space-y-6 text-sm md:text-base leading-relaxed bg-[#262626] border border-gray-700 rounded-lg p-6 shadow-sm overflow-y-auto">
              <div>
                <p className="font-semibold text-red-600">E-post:</p>
                <a
                  href="mailto:info@arsenalmalmo.se"
                  className="underline text-white"
                >
                  info@arsenalmalmo.se
                </a>
              </div>

              <div>
                <p className="font-semibold text-red-600">Adress:</p>
                <p className="text-gray-300">
                  Hyllie Boulevard 59<br />215 37 Malmö
                </p>
              </div>

              <div>
                <p className="font-semibold text-red-600">Instagram:</p>
                <a
                  href="https://instagram.com/arsenal.malmo"
                  className="underline text-white"
                  target="_blank"
                >
                  @arsenal.malmo
                </a>
              </div>

              <div>
                <p className="font-semibold text-red-600">Facebook:</p>
                <a
                  href="https://facebook.com/ArsenalMalmo"
                  className="underline text-white"
                  target="_blank"
                >
                  @ArsenalMalmö
                </a>
              </div>
            </div>

            {/* Karta */}
            <div className="h-[400px] rounded-lg overflow-hidden border border-gray-700 shadow-sm">
  <iframe
    title="Google Maps - Arsenal Malmö"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.5276102574785!2d12.982243515928535!3d55.562794280520664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a18c1fcf6c07%3A0x8ef40848ed0288e1!2sHyllie%20Boulevard%2059%2C%20215%2037%20Malm%C3%B6!5e0!3m2!1ssv!2sse!4v1610000000000!5m2!1ssv!2sse"
    className="w-full h-full"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>
        </div>
      </section>

      {/* Grön linje */}
      <div className="w-full h-1 bg-red-600" />
    </>
  );
}

