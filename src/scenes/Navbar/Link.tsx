import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string;//passed page
    selectedPage:string; //clicked on page
    setSelectedPage:(value:string)=>void;
}

function Link({page,selectedPage,setSelectedPage}: Props) {
    const lowerCasePage=page.toLowerCase().replace(/ /g,"");//replace space with no space
  return (
    <AnchorLink
    className={`${selectedPage===lowerCasePage?"text-primary-500":"" } transition duration-500 hover:text-primary-300`}
    onClick={()=>{setSelectedPage(lowerCasePage)}}
    href={`# ${lowerCasePage}`}
    >
        {page}
    </AnchorLink>
  )
}

export default Link