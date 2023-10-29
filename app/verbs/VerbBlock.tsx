import { Verbs } from "@/data/verbs.model";
import { PronounsPersonalShortCAT } from "@/data/pronouns";
import { clsx } from "clsx";
import Link from "next/link";

type VerbBlockProps = {
  /** zero-indexed column */
  col?: number;
  /** Support for alternating grid rows */
  row?: 0 | 1;
  id: Verbs["id"];
  forms: Verbs["forms"];
  tense: string[];
  tenseTitle?: string;
  showInfinitiveTitle?: boolean;
  showTenseTitle?: boolean;
};
function VerbBlock({ row = 0, forms, tense, tenseTitle = '', showInfinitiveTitle, showTenseTitle }: VerbBlockProps) {
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
    <article
        className={clsx(
          "text-black dark:text-black",
          row ? "bg-slate-100" : "",
          "p-6 py-8"
        )}
      >
        {showInfinitiveTitle && (
          <>
          <h2 className="text-red-700 text-2xl font-bold text-center leading-normal">
            {forms.infinitive.ca}
          </h2>
          
          <h3 className="text-lg italic text-center text-gray-700 mb-1.5 leading-normal">
            ({forms.infinitive.en})
          </h3></>

        )}
        {
          showTenseTitle && tenseTitle && (
            <h2 className=" text-2xl font-bold text-center leading-normal">
            { tenseTitle}
          </h2>
          )
        }

        <div className="grid grid-cols-2 pb-2 border-b border-gray-300">
          {tense.map((item, index) => {
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
                  <div className="text-red-700 font-semibold whitespace-nowrap">
                    {item.toLowerCase()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-0 mt-2">
          <div className="text-xs font-bold text-right pr-2 tracking-tight">
            PARTICIPI
          </div>
          <div className="text-xs font-bold border-l border-gray-300 pl-2 tracking-tight">
            GERUNDI
          </div>
          <div className="font-semibold text-red-700 text-right pr-2 whitespace-nowrap">
            {forms.participle.ca.toLowerCase()}
          </div>
          <div className="font-semibold text-red-700 border-l border-gray-300 pl-2 whitespace-nowrap">
            {forms.gerund.ca.toLowerCase()}
          </div>
        </div>
      </article>
    
  );
}

export default VerbBlock;
