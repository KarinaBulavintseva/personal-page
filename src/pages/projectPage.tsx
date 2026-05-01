import { useNavigate } from "react-router";
import { Container, EarthScene } from "../components";
import { GrFormPreviousLink } from "react-icons/gr";

export const ProjectPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <button
        onClick={() => navigate(-1)}
        className="group flex items-center gap-2 px-2 py-2 bg-primary text-text-contrast font-semibold rounded-lg 
             hover:bg-primary/80 transition-all duration-200 active:scale-95 cursor-pointer"
      >
        <GrFormPreviousLink className="text-xl group-hover:-translate-x-1 transition-transform text-text-contrast" />
        <span>Назад</span>
      </button>

      <div className="mt-4 mb-4">
        <h1>Улюблений 3D проєкт</h1>
        <p>
          Земля - це більше, ніж просто планета. Це наш спільний дім у
          безмежному космосі, сповнений життя та неймовірної краси. Кожен із нас
          має дбати про нього й берегти його.
        </p>
      </div>

      <div className="w-full h-100 md:h-150 overflow-hidden">
        <EarthScene />
      </div>
    </Container>
  );
};
