function NavBar() {
  return (
    <nav className="flex w-full items-start justify-between bg-background px-8 py-4 absolute top-0 left-0 right-0">
      <h1 className="text-base font-eb-garamond italic text-primary mt-[2px]">Luméa</h1>

      <div className="flex items-start justify-end gap-[285px]">
        <ul className="flex flex-col font-eb-garamond text-[12px] items-start space-y-[4px]">
          <li>
            <a href="#" className="hover:text-primary underline text-primary">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              Questionnaire
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              Catalogue
            </a>
          </li>
        </ul>

        <ul className="flex font-eb-garamond text-[12px] items-start gap-[243px]">
          <li>
            <a href="#" className="hover:text-primary">
              À propos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
