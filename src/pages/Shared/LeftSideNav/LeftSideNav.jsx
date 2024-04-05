import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-bold pb-5 text-center lg:text-left">All Category</h1>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-1 px-6 lg:px-0 text-center lg:text-left">
                {
                    categories.map(category => <Link to={`/category/${category.id}`}
                        className="block lg:pl-12 lg:py-4 text-xl rounded-lg text-gray-400 lg:hover:bg-gray-200 lg:hover:text-[#111111] hover:text-info font-medium"
                        key={category.id}>
                        {category.name}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;