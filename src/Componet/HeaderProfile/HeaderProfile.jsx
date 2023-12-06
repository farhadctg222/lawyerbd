import { Link } from 'react-router-dom';
import './HeaderProfile.css'
const HeaderProfile = (props) => {
    let space = props.data.name
    space = space.replace(/\s+/g, "-")
   
    

    
  
  
    const {name,Education,Specialist,workPlace,Desination,ChamberName, phone,image} = props.data
    // console.log(name,Education,Specialist,workPlace,Desination,ChamberName, phone,image)
    return (
        <div className='ProfileCard'>
            <h1 className="headerProfile"style={{border:'1px solid black'}}>
            <title>{name} <br />{Education} <br />{Desination}</title>  
              <a href=""><title>{ChamberName} <br />{workPlace}</title></a>
            <div className="image">
                <img src={image} alt="image" />
               </div>
               <div className="nameHeader">
               <h3 style={{color:'#2a7fba',}} >{name}</h3>
                <h5 >{Education}</h5>
                <h6 style={{color:'red',fontFamily:'robute,sans-serif'}}>{Specialist}</h6>
                <h5 >{Desination}</h5>
                <h5 className='desination' >{workPlace}</h5>
     
                <Link to={`/${space}`} style={{textDecoration:'none',color:'white'}}>  <button className='seeChamber' style={{textDecoration:'none',color:'white'}}  >See Chamber</button> </Link>
               </div></h1>
              
              
             
             
            
        </div>

    );
};

export default HeaderProfile;