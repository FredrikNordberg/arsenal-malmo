"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const history = [
    {
      year: "2015–2016",
      text: `Föreningen grundas i Malmö på initiativ av Magnus Ahldén och Magnus Johansson. Första styrelsemötet hölls 31 oktober 2015. Styrelsen: Magnus Ahldén (ordförande), Magnus Johansson, Anneli Svensson, Carina Winqvist, Ulf Eneberg, Tony Franzen, Hans Hansson. Medlemmar: 43 st.`,
    },
    {
      year: "2016–2017",
      text: `Souvenir framtagen med Jacks Sport, första medlemsresa, FA-cupseger firades stort. Styrelse: Ahldén, Johansson, Hansson, Eneberg, Modig, Larsson. Medlemmar: 70 st.`,
    },
    {
      year: "2017–2018",
      text: `Julfest, vårfest, nyckelring till medlemmar, resa till Östersund – flagga syntes i Rapport. Medlemmar: 119 st.`,
    },
    {
      year: "2018–2019",
      text: `Medlemsresa till Arsenal–Liverpool. Pubquiz i London med andra supporterklubbar. Nya souvenirer: piké, t-shirt, halsduk. Medlemmar: 122 st.`,
    },
    {
      year: "2019–2020",
      text: `Podcasten startade av Niklas L.H., första avsnitt i augusti. Julfest, FA-cupfirande trots pandemi. Medlemmar: 125 st.`,
    },
    {
      year: "2020–2021",
      text: `Pandemi med inställda träffar men podden fortsatte. Styrelse: Ahldén, Hegenius, Modig m.fl. Medlemmar: 107 st.`,
    },
    {
      year: "2021–2022",
      text: `5-årsfest med Stefan Schwarz som hedersmedlem. Drumbar blev nya stampuben. 100:e poddavsnittet! Medlemmar: 138 st.`,
    },
    {
      year: "2022–2023",
      text: `Webshop lanserades med Netshirt. Jul- och vårfest. Medlemsrekord: 155 st.`,
    },
    {
      year: "2023–2024",
      text: `Podcast med Rami Shaaban, fullsatta träffar, rekord igen! Medlemmar: 174 st.`,
    },
  ];
  return (
    <>
    <div className="w-full h-1 bg-red-600" />
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Rubrik */}
          <h2 className="text-4xl font-bold text-center text-white mb-1">
            Arsenal Malmö
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6 rounded-full" />

          {/* Flex-layout */}
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Bild */}
            <div className="w-full md:w-1/2 h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/group.png"
                alt="Arsenal Malmö Gruppbild"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Historik med fade-in */}
            <div className="w-full md:w-1/2 max-h-[600px] overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-[#45B649]/80 scrollbar-track-transparent">
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#262626] border border-gray-700 rounded-md p-4 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-white mb-1">
                    {item.year}
                  </h3>
                  <p className="text-sm text-gray-300 leading-snug">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-1 bg-red-600" />
    </>
  );
}
