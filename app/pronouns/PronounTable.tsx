import { PronounTypes, PronounsMap } from "@/data/pronouns.model";
import myPronounsService from "@/services/pronouns.service";

type PronounCardProps = {
  pronouns: PronounsMap;
  reference: PronounsMap;
  title: string;
};
const PronounCard = ({ pronouns, reference, title }: PronounCardProps) => {
  const engStyles = "text-right p-1 pr-2 border-b border-r italic";
  const langStyles = "text-red-700 font-semibold p-1 pl-2 border-b";
  return (
    <div className="border my-2 rounded-md bg-white">
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

type PronounTableProps = {
  pronoun: Record<PronounTypes, PronounsMap>;
};

export default function PronounTable({ pronoun }: PronounTableProps) {
  const english = myPronounsService.getList("EN");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center align-middle gap-4 mb-4">
      <PronounCard
        title="Personal"
        pronouns={pronoun.personal}
        reference={english.personal}
      ></PronounCard>
      <PronounCard
        title="Direct Object"
        pronouns={pronoun.direct}
        reference={english.direct}
      ></PronounCard>
      <PronounCard
        title="Indirect Object"
        pronouns={pronoun.indirect}
        reference={english.indirect}
      ></PronounCard>
      <PronounCard
        title="Reflexive"
        pronouns={pronoun.reflexive}
        reference={english.reflexive}
      ></PronounCard>
      <PronounCard
        title="Prepositional"
        pronouns={pronoun.prepositional}
        reference={english.prepositional}
      ></PronounCard>
      <PronounCard
        title="Possessive"
        pronouns={pronoun.possessive}
        reference={english.possessive}
      ></PronounCard>
      <PronounCard
        title="Possessive Adjective"
        pronouns={pronoun.possessiveAdjective}
        reference={english.possessiveAdjective}
      ></PronounCard>
    </div>
  );
}
