import myPronounsService from "@/services/pronouns.service";
import Link from "next/link";
import PronounTable from "./PronounTable";

// More: https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Frrbr3hn3qzx61.png

export default function Page() {
  const spanish = myPronounsService.getList("ES");
  const catalan = myPronounsService.getList("CA");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4">
      <h1 className="text-5xl font-semibold text-black dark:text-white text-center my-12">
        Pronouns
      </h1>
      <div className="text-black">
        <Link className="text-xl text-black dark:text-white" href={"/"}>
          &laquo; Back
        </Link>
      </div>
      <div className="max-w-[1800px] w-full">
        <h2 className="text-3xl font-semibold text-black dark:text-white text-center mt-12">
          Spanish Pronouns
        </h2>
        <PronounTable pronoun={spanish}></PronounTable>
        <h2 className="text-3xl font-semibold text-black dark:text-white text-center mt-12">
          Catalan Pronouns
        </h2>
        <PronounTable pronoun={catalan}></PronounTable>
      </div>
    </main>
  );
}
