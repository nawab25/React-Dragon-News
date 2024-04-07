import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navbar/Navbar';

const NewsDetails = props => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h1>This is my news</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

NewsDetails.propTypes = {

};

export default NewsDetails;