import Link from 'next/link';


const Home = props => (
    <div>
        <p>I can prospect!</p>
        <Link href="/scrape">
        <a>Scrape!</a>
        </Link>
    </div>
); 

export default Home;
