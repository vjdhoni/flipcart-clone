import FlipKartHead from "./FlipkartComponents/FlipkKartHead";
import NotFound from "./FlipkartComponents/NotFound";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import FlipkartSlider from "./FlipkartComponents/FlipkartSlider";
import FlipkartNavbar from "./FlipkartComponents/FlipkartNavbar";
export function Apps() {

    return (

        <Router>
            <FlipkartNavbar/>
            <Routes>
                <Route path="/notfound" element={<NotFound/>}/>
                <Route path="/" element={<FlipKartHead/>} />  
            </Routes>
            
        </Router>

    
        
    )
}