import Cards from './Cards';
import firstImage from '../assets/first.png';
import secondimg from '../assets/secondimg.png';

function Hero({setSelectedtab}) {
    return (
        <div className='hero-main'>
            <Cards img_url={firstImage} setSelectedtab={setSelectedtab}/>
            <Cards img_url={secondimg} setSelectedtab={setSelectedtab}/>
            <Cards img_url={firstImage} setSelectedtab={setSelectedtab}/>
        </div>
    );
}

export default Hero;
