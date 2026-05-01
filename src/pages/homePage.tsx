import { Link } from "react-router";
import gradesData from "../data/grades-data.json";
import moviesData from "../data/movies-data.json";
import moodData from "../data/mood-data.json";
import traitsData from "../data/traits-data.json";
import { MAP_URL } from "../constants";
import { Container, GradesTable, Card, Slider } from "../components";

export const HomePage = () => {
  return (
    <Container>
      <section className="space-y-8">
        <h1>Вітаю на моїй сторінці!</h1>

        <section>
          <h2>Особиста інформація</h2>
          <p className="mb-1 text-text-muted">Ім'я: Карина</p>
          <p className="text-text-muted">
            Електронна пошта:
            <a href="mailto:Karyna.Bulavintseva@infiz.khpi.edu.ua">
              Karyna.Bulavintseva@infiz.khpi.edu.ua
            </a>
          </p>
        </section>

        <section>
          <h2>Результати навчання у минулому семестрі</h2>
          <div className="flex justify-center">
            <GradesTable data={gradesData} />
          </div>
        </section>

        <section>
          <h2>Список улюблених фільмів та ТВ-шоу</h2>
          <ol className="list-decimal list-inside space-y-2">
            {moviesData.map((movie) => {
              return (
                <li key={movie.id}>
                  <a
                    href={movie.imdb_url}
                    className="hover:text-primary transition"
                  >
                    {movie.title}
                  </a>
                </li>
              );
            })}
          </ol>
        </section>

        <section>
          <h2>3 слова, якими можна мене описати</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {traitsData.traits.map((item, index) => (
              <li
                key={index}
                className="p-4 rounded-xl bg-bg-surface text-center shadow-md transition-transform hover:scale-104"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Я у трьох різних настроях</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
              {moodData.map((moodItem) => (
                <Card key={moodItem.id} item={moodItem} />
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2>Улюблена цитата</h2>
          <p className="italic leading-relaxed text-text-muted">
            <q>Якщо бажаєш, щоб світ змінився, – сам стань цією зміною</q> -
            Махатма Ганді
          </p>
        </section>

        <section>
          <h2>Місто, в якому мешкаю</h2>
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <p className="text-text-muted leading-relaxed text-justify md:w-1/2">
              Місто Мерефа - невеличке та затишне місто, оточене мальовничою
              природою та розташоване неподалік від Харкова. Має багату історію,
              що бере свій початок ще з XVII століття. За деякими історичними
              припущеннями, саме з цими місцями пов’язане ім’я видатного
              кошового отамана Запорозької Січі - Івана Сірка. Вважається, що
              він брав участь у заселенні цих місць та проживав у районі
              сучасної Артемівки, де розташовувався його родовий маєток. На
              центральній площі міста встановлено пам’ятник Івану Сірку, що
              нагадує про славне минуле краю.
            </p>

            <iframe
              className="w-full h-65 md:h-90 md:w-1/2  rounded-xl shadow-md"
              src={MAP_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section>
          <h2>Цікаві місця Харківської області</h2>
          <Slider />
        </section>

        <section>
          <h2>Улюблений 3D проєкт</h2>
          <Link
            to="/favorite-project"
            className="hover:text-primary transition"
          >
            Переглянути
          </Link>
        </section>
      </section>
    </Container>
  );
};
