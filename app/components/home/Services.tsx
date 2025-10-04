import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Brand design",
    description:
      "We fuse creative thinking, strategy and effective design to develop meaningful, differentiated, and authentic brands for companies big and small.",
    image: "/images/circle.png", // replace with your actual image path
  },
  {
    id: "02",
    title: "Graphic design",
    description:
      "We care about details and delivering on objectives. Working with our clients we craft original ideas into impactful designs, across multiple touchpoints.",
    image: "/images/square.png",
  },
  {
    id: "03",
    title: "Digital design",
    description:
      "We combine our expertise with your knowledge of your business to help your brand thrive online. Together we design solutions that last and stay relevant.",
    image: "/images/triangle.png",
  },
];

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-center text-2xl font-light mb-16">Services</h2>
      <div className="space-y-2">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center md:items-start gap-10  ${
              index % 2 === 1 ? "md:flex-row-reverse-deleted" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <p className="text-gray-400 font-semibold mb-2">
                {service.id}. <span className="text-black">{service.title}</span>
              </p>
              <p className="text-gray-700 mb-2">{service.description}</p>
            {/* Stylish button */}
              <Link
                href="#"
                className="relative inline-block text-sm font-mono text-black  overflow-hidden group"
                >
                Learn more...
                </Link>


              {/* <Link
                href="#"
                className="relative inline-block px-6 py-1 font-semibold text-black border border-black overflow-hidden group"
                >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Learn more
                </span>
                <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                </Link> */}


            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
