interface HeaderProps {
    url : string;
    children : React.ReactNode
}

const Header = ( props : HeaderProps)=>{
    return(
        <header>
            <img src={props.url} alt="logo" />
            <div>{props.children}</div>
        </header>
    );
};

export default Header;