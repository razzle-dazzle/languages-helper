import myAdjectivesService from "@/services/adjectives.service";
// import VerbBlock from "./VerbBlock";
import Link from "next/link";
// import { classnames } from "tailwindcss-classnames";


export default function Page() {
  const data = myAdjectivesService.getList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className='text-5xl font-semibold text-black dark:text-white text-center mt-12'>Spanish Adjectives</h1>
      <div className='text-black my-2'>
        <Link className='text-xl text-black dark:text-white' href={'/'}>&laquo; Back</Link>
      </div>
      <div className="max-w-[1800px] w-full border shadow-lg my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center align-middle">
          {data.map((ajective, key) => {
            const col = key % 4;
            const row = key % (4 * 2) >= 4 ? 1 : 0;
            const verbPage = ajective.en.toLowerCase();
            const href = `/adjectives/${verbPage}`;

            return (
              <Link href={href} key={key}>
                {/* <VerbBlock
                  forms={verb.forms}
                  id={verb.id}
                  tense={verb.indicative.present}
                  col={col}
                  row={row}
                  showInfinitiveTitle
                ></VerbBlock> */}
                <span className='text-red-700 font-semibold'>{ajective.es}</span> - {ajective.en}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
