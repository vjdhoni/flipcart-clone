import slide1 from './images/s1.jpg';
import slide2 from './images/s2.jpg';
import slide3 from './images/s3.jpg';
export default function FlipkartSlider() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide3} className="d-block w-100 img-slide img-responsive" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={slide1} className="d-block w-100 img-slide" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={slide2} className="d-block w-100 img-slide" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev  prev-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next next-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon " aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}