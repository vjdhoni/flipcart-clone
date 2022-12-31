import img from './images/404.png'
export default function PageNotFound(){
    return(
        <div className='my-5 container'>
            <img className='img-fluid' src={img} alt="failed"/>
        </div>
     
    )
}