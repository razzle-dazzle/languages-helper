import myVerbsService from "@/services/verbs.service";
import Link from "next/link";
import { clsx } from "clsx";
import { Verbs } from "@/data/verbs.model";

export default function Page() {
  const data = myVerbsService.getTenses();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <h1 className="text-5xl font-semibold text-black dark:text-white text-center mt-12">
        Verbs Tenses
      </h1>
      <div className="text-black my-2">
        <Link className="text-xl text-black dark:text-white" href={"/verbs"}>
          &laquo; Back
        </Link>
      </div>
      <div className="max-w-[1800px] w-full my-12">
        <section className="p-6 my-6">
          <h1 className="text-center text-3xl font-bold">Indicative Mood</h1>
          <div className="grid grid-cols-1 justify-center align-middle">
            <TenseBlock tense="Tense" example="Example" header></TenseBlock>

            <TenseBlock
              tense="Present"
              example={data.indicative.present[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Imperfect"
              example={data.indicative.imperfect[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Indefinite"
              example={data.indicative.indefinite[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Periphrastic"
              example={data.indicative.periphrastic[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Perfect"
              example={data.indicative.perfect[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Plucuamperfecto"
              example={data.indicative.plucuam[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Future"
              example={data.indicative.future[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Conditional"
              example={data.indicative.conditional[0]}
            ></TenseBlock>
          </div>
        </section>

        <section className="p-6 my-6">
          <h1 className="text-center text-3xl font-bold">Subjunctive Mood</h1>
          <div className="grid grid-cols-1 justify-center align-middle">
            <TenseBlock tense="Tense" example="Example" header></TenseBlock>
            <TenseBlock
              tense="Present"
              example={data.subjunctive.perfect[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Imperfect"
              example={data.indicative.imperfect[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Perfect"
              example={data.indicative.perfect[0]}
            ></TenseBlock>
            <TenseBlock
              tense="Plucuamperfecto"
              example={data.indicative.plucuam[0]}
            ></TenseBlock>
          </div>
        </section>

        <section className="p-6 my-6">
          <h1 className="text-center text-3xl font-bold">Imperative Mood</h1>
          <div className="grid grid-cols-1 justify-center align-middle">
            <TenseBlock tense="Tense" example="Example" header></TenseBlock>
            <TenseBlock
              tense="Present"
              example={data.imperative.present[0]}
            ></TenseBlock>
          </div>
        </section>
      </div>
    </main>
  );
}

type Props = {
  tense: string;
  example: string;
  /** If true, bold headers */
  header?: boolean;
};
function TenseBlock({ tense, example, header = false }: Props) {
  const styles = header ? "font-bold !text-black" : "";
  return (
    <div className="grid grid-cols-2 py-2 border-b border-gray-300">
      <div className={clsx(styles, "text-red-700 !font-semibold")}>{tense}</div>
      <div className={styles}>{example}</div>
    </div>
  );
}
