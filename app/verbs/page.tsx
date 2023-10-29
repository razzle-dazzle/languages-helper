import myVerbsService from "@/services/verbs.service";
import VerbBlock from './VerbBlock';
// import { classnames } from "tailwindcss-classnames";

// export async function generateStaticParams() {
//   const items = myVerbsService.getProjects();
//   return items;
// }

export default function Page() {
  const data = myVerbsService.getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-[1600px] w-full py-12 border">
        <div className="grid grid-cols-5 justify-center align-middle">
          {data.map((verb, key) => {
            return <VerbBlock verb={verb} key={key} col={key % 5} row={(key % 10) >= 5 ? 1 : 0}></VerbBlock>;
          })}
        </div>
      </div>
    </main>
  );
}

