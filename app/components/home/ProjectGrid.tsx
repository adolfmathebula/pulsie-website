// components/ProjectGrid.tsx

"use client";
import Image from "next/image";

const projects = [
  {
    title: "Onomo Hotels",
    description: "A stylish photoshoot campaign for Onomo Hotels.",
    image: "/images/kandi-steps-feature-900x604.jpg",
  },
  {
    title: "Klok",
    description: "Branding and cocktail design for Klok.",
    image: "/images/kandi-steps-feature-900x604.jpg",
  },
  {
    title: "Radio Workshop",
    description: "Youth media project empowering voices.",
    image: "/images/kandi-steps-feature-900x604.jpg",
  },
  {
    title: "Wayfinding Design",
    description: "Creative signage design for modern spaces.",
    image: "/images/kandi-steps-feature-900x604.jpg",
  },
  {
    title: "Amdocs Campaign",
    description: "Unlocking potential through corporate storytelling.",
    image: "/images/kandi-steps-feature-900x604.jpg",
  },
  {
    title: "H2O Branding",
    description: "Brand identity and marketing collateral for H2O.",
    image: "/images/kandi-steps-feature-900x604.jpg",
  },
  {
    title: "Kokoma",
    description: "Restaurant branding and menu design.",
    image: "/images/kandi-steps-feature-900x604.jpg",
  },
];

export default function ProjectGrid() {
  const itemGridClasses = [
    // 0: Onomo - left large (tall & wide)
    "lg:col-span-2 lg:row-span-2",
    // 1: Klok - tall middle
    "lg:col-span-1 lg:row-span-2",
    // 2: Radio Workshop - top-right
    "lg:col-span-1 lg:row-span-1",
    // 3: Wayfinding Design - below Radio Workshop
    "lg:col-span-1 lg:row-span-1",
    // 4: Amdocs Campaign - bottom-left wide
    "lg:col-span-2 lg:row-span-1",
    // 5: H2O Branding - bottom-middle
    "lg:col-span-1 lg:row-span-1",
    // 6: Kokoma - bottom-right
    "lg:col-span-1 lg:row-span-1",
  ];

  return (
    <div
      className="
        grid gap-4 p-4
        grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-4 lg:auto-rows-[minmax(150px,_1fr)] lg:h-screen
      "
    >
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={`relative group overflow-hidden rounded-xl shadow-lg ${itemGridClasses[idx]}`}
        >
          {/* Image with zoom effect */}
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-60 transition-opacity duration-500 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
