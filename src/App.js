
import './App.css';

import {Blog ,Features, Footer, Header , Posibility, Whatgpt3} from './containers';
import { Navbar , Cta , Brand} from './components';


const App =()  =>{
  return (
    <div className="App">
     
      <div className='gradient_bg'>
             <Navbar/>
             <Header/>
      </div>
              <Brand/>
              <Whatgpt3/>
              <Features/>
              <Posibility/>
              <Cta/>
              <Blog/>
              <Footer/>
    </div>
  );
}

export default App;
