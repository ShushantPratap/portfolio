import { Home, FolderDot, Brain, } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    const htmlEle = document.querySelector("html");
    const ref = useRef(null);

    function darkMode(){
        if(ref.current.checked){
            htmlEle.classList.add("light");
        }else{
            htmlEle.classList.add("dark");
        }
    }
    useEffect(() => {
        darkMode();
        ref.current?.addEventListener("click", () => {
            htmlEle.classList.remove("dark", "light");
            darkMode();
        });
     }, [])


    const navItems = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Projects', icon: FolderDot, path: '/projects' },
        { name: 'AI Assistant', icon: Brain, path: '/ai-assistant' }
    ];
    
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-opacity-95 bg-[#0000005d] backdrop-blur-sm z-50 shadow-lg flex justify-center items-center p-2.5 md:h-[70px] md:top-0 md:bottom-auto md:p-4">
            <div className="text-3xl mt-1 md:absolute left-3 lg:left-10">
                <h1 className="text-2xl text-theme font-bold md:text-4xl md:mb-1">
                    Mr.<span className="text-gray-100 text-lg font-light ml-1 md:text-2xl">Pratap.</span>
                </h1>
            </div>
            <div className="navLinks flex w-full justify-around pt-1 md:w-fit md:flex-none md:space-x-1 lg:space-x-8">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({isActive}) => `${isActive && 'before:w-[50%]! md:before:w-[85%]!'} dark:before:bg-[#9b59b6]!
                        flex items-center px-3 text-sm font-medium duration-200 text-white md:flex-row md:space-x-2`
                    }
                >
                    <item.icon size={25} strokeWidth={1.5} className="md:mb-1" />
                    <span className="hidden md:inline">{item.name}</span>
                </NavLink>
            ))}
            {/* From Uiverse.io by alexruix  */}
                <label className="darkModeSwitch md:bottom-0.5" title="Dark mode">
                    <input type="checkbox" ref={ref} />
                    <span className="slider dark:border-1!"></span>
                </label>
            </div>
            <div className="text-gray-50 text-2xl space-x-1 absolute right-1 lg:right-10 hidden md:block lg:space-x-3">
                <a 
                    href="https://www.linkedin.com/in/shushant-pratap-981b1b2b5/"
                    target="_blank"
                    className="p-1 px-2 duration-200 rounded-full hover:bg-gray-100 hover:text-[#421156]"
                    title="Linkedin"
                >
                    <i className="fa fa-linkedin-square" />
                </a>
                <a 
                    href="https://www.instagram.com/web_ui_/"
                    target="_blank"
                    className="p-1 px-2 duration-200 rounded-full hover:bg-gray-100 hover:text-[#421156]"
                    title="Instagram"
                >
                    <i className="fa fa-instagram" />
                </a>
                <a 
                    href="https://in.pinterest.com/shushantpratap/"
                    target="_blank"
                    className="p-1 px-2 duration-200 rounded-full hover:bg-gray-100 hover:text-[#421156]"
                    title="Pinterest"
                >
                    <i className="fa fa-pinterest" />
                </a>
                <a 
                    href="https://github.com/ShushantPratap/"
                    target="_blank"
                    className="p-1 px-2 duration-200 rounded-full hover:bg-gray-100 hover:text-[#421156]"
                    title="GitHub"
                >
                    <i className="fa fa-github" />
                </a>
            </div>

        </nav>
    );
}

export default Header;