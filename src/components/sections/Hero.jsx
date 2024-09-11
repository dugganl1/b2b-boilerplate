import Button from "../common/Button";

function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Unleash your growth potential</h1>
        <p className="text-xl text-gray-600 mb-8">
          Access purpose-built financing that&apos;s built for brands like yours
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="primary">Get started</Button>
          <Button variant="secondary">Talk to sales</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
