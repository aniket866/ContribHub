import { Caveat } from "next/font/google";

const hand = Caveat({
  subsets: ["latin"],
  weight: ["600"],
});

const features = [
  {
    title: "Verified Achievements",
    description:
      "Every achievement is reviewed before it appears on your profile. We verify certificates, announcements, and public proofs so your accomplishments remain trustworthy.",
  },
  {
    title: "Build Reputation",
    description:
      "Create a public contributor profile that grows with every milestone, from your first merged pull request to programs like GSoC, LFX, and Outreachy.",
  },
  {
    title: "Get Recognized",
    description:
      "Your open-source journey deserves visibility. Share your profile, showcase achievements, and let recruiters, mentors, and contributors discover your work.",
  },
  {
    title: "One Place for Everything",
    description:
      "Keep Hacktoberfest, GSoC, LFX, NSOC, Season of KDE, and future achievements together in a single public timeline.",
  },
];

export default function WhyOpenRank() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-15 pb-5">
      <div className="text-center">
        <h2
          className={`${hand.className} text-5xl md:text-7xl text-zinc-900`}
        >
          Why OpenRank?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
          Built for contributors who want their open-source achievements to be
          visible, verified, and celebrated.
        </p>
      </div>

      <div className="mt-20 grid gap-16 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="space-y-3">
            <h3
              className={`${hand.className} text-3xl md:text-4xl text-zinc-900`}
            >
              {feature.title}
            </h3>

            <p className="max-w-md leading-8 text-zinc-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}