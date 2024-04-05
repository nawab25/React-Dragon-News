import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="bg-[#f3f3f3] p-3 flex items-center">
            <button className="bg-[#d72050] hover:bg-[#c3214c] duration-100 text-white mr-5 font-medium text-lg px-5 py-2">Latest</button>
            <Marquee pauseOnHover={true} speed={80} className="cursor-pointer">
                <Link className="mr-10" to="/">
                    I can be a React component, multiple React components, or just some text...
                </Link>
                <Link className="mr-10" to="/">
                    I can be a React component, multiple React components, or just some text...
                </Link>
                <Link className="mr-10" to="/">
                    I can be a React component, multiple React components, or just some text...
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;