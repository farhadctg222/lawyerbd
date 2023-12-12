import { Link } from "react-router-dom";
import './Foter.css'
const Foter = () => {
    return (
        <div>
            <div className="foter">
              <a href="https://lawyerbangladesh.netlify.app">  <title>Distric Wise ITP & Lawyer</title></a>
               <Link to='registaton-form' style={{textDecoration:'none'}}> <h4>Lawyer & ITP Registation</h4></Link>
           
            <div className="foterContact">
                <Link to='contact'><button>Contact</button></Link>
                <Link to='about'><button>About</button></Link>
                <Link to='ads'><button>Advertisement</button></Link>
                <Link to='payment'><button>Payment</button></Link>
                <Link to='privacy-policy'><button>Privacy</button></Link>
                <Link to='disclaimer'><button>Disclaimer</button></Link>
            </div>
           <div className="technology">
           <p>Copyright © 2023-25 </p>
        <p>Hello World Technology</p>
           </div>
            
          
            </div>
            
        </div>
    );
};

export default Foter;
