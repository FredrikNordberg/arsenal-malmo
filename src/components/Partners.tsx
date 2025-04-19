import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Drumbar",
    logo: "/images/partners/drumbar.jpg",
    url: "https://drumbar.se", // Exempel-url
  },
  {
    name: "Netshirt",
    logo: "/images/partners/netshirt.jpg",
    url: "https://netshirt.se",
  },
  {
    name: "Jack Sport",
    logo: "/images/partners/jacksport.jpg",
    url: "https://jackssport.se/",
  },
  {
    name: "Minposter",
    logo: "/images/partners/minposter.png",
    url: "https://minposter.se",
  },
];

export default function Partners() {
  return (
    <>
    <section className="bg-[#1a1a1a] py-20 px-4">
      {/* Rubrik */}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
        Samarbeten
      </h2>

      {/* Grön linje under rubrik */}
      <div className="h-1 w-24 bg-red-600 mx-auto mb-12 rounded-full" />

      {/* Partnerlogos */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {partners.map((partner) => (
          <Link
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="rounded-full bg-white p-4 border border-gray-200 transition transform hover:scale-105">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={100}
                className="object-contain w-24 h-24"
              />
            </div>

            {/* Röd linje under loggan vid hover */}
            <div className="h-1 w-0 bg-[#EF0107] mt-2 transition-all duration-300 group-hover:w-12 mx-auto rounded-full" />

            <p className="mt-2 text-sm font-medium text-red-600 group-hover:text-white transition">
              {partner.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
    <div className="w-full h-1 bg-red-600" />
    </>
  );
}
