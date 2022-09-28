const NavLinks: string[][] = [['home','/'], ['terminal','/terminal']];

const Navbar = () => {
    return (
        <div className="fixed text-xl my-4 w-full">
            <div className="flex justify-center gap-4">
                {NavLinks.map((link) => {
                    return (
                        <a href={link[1]} key={link[0]} className="dark:text-white hover:underline">
                            {link[0]}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar;