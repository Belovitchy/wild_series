import { useEffect, useState } from "react";

interface ProgramsInterface {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
}

interface CategoriesInterface {
  id: number;
  name: string;
}

function Programs() {
  const [programs, setPrograms] = useState<ProgramsInterface[]>([]);
  const [categories, setCategories] = useState<CategoriesInterface[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
        console.log("Fetched programs:", data);
      });
    fetch("http://localhost:3310/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log("Fetched categories:", data);
      });
  }, []);

  const getCategoryName = (categoryId: number) => {
    const found = categories.find((cat) => cat.id === categoryId);
    return found ? found.name : "Catégorie inconnue";
  };

  return (
    <div>
      {programs.map((program) => (
        <section key={program.id} className="flex flex-raw items-center gap-4">
          <img
            src={program.poster}
            alt="affiche du film"
            className="w-[119px] h-[174px]:"
          />
          <div className="flex flex-col justify-between h-[174px] w-[476px]">
            <h1 className="font-extrabold text-1xl">{program.title}</h1>
            <h2 className="text-lg">{getCategoryName(program.category_id)}</h2>
            <h3>
              {program.country} : {program.year}
            </h3>

            <p className="text-xs">{program.synopsis}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
export default Programs;
