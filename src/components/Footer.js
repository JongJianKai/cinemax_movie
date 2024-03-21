import { Link } from "react-router-dom";

export const Footer = () => {

  const currentYear = new Date().getFullYear();
    

  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <Link to="/" className="hover:underline">Cinemax</Link>. All Rights Reserved.</span>
      </footer>
  )
}
