import { useState } from "react";
import Logo from "../common/Logo";
import Button from "../common/Button";

function Navbar() {
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsFinancingOpen(!isFinancingOpen)}
            >
              Financing
              <svg
                className="w-4 h-4 ml-1 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isFinancingOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 font-semibold"
                    role="menuitem"
                  >
                    By stage
                  </p>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Startup
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Scaleup
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Enterprise
                  </a>
                </div>
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900"
          >
            Customers
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900"
          >
            Company
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900"
          >
            Resources
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="primary">Get started</Button>
          <div className="h-6 w-px bg-gray-300"></div>
          <Button variant="secondary">Log in</Button>
          <Button variant="secondary">Talk to sales</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
