import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { GoStarFill } from "react-icons/go";

const NewsCard = ({ news }) => {
    return (
        <div className='mb-4'>
            <div className='flex justify-between items-center bg-[#f3f3f3] p-4'>
                <div className='flex gap-4'>
                    <img className='w-10 h-10 rounded-full' src={news.author.img} alt="" />
                    <div>
                        <h1>{news.author.name}</h1>
                        <p>{news.author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <IoBookmarks />
                    <CiShare2></CiShare2>
                </div>
            </div>
            <div className='border-b-2 pb-4'>
                <h1 className="text-3xl font-bold">{news.title}</h1>
                <img src={news.image_url} alt="" />
                {
                    news.details.length > 200
                        ? <p>{news.details.slice(0, 200)}.... <br />
                            <Link to={`/news/${news._id}`}>Read More</Link></p>
                        : <p>{news.details}</p>
                }
            </div>
            <div className='flex gap-2 items-center'>
                <div className='flex gap-1'>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                </div>
                <h3>{news.rating.number}</h3>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired,
};

export default NewsCard;