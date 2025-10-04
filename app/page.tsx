import Image from "next/image";
import Services from "./components/home/Services";
import InsightsGrid from "./components/home/InsightsGrid";
import ProjectGrid from "./components/home/ProjectGrid";

export default function Home() {
  return (
    <div>
      <ProjectGrid />
     <Services/>
     <InsightsGrid />
    </div>
  );
}
