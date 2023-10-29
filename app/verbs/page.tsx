import myVerbsService from "@/services/verbs.service";
import { Verbs } from "@/data/verbs.model";
import { PronounsPersonalShortCAT } from "@/data/pronouns";
// import { classnames } from "tailwindcss-classnames";
import { clsx } from "clsx";

// export async function generateStaticParams() {
//   const items = myVerbsService.getProjects();
//   return items;
// }

export default function Page() {
  const data = myVerbsService.getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-[1600px] w-full py-12">
        <div className="grid grid-cols-5 gap-12 justify-center align-middle">
          {data.map((verb, key) => {
            return <VerbBlock verb={verb} key={key}></VerbBlock>;
          })}
        </div>
      </div>
    </main>
  );
}

type VerbBlockProps = {
  verb: Verbs;
};
function VerbBlock({ verb }: VerbBlockProps) {
  function getPronoun(index: number): string {
    switch (index) {
      case 0:
        return PronounsPersonalShortCAT.S1;
      case 1:
        return PronounsPersonalShortCAT.S2;
      case 2:
        return PronounsPersonalShortCAT.S3;
      case 3:
        return PronounsPersonalShortCAT.P1;
      case 4:
        return PronounsPersonalShortCAT.P2;
      case 5:
        return PronounsPersonalShortCAT.P3;
      default:
        return "";
    }
  }

  return (
    <article className="text-black dark:text-black">
      <h2 className="text-red-700 text-2xl font-bold text-center leading-tight">
        {verb.verb.infinitive.ca}
      </h2>
      {/* <h3 className="text-base italic text-center">
        {verb.verb.infinitive.es}
      </h3> */}
      <h3 className="text-lg italic text-center text-gray-700 mb-1.5 leading-tight">
        ({verb.verb.infinitive.en})
      </h3>
      <div className="grid grid-cols-2 pb-2 border-b border-gray-300">
        {verb.indicative.present.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={clsx(
                  "flex flex-row gap-0.5",
                  index % 2 === 0 ? "justify-end pr-2" : ""
                )}
              >
                <div
                  className={clsx(
                    index % 2 === 0 ? "" : "border-l border-gray-300",
                    "pl-2",
                    "font-light"
                  )}
                >
                  {getPronoun(index).toLowerCase()}
                </div>
                <div className="text-red-700 font-semibold">
                  {item.toLowerCase()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='grid grid-cols-2 gap-0 mt-2'>
        <div className='text-xs font-bold text-right pr-2 tracking-tight'>
          PARTICIPI
        </div>
        <div className='text-xs font-bold border-l border-gray-300 pl-2 tracking-tight'>
          GERUNDI
        </div>
        <div className='text-xs font-semibold text-red-700 text-right pr-2'>
          {verb.verb.participle.ca.toLowerCase()}
        </div>
        <div className='text-xs font-semibold text-red-700 border-l border-gray-300 pl-2'>
          {verb.verb.gerund.ca.toLowerCase()}
        </div>
      </div>
    </article>
  );
}
