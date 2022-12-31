import errorfound from './images/error-500_cd3e64.png';
export default function NotFound(){
    return(
        <div className='err-msg '>
            <div className='img-center'>
            <img src={errorfound} alt='failed' className='center-img'/>
            <div>
                <div className='err-txt'>Something's not right!</div>
            </div>
            <div className='err-txt2'>Please try again</div>
            <div>
            <button className='retry-btn'>RETRY</button>
            </div>
            </div>
        </div>
    )
}