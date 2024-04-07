import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "../Shared/Header/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const newsData = useLoaderData() 
  console.log(newsData);
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
                <h1 className="text-2xl font-bold">Dragon News Home</h1>
                    {
                        newsData.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;