import { Helmet } from "react-helmet";
import Search from "./Search";

function Home(){
    return(<>
    <Helmet>
        <title>Home</title>
    </Helmet>

    <div className="flex flex-row flex-wrap pt-16 pl-24 dark:bg-slate-900 h-screen">
        {/* left div */}
        <div className="w-2/5 flex flex-col ml-20">
            <div className="z-[99]">
            <Search/>
            </div>
        </div>

        {/* right div */}
        <div className="w-2/5"></div>
    </div>


    </>)
}

export default Home;