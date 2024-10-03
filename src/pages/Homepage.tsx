import HeroSection from "../components/HomePage/HeroSection";
import Header from "../components/header/Header";
import HomeFeaturedSection from "../components/HomePage/HomeFeaturedSection";
import HomeCta from "../components/HomePage/HomeCta";
import HomeSplitSection from "../components/HomePage/HomeSplitSection";
import HomeCtaSecond from "../components/HomePage/HomeCtaSecond";
import Footer from "../components/Footer";
// import RenderingList from "../components/HomePage/RenderingList";

function Homepage() {
  return (
    <>
      <Header />
      <div className='main-container'>
        <HeroSection />
        {/* <RenderingList /> */}
        <HomeFeaturedSection />
        <HomeCta />
        <HomeCtaSecond />
        <HomeSplitSection />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
