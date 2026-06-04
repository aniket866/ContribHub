import Image from "next/image";
import { Caveat } from "next/font/google";

const hand = Caveat({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Recruiters() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-10 md:grid-cols-3">

        {/* Left Cartoon */}
        <div className="flex justify-center">
          <Image
            src="/think.png"
            alt="Recruiter"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h2
            className={`${hand.className} text-5xl leading-none text-zinc-900 md:text-7xl`}
          >
            Built on Trust.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-700">
            Recruiters can discover verified contributors.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            No inflated resumes.
            <br />
            No unverified claims.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            Only genuine achievements backed by proof.
          </p>
        </div>

        {/* Right Cartoon */}
        <div className="flex justify-center">
          <Image
            src="/think.png"
            alt="Verified Contributor"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}