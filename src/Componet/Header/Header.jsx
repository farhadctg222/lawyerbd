import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
           <div className="lawItp">
          <Link to='/' style={{textDecoration:'none'}}> <h1>Lawyer-Bangladesh</h1></Link>
            <h4 className='search'>Search ITP & Lawyer</h4>
           </div>
           <nav>
            <ul>
                <Link style={{textDecoration:'none',}}><li>ITP</li></Link>
               <Link style={{textDecoration:'none'}}> <li>Lawyer</li></Link>
            </ul>
           </nav>
            
        </div>
    );
};

export default Header;