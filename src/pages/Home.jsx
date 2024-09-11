import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import LogoBanner from "../components/sections/LogoBanner";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Hero />
        <LogoBanner />
        <section
          id="problem"
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center">PROBLEM</h2>
        </section>
        <section
          id="solution"
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center">SOLUTION</h2>
        </section>
        <section
          id="how-it-works"
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center">HOW IT WORKS</h2>
        </section>
        <section
          id="our-customers"
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center">OUR CUSTOMERS</h2>
        </section>
        <section
          id="by-stage"
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center">BY STAGE</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
