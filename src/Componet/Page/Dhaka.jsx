import React from 'react';
import { Link } from 'react-router-dom';

const Dhaka = (props) => {

    let fullName = props.database.name
    fullName = fullName.replace(/\s+/g, "-")
    
    
   
   const {name,Education,ChamberName,image,Desination,workPlace,Specialist} = props.database
   
    
    return (
        <>
        <div>
        <div className='ProfileCard'>
            <h1 className="headerProfile"style={{border:'1px solid black'}}>
              <a href=""><title>{name} <br />{Education} <br />{Desination}</title></a>  
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
     
                <Link to={`/dhaka/${fullName}`} style={{textDecoration:'none',color:'white'}}>  <button className='seeChamber' style={{textDecoration:'none',color:'white'}}  >See Chamber</button> </Link>
               
               </div></h1>
              
              
             
             
            
        </div>
          
           
        </div>
        </>
    );
};

export default Dhaka;