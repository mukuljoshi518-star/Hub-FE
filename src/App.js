import './App.css';
import Footer from './layout/footer';
import Header from './layout/header';
import { AllRoutes } from './routes/pagesRoutes/AllRoutes';

export const App = () => {
  
  return (
    <div className="App">
      <Header />
       <AllRoutes/>
       <Footer/>
    
    </div>
  );
}

