import colleges from "../../colleges.json";
import Header from "../Header";
import Footer from "../Footer";
import UniversitiesFilter from "./UniversitiesFilter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="py-10">
        <div className="flex flex-col max-w-7xl mx-auto pt-24 px-6">
          <div className="mb-10">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                University Directory
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Pakistani Universities
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Explore {colleges.length} universities across Pakistan with detailed information about sectors, locations, and direct links to official websites.
            </p>
          </div>
          <UniversitiesFilter universities={colleges} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
