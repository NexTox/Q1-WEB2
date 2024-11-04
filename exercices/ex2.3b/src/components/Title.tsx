interface title{
    name : string;
}

const PageTitle = ( props : title) =>{
    return(<h1>{props.name}</h1>)
}

export default PageTitle;

