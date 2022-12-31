import flipkartIcon from './images/fliplogo.png'
import flipkartstar from './images/flipplus.png'
import { Link } from "react-router-dom";
export default function FlipkartNavbar() {
    return (
        <nav>
            <div className="logo">
                <img src={flipkartIcon} alt="Failed" width="75" />

                <p >
                    Explore
                    <span>Plus  </span>
                    <img className="flipkart-Plus" src={flipkartstar} width="10" />
                </p>
            </div>

            <div className='input-container'>
                <input className='search-input' placeholder='Search for products, brands and more' />
                <i className="fa fa-search"></i>
            </div>

            <div className='login-btn'>
                <Link to={'/notfound'}>
                    <button>Login</button>
                </Link>
            </div>

            <Link className='link' to={'/notfound'}><div className='mx-5 become-txt'>Become a Seller</div></Link>
            
            <Link className='link' to={'/notfound'}><div className='mx-1 become-txt'>More</div></Link>

            <Link className='link' to={'/notfound'}>
            <div className='mx-5 become-txt cart-txt'>
                <i className="fa-solid fa-cart-shopping cart-icon"></i>Cart</div>
            </Link>

        </nav>
    )
}