import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import { Suspense } from 'react';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
    const appData = fetch("/appData.json").then(res => res.json())
    console.log(appData)
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={ <Spinner></Spinner> }>
                <Cards appData={appData}></Cards>
            </Suspense>
        </div>
    );
};

export default Home;