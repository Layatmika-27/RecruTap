import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="features">

        <FeatureCard
          title="🔍 Scam Detection"
          description="Detect suspicious hiring practices like registration fees and fake promises."
        />

        <FeatureCard
          title="📊 AI Risk Score"
          description="Receive an explainable trust score with confidence level."
        />

        <FeatureCard
          title="🛡 Privacy Protection"
          description="Know which personal information is safe to share during recruitment."
        />

      </section>
    </>
  );
}

export default Home;