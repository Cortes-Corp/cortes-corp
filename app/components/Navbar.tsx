import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200  dark:bg-gray-900">
        <div className="  flex flex-wrap items-center  justify-between mx-5 p-4">
          <Image
            src="/cortes-corp-logo2.png"
            width={150}
            height={1}
            alt="cortes corp logo"></Image>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium  items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/">
                  <p
                    className="block py-2 px-3 transition-all duration-300 text-white bg-red-600 rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-white"
                    aria-current="page">
                    Home
                  </p>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <p className="block py-2 px-3 transition-all duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Agents
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="block py-2 px-3 transition-all duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="block py-2 px-3 transition-all duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Services
                  </p>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <p className="block py-2 px-3 transition-all duration-300 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Contact
                  </p>
                </Link>
              </li>

              <button
                type="button"
                className="text-white transition-all duration-300 bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-600 self-center">
                Sign in
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
