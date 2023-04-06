import logo from "./assets/imgs/logo.png"
import {useState} from "react";
import './App.css';
import {
  Community,
  Copyright,
  Investors,
  Features,
  Auditors,
  Footer,
  Bounty,
  Navbar,
  Header,
  Wallet,
  Store,
  Dao,
} from './components';

function App() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false)
  }, 1500);

  return (

    loader ? <div className="logo-content"><img className="logo-content-img" alt="logo content" src={logo}/></div>
    :<div className='App'>
      <Navbar />
      <Header />
      <Features />
      <Investors />
      <Wallet />
      <Dao />
      <Store />
      <Community />
      <Auditors />
      <Bounty />
      <Footer />
      <Copyright />
    </div>
 
  );
}

export default App;
