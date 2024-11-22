
interface FooterProps{
    urlLogo : string,
    children : React.ReactNode;
}

const Footer = (props:FooterProps) =>{
    return(
        <footer>
        <img src={props.urlLogo}/>
        <div>{props.children}</div>
    </footer>
    )
}

export default Footer;