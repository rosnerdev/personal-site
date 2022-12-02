import NavLink from "./NavLink";

const NavLinks: string[][] = [['home','/']];

const Navbar = () => {
    return (
        <div className="fixed text-xl my-4 w-full">
            <div className="flex justify-center gap-4">
                {NavLinks.map((link) => {
                    return (
                        <NavLink href={link[1]} name={link[0]} key={link[0]}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar;
