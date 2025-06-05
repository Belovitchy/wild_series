import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ProgramsInterface {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
}

function ProgramDetail() {
  const { id } = useParams();
  const [program, setProgram] = useState<ProgramsInterface | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/programs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProgram(data);
      });
  }, [id]);
  return (
    <>
      <h1>{program?.title}</h1>
    </>
  );
}
export default ProgramDetail;
