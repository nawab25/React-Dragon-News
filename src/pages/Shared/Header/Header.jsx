import logo from '../../../assets/logo.png'
import moment from 'moment';
const Home = () => {
    return (
        <div className='text-center p-5'>
            <img className='mx-auto' src={logo} alt="logo" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Home;