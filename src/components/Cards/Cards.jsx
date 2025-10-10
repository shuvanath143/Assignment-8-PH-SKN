
import Card from './Card';
import { Link } from 'react-router';

const Cards = ({data}) => {

    return (
        <div>
            <div>
                <p>Trending Apps</p>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4'>
                {
                    data.slice(0, 8).map((card) => <Card card={card}></Card>)
                }
            </div>
            <div className='flex justify-center m-5'>
                <Link to="/AllApps" className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] px-10 py-2 text-base font-semibold text-white cursor-pointer hover:bg-sky-400 transition duration-700'>Show All</Link>
            </div>
        </div>
    );
};

export default Cards;