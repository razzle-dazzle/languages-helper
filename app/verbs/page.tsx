import myVerbsService from "@/services/verbs.service";
import VerbBlock from "./VerbBlock";
import Link from "next/link";
// import { classnames } from "tailwindcss-classnames";

// export async function generateStaticParams() {
//   const items = myVerbsService.getProjects();
//   return items;
// }

export default function Page() {
  const data = myVerbsService.getVerbs();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className='text-5xl font-semibold text-black text-center mt-12'>Catalan Verbs</h1>
      <div className="max-w-[1800px] w-full border shadow-lg my-12">
        <div className="grid grid-cols-4 justify-center align-middle">
          {data.map((verb, key) => {
            const col = key % 4;
            const row = key % (4 * 2) >= 4 ? 1 : 0;
            const verbPage = verb.id;
            const href = `/verbs/${verbPage}`;

            return (
              <Link href={href} key={key}>
                <VerbBlock
                  forms={verb.forms}
                  id={verb.id}
                  tense={verb.indicative.present}
                  col={col}
                  row={row}
                  showInfinitiveTitle
                ></VerbBlock>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
