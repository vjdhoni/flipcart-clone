import camera from './images/cam.webp';
import bag from './images/bags.webp';
import cycle from './images/cycle.webp';
import heater from './images/heater.webp';
import slipper from './images/slipper.webp';
import { Link } from "react-router-dom";
export default function FlipkartProducts(){
    const products = [
        {
            image : camera,
            model : 'Top MirrorLess Cameras',
            availableProducts:'Canon, Sony, Fujifilm...'
        } ,{
            image : bag,
            model : 'School, College & Travel Bags',
            availableProducts:'Canon, Sony, Fujifilm...'
        } ,{
            image : cycle,
            model : 'MTB Bicycle without Gear',
            availableProducts:'Canon, Sony, Fujifilm...'
        } ,{
            image : slipper,
            model : 'Liberty, Khadim & more',
            availableProducts:'Canon, Sony, Fujifilm...'
        } ,{
            image : heater,
            model : 'Immersion Rods',
            availableProducts:'Canon, Sony, Fujifilm...'
        }
    ]

    return(
        <div className='product-container'>
            
                {
                    products.map(function(pdatas){
                        return(
                            <div>
                                 <Link className='link' to={'/notfound'}>
                                 <img src={pdatas.image} alt='failed'/>
                                 </Link>
                                <h6>{pdatas.model}</h6>
                                <p className='shopnow'>Show Now!</p>
                                <p className='p-avail'>{pdatas.availableProducts}</p>
                            </div>
                        )
                    })
                }
            
        </div>
    )
}
