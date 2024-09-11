import Button from "../common/Button";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Unlock all of the potential your brand has</h2>
        <Button variant="primary">Get started</Button>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Add footer content here */}
        <p className="text-center text-gray-400">&copy; 2023 Liamflyer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
