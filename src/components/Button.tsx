interface Button {
    name: string;
    link: string;
    bgColor: string;
    ringColor: string;
}

const Button = ({name, link, bgColor, ringColor}: Button) => {
    return (
        <a href={link} target="_clear" className={`${bgColor} text-white p-2 focus:ring-2 focus:${ringColor} rounded-md`}>{name}</a>
    );
}

export default Button;