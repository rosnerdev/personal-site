interface NavLink {
    href: string;
    name: string;
}

const NavLink = ({href, name}: NavLink) => {
    return (
        <a href={href} className="dark:text-white hover:underline">{name}</a>
    );
}

export default NavLink;