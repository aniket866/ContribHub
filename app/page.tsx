import Navbar from "@/components/UI/Navbar";
import Quote from "@/components/UI/Quote";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-zinc-900 overflow-hidden">
      <Navbar />

      <Quote />

      {/* Programs Section */}
      <section id="programs" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">Opportunities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-zinc-900">
            Open Source Programs
          </h2>
          <p className="mt-3 text-zinc-600 max-w-2xl mx-auto">
            Discover mentorship programs and fellowships designed to launch your open-source journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Google Summer of Code", badge: "Global", desc: "A global program bringing student developers into open-source software development." },
            { name: "LFX Mentorship", badge: "Linux Foundation", desc: "Structured mentorships for open-source developers on Linux Foundation projects." },
            { name: "Outreachy", badge: "Diversity", desc: "Paid internships supporting diversity in open-source and open science." },
            { name: "Season of Docs", badge: "Technical Writing", desc: "Fostering collaboration between technical writers and open-source projects." },
          ].map((program) => (
            <div key={program.name} className="p-6 rounded-2xl border-2 border-zinc-200 bg-white hover:border-black transition-all">
              <span className="text-xs font-semibold px-2.5 py-1 bg-zinc-100 rounded-full text-zinc-700">{program.badge}</span>
              <h3 className="text-lg font-bold mt-4 mb-2">{program.name}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{program.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="py-20 px-6 bg-zinc-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-zinc-900">
              Featured Organizations
            </h2>
            <p className="mt-3 text-zinc-600 max-w-2xl mx-auto">
              Contribute to leading foundations and open-source communities making a global impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Linux Foundation", repos: "500+ Projects" },
              { name: "Apache Foundation", repos: "350+ Projects" },
              { name: "Mozilla", repos: "120+ Projects" },
              { name: "CNCF", repos: "180+ Projects" },
            ].map((org) => (
              <div key={org.name} className="p-6 rounded-2xl border border-zinc-200 bg-white text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm mb-3">
                  {org.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="font-bold text-zinc-900">{org.name}</h3>
                <p className="text-xs text-zinc-500 mt-1">{org.repos}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">Explore</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-zinc-900">
            Browse by Category
          </h2>
          <p className="mt-3 text-zinc-600 max-w-2xl mx-auto">
            Find projects tailored to your tech stack and personal interests.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Web Development",
            "Machine Learning",
            "Cloud & DevOps",
            "Mobile Apps",
            "Cybersecurity",
            "Open Data",
          ].map((cat) => (
            <div key={cat} className="p-4 rounded-xl border border-zinc-200 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
              <span className="text-sm font-semibold">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 px-6 bg-zinc-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">Guidance</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-zinc-900">
              Contributor Resources
            </h2>
            <p className="mt-3 text-zinc-600 max-w-2xl mx-auto">
              Everything you need to make meaningful, high-impact contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Git & GitHub Workflow", desc: "Learn branching, forks, clean commit histories, and resolving merge conflicts." },
              { title: "Finding Good First Issues", desc: "Discover how to identify beginner-friendly tasks and communicate with maintainers." },
              { title: "Pull Request Etiquette", desc: "Best practices for writing readable PR descriptions, handling reviews, and testing." },
            ].map((res) => (
              <div key={res.title} className="p-6 rounded-2xl border border-zinc-200 bg-white">
                <h3 className="font-bold text-lg mb-2 text-zinc-900">{res.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6 max-w-7xl mx-auto text-center scroll-mt-24">
        <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">Connect</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-zinc-900">
          Join the ContribHub Community
        </h2>
        <p className="mt-3 text-zinc-600 max-w-2xl mx-auto mb-8">
          Connect with thousands of developers, share knowledge, and collaborate on real-world open-source software.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/aniket866/ContribHub"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-black text-white font-semibold text-sm hover:scale-105 transition-transform"
          >
            GitHub Repository
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 px-6 text-center text-xs text-zinc-500">
        <p>&copy; {new Date().getFullYear()} ContribHub. Open-source contribution platform.</p>
      </footer>
    </main>
  );
}
