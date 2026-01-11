import CategoryNavigation from "./category-navigation";
import BelowLandingPage from "./below-landing";
import Navbar from "./navbar";
import MainContent from "./main-content";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <Navbar />
        <CategoryNavigation />
      </header>
      <main className="w-full">
        <MainContent />
        <BelowLandingPage />
      </main>
    </div>
  );
};

export default LandingPage;
