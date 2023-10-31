import { Verbs } from "@/data/verbs.model";
import { clsx } from "clsx";
import { getPronoun } from '@/data/utils';

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
  
  return (
    <article
        className={clsx(
          "text-black dark:text-white",
          row ? "lg:bg-slate-100 dark:lg:bg-slate-900" : "",
          
          "p-6 py-8"
        )}
      >
        {showInfinitiveTitle && (
          <>
          <h2 className="text-red-700 text-2xl font-bold text-center leading-normal">
            {forms.infinitive.ca}
          </h2>
          
          <h3 className="text-md italic text-center text-gray-700 dark:text-slate-300 mb-1.5 leading-normal">
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
                    "flex flex-row gap-1 items-center",
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
