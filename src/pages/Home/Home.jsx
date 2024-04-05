import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "../Shared/Header/BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6 grid-cols-1 mt-5 md:mt-0">
                <div className="border-2">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border-2">
                    <h1>Content comming soon....</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;