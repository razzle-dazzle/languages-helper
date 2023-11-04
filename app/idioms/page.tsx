import { Idiom } from "@/data/idioms";
import { PronounsMap } from "@/data/pronouns.model";
import myIdiomsService from "@/services/idioms.service";
import Link from "next/link";

export default function Page() {
  const data = myIdiomsService.getList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4">
      <h1 className="text-5xl font-semibold text-black dark:text-white text-center mt-12">
        Spanish Idioms
      </h1>
      <div className="text-black my-2">
        <Link className="text-xl text-black dark:text-white" href={"/"}>
          &laquo; Back
        </Link>
      </div>
      <div className="max-w-[1800px] w-full border shadow-lg my-12 bg-white">
        <div className="grid grid-cols-5 justify-center align-middle">
          <div className="font-bold p-2">Type</div>
          <div className="font-bold p-2">Idiom</div>
          <div className="font-bold p-2">Literal</div>
          <div className="font-bold p-2">Meaning</div>
          <div className="font-bold p-2">Equivalent</div>
          {data.map((idiom, key) => {
            return <IdiomTable key={key} idiom={idiom}></IdiomTable>;
          })}
        </div>
      </div>
    </main>
  );
}

type IdiomTableProps = {
  idiom: Idiom;
};
const IdiomTable = ({ idiom }: IdiomTableProps) => {
  return (
    <>
      <div className="border-t font-semibold p-2">{idiom.type}</div>
      <div className="border-t border-l text-red-700 font-semibold p-2">{idiom.idiom}</div>
      <div className="border-t border-l p-2">{idiom.literal}</div>
      <div className="border-t border-l p-2">{idiom.meaning}</div>
      <div className="border-t border-l p-2 italic">{idiom.equivalent}</div>
    </>
  );
};
