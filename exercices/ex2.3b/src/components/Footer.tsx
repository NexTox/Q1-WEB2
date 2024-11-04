interface footer{
    text: string
}

const Footer = (props: footer) =>{
    return(
        <footer>{props.text}</footer>
    )
}

export default Footer