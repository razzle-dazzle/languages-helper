import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div> */}
      <h1 className='text-4xl font-bold'>Learn Catalan - Language Resources</h1>

      <div className="mb-48 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-8">
        <Link href={"/verbs"}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Verbs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Verb conjugations in a table format
          </p>
        </Link>

        <Link href={"/pronouns"}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Pronouns{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            All the pronouns
          </p>
        </Link>

        <Link href={"/adjectives"}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Adjectives{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A list of all the adjectives
          </p>
        </Link>

        <Link href={"/adverbs"}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Adverbs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A list of all conjunctive adverbs
          </p>
        </Link>

        <Link href={"/phrases"}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Phrases{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A list of common phrases
          </p>
        </Link>

        <Link href={"/idioms"}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Idioms{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A list of idioms
          </p>
        </Link>

        <Link href={"/subjunctive"}>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Subjunctive{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Subjunctive Verb Forms
          </p>
        </Link>

        
      </div>
    </main>
  );
}
