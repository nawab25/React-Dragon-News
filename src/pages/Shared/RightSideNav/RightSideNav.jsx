import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div className="px-4 lg:px-0 text-center lg:text-left">
            {/* Login With  */}
            <div>
                <h1 className="text-2xl font-bold">Login With</h1>
                <div className="mt-5">
                    <button
                        className="btn mb-2 btn-outline text-lg font-medium btn-info text-info w-full">
                        <FaGoogle />
                        Login with Google
                    </button>
                    <button
                        className="btn btn-outline text-lg font-medium w-full">
                        <FaGithub />
                        Login with Github
                    </button>
                </div>
            </div>

            {/* Find Us  */}
            <div className="lg:mt-8 mt-5">
                <h1 className="text-2xl font-bold">Find Us On</h1>
                <div className="mt-5 border-2 rounded-lg">
                    <h3 className="flex justify-center lg:justify-start items-center border-b-2 gap-3 p-4 font-semibold text-gray-500 cursor-pointer">
                        <span className="text-[#3b599c] bg-[#f3f3f3] p-2 rounded-full text-xl"><FaFacebookF></FaFacebookF></span>
                        Facebook
                    </h3>
                    <h3 className="flex justify-center lg:justify-start items-center border-b-2 gap-3 p-4 font-semibold text-gray-500 cursor-pointer">
                        <span className="text-[#58a7de] bg-[#f3f3f3] p-2 rounded-full text-xl"><FaTwitter></FaTwitter></span>
                        Twitter
                    </h3>
                    <h3 className="flex justify-center lg:justify-start items-center gap-3 p-4 font-semibold text-gray-500 cursor-pointer">
                        <span className="text-[#d82d7e] bg-[#f3f3f3] p-2 rounded-full text-xl"><FaInstagram></FaInstagram></span>
                        Instagram
                    </h3>
                </div>
            </div>
            {/* Q-Zone  */}
            <div className="bg-[#f3f3f3] pt-4 pb-1 mt-5 px-[3px]">
                <h1 className="text-2xl font-bold pb-5 pl-4">Q-Zone</h1>
                <div className="border-dashed border-2 mb-5">
                    <img className="mx-auto" src={qZone1} alt="" />
                </div>
                <div className="border-dashed border-2 mb-5">
                    <img className="mx-auto" src={qZone2} alt="" />
                </div>
                <div className="border-dashed border-2">
                    <img className="mx-auto" src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;