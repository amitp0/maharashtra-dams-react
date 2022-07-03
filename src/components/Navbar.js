import { ChartPieIcon, ChartSquareBarIcon, HomeIcon, MoonIcon, QuestionMarkCircleIcon, SunIcon } from "@heroicons/react/outline";
import useDarkMode from "../hooks/useDarkMode";
import { Link } from 'react-router-dom';


function Navbar() {

    const [colorTheme, setTheme] = useDarkMode();
    const activeNavIcon = (path) => ({
        style: {
            stroke: window.location.pathname === path ? '#2563eb' : '',
        },
    });

    return (<>
        <div class="flex h-screen dark:bg-slate-900 fixed z-[999]">
            <div class="bg-slate-100 flex flex-col dark:bg-slate-800">
                <div class="p-8 pt-12 cursor-pointer">
                    <Link to="/">
                        <HomeIcon className="text-slate-400 h-7 " {...activeNavIcon('/')} />
                    </Link>
                </div>
                <div class="p-8 cursor-pointer">
                    <Link to="/stats">
                        <ChartPieIcon className="text-slate-400 h-7 " {...activeNavIcon('/stats')} />
                    </Link>
                </div>
                <div class="p-8 cursor-pointer">
                    <ChartSquareBarIcon className="text-slate-400 h-7" {...activeNavIcon('/report')} />
                </div>
                <div class="p-8 cursor-pointer">
                    <QuestionMarkCircleIcon className="text-slate-400 h-7 " {...activeNavIcon('/about')} />
                </div>
                <div class="p-8 cursor-pointer">
                    {colorTheme === "light" ?
                        (<SunIcon className="text-yellow-400 h-7 " onClick={() => setTheme("light")} />) :
                        (<MoonIcon className="text-slate-400 h-7 " onClick={() => setTheme("dark")} />)}

                </div>
            </div>
        </div></>);
}


export default Navbar;