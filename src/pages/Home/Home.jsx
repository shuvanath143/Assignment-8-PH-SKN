import Banner from '../../components/Banner/Banner';

import { useLoaderData } from 'react-router';
import Cards from '../../components/Cards/Cards';


const Home = () => {
    
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Cards data={data}></Cards>
        </div>
    );
};

export default Home;