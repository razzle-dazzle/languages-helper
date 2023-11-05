import Link from "next/link";
import { Idiom } from "@/data/idioms";
import myAdverbsService from '@/services/adverbs.service';
import { Adverb } from '@/data/adverbs';

export default function Page() {
  const data = myAdverbsService.getList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4">
      <h1 className="text-5xl font-semibold text-black dark:text-white text-center mt-12">
        Conjunctive Adverbs
      </h1>
      <div className="text-black my-2">
        <Link className="text-xl text-black dark:text-white" href={"/"}>
          &laquo; Back
        </Link>
      </div>
      <div className="max-w-[1800px] w-full border shadow-lg my-12 bg-white">
        <div className="grid grid-cols-5 justify-center align-middle">
          <div className="font-bold p-2">Category</div>
          <div className="font-bold p-2">Adverb - EN</div>
          <div className="font-bold p-2">Adverb - ES</div>
          <div className="font-bold p-2">Adverb - CA</div>
          <div className="font-bold p-2">Example</div>
          {data.map((idiom, key) => {
            return <Table key={key} adverb={idiom}></Table>;
          })}
        </div>
      </div>
    </main>
  );
}

type TableProps = {
  adverb: Adverb;
};
const Table = ({ adverb }: TableProps) => {
  return (
    <>
      <div className="border-t font-semibold p-2">{adverb.category}</div>
      <div className="border-t border-l text-red-700 font-semibold p-2">{adverb.adverb.en}</div>
      <div className="border-t border-l p-2">{adverb.adverb.es}</div>
      <div className="border-t border-l p-2">{adverb.adverb.ca}</div>
      <div className="border-t border-l p-2 italic">{adverb.example.en}</div>
    </>
  );
};
