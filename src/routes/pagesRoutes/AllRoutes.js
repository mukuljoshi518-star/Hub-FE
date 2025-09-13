import { Login } from '../../pages/formdata/login';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../../pages/homepage';
import PricingSection from '../../pages/pricing/PricingSection';
import { ContactUs } from '../../pages/Trackdata/contactUs';
import { AboutUs } from '../../pages/about/aboutUs';
import LifeTracker from '../../pages/feature/DataDriven';

export const AllRoutes = () => {
  return (
    <div className="App" style={{marginTop:"50px"}}>
        <Routes>
          <Route path="/auth-login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path='/pricing-section' element={<PricingSection/>} />
          <Route path='/life-tracker' element={<LifeTracker />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs />} />

        </Routes>
    
    </div>
  );
}

