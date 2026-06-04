import { Caveat } from "next/font/google";

const hand = Caveat({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Quote() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-12 pt-7 text-center md:pt-30">
      <h1
        className={`${hand.className} max-w-3xl text-5xl leading-none text-zinc-900 md:text-7xl`}
      >
        The LeetCode of Open Source.
        <br/>
      </h1>
      <h3 className={`${hand.className} max-w-3xl text-3xl leading-none text-zinc-900 md:text-3xl`}>  From Hacktoberfest to GSoC, keep every achievement under one public profile.</h3>
    
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-lg">

        showcase achievements, build reputation, and get recognized.
        <br/>
        
        Share your profile with others like you share your leetcode.
      </p>
    </section>
  );
}