import Navbar from "@/components/UI/Navbar";
import Quote from "@/components/UI/Quote"
import Cartoon from "@/components/UI/Cartoon";
import WhyOpenRank from "@/components/UI/WhyOpenRank";
import Recruiters from "@/components/UI/Recruiters";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-zinc-900 overflow-hidden">

      <Navbar />

      <Quote />

      <Cartoon/>

      <WhyOpenRank/>

      <Recruiters/>

      {/* <TrustedPrograms />

      <SearchSection />

      <CategoriesSection />

      <FeaturedPrograms />

      <HowItWorks />

      <ContributorJourney />

      <StatisticsSection />

      <Testimonials />

      <CommunitySection />

      <FAQSection />

      <Footer /> */}

    </main>
  );
}