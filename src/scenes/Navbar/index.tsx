import {useState} from 'react'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from './Link';


type Props={
    selectedPage:string; //clicked on page
    setSelectedPage:(value:string)=>void;
}

function Navbar({selectedPage,setSelectedPage}:Props){
    const flexBetween="flex items-center justify-between"
    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/*Left side */}
                <div className={`${flexBetween} w-full gap-16`}>
                    <img src={Logo} alt="logo" />
                </div>
                {/*Right side */}
                <div className={`${flexBetween} w-full`}>
                    {/*Inner Left Side */}
                    <div className={`${flexBetween} gap-8 text-sm`} >
                        <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                        <Link page='Benefits'selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                        <Link page='Our Classes'selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                        <Link page='Contact Us'selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                    </div>
                    {/*Inner Right Side */}
                    <div className={`${flexBetween} gap-8`}>
                        <p>Sign In</p>
                        <button>Become a Member</button>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    </nav>
}
export default Navbar;