interface FooterProps{
    url: string;
    children : React.ReactNode
}

const Footer = (props: FooterProps) =>{
    return(
        <header>
            <img src={props.url} alt="Header"/>
            <div>{props.children}</div>
        </header>
    );
};

export default Footer;