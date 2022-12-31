import appliance from './images/appliances.webp';
import electronic from './images/electronics.webp';
import fashion from './images/fashion.webp';
import home from './images/home.webp';
import mobile from './images/mobile.webp';
import topOffer from './images/topOffer.webp';
import toys from './images/toys.webp';
import travel from './images/travel.webp';
import vechile from './images/vechile.webp';
import grocery from './images/grocery.webp';

import { Link } from "react-router-dom";
import FlipkartSlider from './FlipkartSlider';
import FlipkartProducts from './FlipkartProducts';
import FlipkartFooter from './FlipkartFooter';
import FlipkartNavbar from './FlipkartNavbar';
//import NotFound from './NotFound';

function FlipKartHead() {
    const productDetails = [
        {
            image: grocery,
            productName: 'Grocery'
        },
        {
            image: mobile,
            productName: 'Mobiles'
        },
        {
            image: fashion,
            productName: 'Fashion'
        },
        {
            image: electronic,
            productName: 'Electronics'
        },
        {
            image: home,
            productName: 'Home'
        },
        {
            image: appliance,
            productName: 'Appliances'
        },
        {
            image: travel,
            productName: 'Travel'
        },
        {
            image: topOffer,
            productName: 'Top Offers'
        },
        {
            image: toys,
            productName: 'Beauty, Toys & More'
        },
        {
            image: vechile,
            productName: 'Two Wheelers'
        }

    ]
    return (
        <>
        
            <div className='containers'>
                {
                    productDetails.map(function (datas, i) {
                        return (
                            <div className='contain' key={i}>
                                <Link to={'/notfound'}>
                                    <img className='product-img' src={datas.image} alt='failed' />
                                </Link>
                                <p className='text-center product-name'>{datas.productName}</p>
                            </div>
                        )
                    })
                }

            </div >

            <div className='img-slide-contain'>
            <FlipkartSlider/>
            </div>
            <div>
                <FlipkartProducts/>
            </div>

            <div>
            <FlipkartProducts/>
            </div>

            <div>
            <FlipkartProducts/>
            </div>

            <div>
            <FlipkartProducts/>
            </div>
            <div>

            <FlipkartProducts/>
            </div>
            <div>
                <FlipkartFooter/>
            </div>

        </>
    )
}
export default FlipKartHead