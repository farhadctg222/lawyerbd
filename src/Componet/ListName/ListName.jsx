import { Link } from 'react-router-dom';
import './ListName.css'
import DataMainPageShow from './../DataMainPageShow/DataMainPageShow';

const ListName = () => {

 




  return (
        <div style={{marginTop:'100px'}}>
            <div className="listLawyer">
       <title>Specialist Bangladesh Lawyer </title>
      
       <a href=""> <title>Chattogram ITP Lawyer </title></a>
     
       <a href=""><title>Sylhet ITP Lawyer </title></a>

       <a href=""> <title>Bogra ITP Lawyer </title></a>

            <h3 className="lawItps">Division Wise ITP & Lawyer</h3>
            <div className="button">



                
<Link to='/dhaka'>  <button>Dhaka</button></Link>
 <Link to='/chattogram'> <button>Chattogram</button></Link>
   <Link to='/dhaka'><button>Rajshahi</button></Link>
   <Link to='/dhaka'><button>Sylhet</button></Link>
   <Link to='/dhaka'><button>Rangpur</button> </Link>
   <Link to='/dhaka'><button>Khulna</button></Link>
   <Link to='/dhaka'><button>Barisal</button></Link>
   <Link to='/dhaka'><button>Mymensingh</button></Link> 



 

</div>
            </div> <br />
            <a href="https://lawyerbangladesh.netlify.app">  <title>Specialist Lawyer & ITP in Bangladesh</title></a>
            <div className="listLawyer">
            <h3 className="lawItps">Division Wise Specialist Law Farm</h3>
             <div className="button">



                
              <Link to='/dhaka'>  <button>Dhaka</button></Link>
               <Link to='/dhaka'> <button>Chattogram</button></Link>
                 <Link to='/dhaka'><button>Rajshahi</button></Link>
                 <Link to='/dhaka'><button>Sylhet</button></Link>
                 <Link to='/dhaka'><button>Rangpur</button> </Link>
                 <Link to='/dhaka'><button>Khulna</button></Link>
                 <Link to='/dhaka'><button>Barisal</button></Link>
                 <Link to='/dhaka'><button>Mymensingh</button></Link> 
           
           
           
               

             </div>
            </div><br />
            <h4 className='Recently'>Recently Added Lawyer and ITP to Our Website</h4>
            <DataMainPageShow></DataMainPageShow>
            <div className="aboutBangladesh">
                <h2>About Lawyer Bangladesh</h2>
                <p>Lawyer-bangladesh.com is going to be the best website in Bangladesh. Common people will benefit through this web site. Skilled lawyers and accountants profiles on this web site with their pictures, their names, their educational qualifications
Can see office address. Remember that Lawyers-bangladesh.com does not give an Appointment to anyone.</p>
               
              </div><br /> <br />
           
        </div>
    );
};


export default ListName;