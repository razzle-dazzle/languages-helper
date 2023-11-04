import myVerbsService from "@/services/verbs.service";
import VerbBlock from '../VerbBlock';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { capitalize } from '@/data/utils';

// export async function generateStaticParams() {
//   const items = myVerbsService.getProjects();
//   return items;
// }

const NotFound = () => <h2>Verb not found</h2>

export default function Page({ params }: { params: { verb: string; } }) {
  const { verb: _verb } = params;
  const data = myVerbsService.getVerbById(_verb);
  const gridClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center align-middle";
  const verbForm = myVerbsService.getVerbForm(data?.forms.infinitive.ca ?? '');
  
  if (!data) {
    return <NotFound></NotFound>
  }
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className='text-5xl font-semibold text-black dark:text-white text-center mt-12'>Verb: {data.forms.infinitive.ca}, {data.forms.infinitive.es}, {data.forms.infinitive.en}</h1>
      <p className='text-lg my-4 mb-8'>Verb form: {capitalize(verbForm ?? '')}</p>
      <div className="max-w-[1800px] w-full border shadow-lg my-12">

        <Title>Indicative Mood</Title>
        <div className={gridClasses}>
          <VerbBlock showTenseTitle tenseTitle='Present' tense={data.indicative.present} forms={data.forms} id={data.id} row={0}></VerbBlock>
          <VerbBlock showTenseTitle tenseTitle='Imperfect' tense={data.indicative.imperfect} forms={data.forms} id={data.id} row={0}></VerbBlock>
          <VerbBlock showTenseTitle tenseTitle='Periphrastic' tense={data.indicative.periphrastic} forms={data.forms} id={data.id} row={0}></VerbBlock>
          <VerbBlock showTenseTitle tenseTitle='Indefinite' tense={data.indicative.indefinite} forms={data.forms} id={data.id} row={0}></VerbBlock>
          
          <VerbBlock showTenseTitle tenseTitle='Perfet' tense={data.indicative.perfect} forms={data.forms} id={data.id} row={1}></VerbBlock>
          <VerbBlock showTenseTitle tenseTitle='Futur' tense={data.indicative.future} forms={data.forms} id={data.id} row={1}></VerbBlock>
          <VerbBlock showTenseTitle tenseTitle='Conditional' tense={data.indicative.conditional} forms={data.forms} id={data.id} row={1}></VerbBlock>
          <VerbBlock showTenseTitle tenseTitle='Plucuamperfet' tense={data.indicative.plucuam} forms={data.forms} id={data.id} row={1}></VerbBlock>
        </div>

        <Title>Subjunctive Mood</Title>
        <div className={gridClasses}>
          <VerbBlock showTenseTitle tenseTitle='Present' tense={data.subjunctive.present} forms={data.forms} id={data.id} row={0}></VerbBlock>
          <VerbBlock showTenseTitle tenseTitle='Imperfect' tense={data.subjunctive.imperfect} forms={data.forms} id={data.id} row={0}></VerbBlock>
          <VerbBlock showTenseTitle tenseTitle='Perfect' tense={data.subjunctive.perfect} forms={data.forms} id={data.id} row={0}></VerbBlock>
          <VerbBlock showTenseTitle tenseTitle='Plucuamperfet' tense={data.subjunctive.plucuam} forms={data.forms} id={data.id} row={0}></VerbBlock>
        </div>

        <Title>Imperative Mood</Title>
        <div className={gridClasses}>
          <VerbBlock showTenseTitle tenseTitle='Present' tense={data.imperative.present} forms={data.forms} id={data.id} row={0}></VerbBlock>
          
        </div>
      </div>
      <div className='text-black my-2 mb-24'>
        <Link className='text-xl text-black dark:text-white' href={'/verbs'}>&laquo; Back</Link>
      </div>
    </main>
  );
}

const Title = ({children}: PropsWithChildren<{}>) => {
  return (
    <h2 className='text-2xl font-semibold my-4 mt-8 text-black dark:text-white text-center'>{children}</h2>
  )
}
