import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedNFTs } from "@/components/FeaturedNFTs";
import { TopCreators } from "@/components/TopCreators";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedNFTs />
        <TopCreators />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
