import BelowHeader from "./below-header";
import BelowLandingPage from "./below-landing";
import HeaderPage from "./header";
import LandingPageMain from "./landing";

const WelcomeLandingPage = () => {
  return (
    <div className="w-full min-h-screen ">
      <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <HeaderPage />
        <BelowHeader />
      </header>
      <main className="w-full">
        <LandingPageMain />
        <BelowLandingPage />
      </main>
    </div>
  );
};

export default WelcomeLandingPage;
