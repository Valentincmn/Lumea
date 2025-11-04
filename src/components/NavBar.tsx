function NavBar() {
    return (
        <nav className="flex w-full items-start justify-between bg-[#F8F1E4] px-8 py-4">
            
            <h1 className="text-base font-eb-garamond italic text-[#E43F12] mt-[2px]">
                Luméa
            </h1>

            
            <div className="flex items-start justify-end gap-56">
                
                <ul className="flex flex-col font-eb-garamond text-[12px] items-start space-y-[4px]">
                    <li><a href="#" className="hover:text-[#E43F12]">Accueil</a></li>
                    <li><a href="#" className="hover:text-[#E43F12]">Questionnaire</a></li>
                    <li><a href="#" className="hover:text-[#E43F12]">Catalogue</a></li>
                </ul>

                
                <ul className="flex font-eb-garamond text-[12px] items-start gap-24 pr-[25px]">
                    <li><a href="#" className="hover:text-[#E43F12]">À propos</a></li>
                    <li><a href="#" className="hover:text-[#E43F12]">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;