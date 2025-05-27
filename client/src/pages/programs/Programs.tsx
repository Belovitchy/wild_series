import { useEffect, useState } from "react";

interface ProgramsInterface {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [programs, setPrograms] = useState<ProgramsInterface[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data);
        console.log("Fetched programs:", data);
      });
  }, []);
  return (
    <div>
      <h1>Programs Page</h1>
      {programs.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          <p>{program.synopsis}</p>
          <img src={program.poster} alt="affiche du film" />
          <h2>{program.country}</h2>
          <h2>{program.year}</h2>
        </div>
      ))}
    </div>
  );
}
export default Programs;
