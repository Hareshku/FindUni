import colleges from "../../colleges.json";
import Header from "../Header";
import SchoolCard from "./Card";

export default function Home() {
  return (
    <div className="py-10">
      <Header />
      <div className="flex flex-col max-w-7xl mx-auto pt-24">
        <h1 className="text-2xl text-gray-500 font-semibold uppercase tracking-widest">
          Colleges
        </h1>
        <div className="space-y-4 pt-5">
          {colleges.map((college, i) => (
            //@ts-ignore
            <SchoolCard
              name={college.SchoolName}
              url={college.URL}
              city={college.City}
              state={college.State}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
