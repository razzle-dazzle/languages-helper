import { PronounsMap } from "@/data/pronouns.model";
import myPronounsService from "@/services/pronouns.service";
import Link from "next/link";

// More: https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Frrbr3hn3qzx61.png

export default function Page() {
  const data = myPronounsService.getList('CA');
  const english = myPronounsService.getList('EN');

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4">
      <h1 className="text-5xl font-semibold text-black dark:text-white text-center mt-12">
        Catalan Pronouns
      </h1>
      <div className="text-black my-2">
        <Link className="text-xl text-black dark:text-white" href={"/"}>
          &laquo; Back
        </Link>
      </div>
      <div className="max-w-[1800px] w-full border shadow-lg my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center align-middle gap-4">
          <PronounTable
            title="Personal"
            pronouns={data.personal}
            reference={english.personal}
          ></PronounTable>
          <PronounTable
            title="Direct Object"
            pronouns={data.direct}
            reference={english.direct}
          ></PronounTable>
          <PronounTable
            title="Indirect Object"
            pronouns={data.indirect}
            reference={english.indirect}
          ></PronounTable>
          <PronounTable
            title="Reflexive"
            pronouns={data.reflexive}
            reference={english.reflexive}
          ></PronounTable>
          <PronounTable
            title="Prepositional"
            pronouns={data.prepositional}
            reference={english.prepositional}
          ></PronounTable>
          <PronounTable
            title="Possessive"
            pronouns={data.possessive}
            reference={english.possessive}
          ></PronounTable>
          <PronounTable
            title="Possessive Adjective"
            pronouns={data.possessiveAdjective}
            reference={english.possessiveAdjective}
          ></PronounTable>
        </div>
      </div>
    </main>
  );
}

type PronounTableProps = {
  pronouns: PronounsMap;
  reference: PronounsMap;
  title: string;
};
const PronounTable = ({ pronouns, reference, title }: PronounTableProps) => {
  const engStyles = 'text-right p-1 pr-2 border-b border-r italic';
  const langStyles = 'text-red-700 font-semibold p-1 pl-2 border-b';
  return (
    <div className='border my-2 rounded-md bg-white'>
      <h2 className="font-bold text-xl text-center my-4">{title}</h2>
      <div className="grid p-4 mb-4 grid-cols-2">
        
        <div className={engStyles}>{reference.S1}</div>
        <div className={langStyles}>{pronouns.S1}</div>
        <div className={engStyles}>{reference.S2}</div>
        <div className={langStyles}>{pronouns.S2}</div>
        <div className={engStyles}>{reference.S3}</div>
        <div className={langStyles}>{pronouns.S3}</div>

        <div className={engStyles}>{reference.P1}</div>
        <div className={langStyles}>{pronouns.P1}</div>
        <div className={engStyles}>{reference.P2}</div>
        <div className={langStyles}>{pronouns.P2}</div>
        <div className={engStyles}>{reference.P3}</div>
        <div className={langStyles}>{pronouns.P3}</div>
      </div>
    </div>
  );
};
