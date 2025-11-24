import colleges from "../../colleges.json";
import Header from "../Header";
import Footer from "../Footer";
import SchoolCard from "./Card";

export default function Home() {
  return (
    <div>
      <div className="py-10 min-h-screen">
        <Header />
        <div className="flex flex-col max-w-7xl mx-auto pt-24 px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Pakistani Universities
            </h1>
            <p className="text-gray-400 text-lg">
              Explore {colleges.length} universities across Pakistan with detailed information about sectors, locations, and direct links.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college, i) => (
              <SchoolCard
                name={college.name}
                link={college.link}
                city={college.city}
                sector={college.sector}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
