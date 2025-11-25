import colleges from "../../colleges.json";
import Header from "../Header";
import Footer from "../Footer";
import UniversitiesFilter from "./UniversitiesFilter";

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
            <p className="text-[rgb(58_59_62)] text-lg">
              Explore {colleges.length} universities across Pakistan with detailed information about sectors, locations, and direct links.
            </p>
          </div>
          <UniversitiesFilter universities={colleges} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
