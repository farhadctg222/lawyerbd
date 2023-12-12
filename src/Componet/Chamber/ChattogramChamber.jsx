import { Link, useParams } from "react-router-dom";
import ChattogramData from "../DataMainPageShow/ChattogramDatabase/ChattogramStore";

const ChattogramChamber = () => {

    const {ChName} = useParams()

    const dd = ChName.replaceAll("-"," ")
    const sss = ChattogramData.find(pd=>pd.name===dd)
    console.log(sss)
  
   
 
    const {name,Education,Specialist,workPlace,Desination,ChamberAddress,ChamberName,phone,image,} = sss
 
    return (
        <>
         <title>{name}</title>
     
             <div className='ProfileCard'>
            <h1 className="headerProfile"style={{border:'1px solid black'}}>
              <a href=""><title>{name} <br />{Education} <br />{Desination}</title></a>  
              <a href=""><title>{ChamberName} <br />{workPlace}</title></a>
            <div className="image">
                <img src={image} alt="image" />
               </div>
               <div className="nameHeader">
               <Link style={{textDecoration:'none'}}> <h3 style={{color:'#2a7fba',}} >{name}</h3></Link>
                <h5 >{Education}</h5>
                <h6 style={{color:'red'}}>{Specialist}</h6>
                <h5 >{Desination}</h5>
                <h5 className='desination' >{workPlace}</h5></div>
                </h1>
                


                <div className="aboutBangladesh">
                <h2 style={{margin:'0',padding:'10px'}}>Chamber & Appointment</h2>
                <h3 style={{margin:'0',padding:'10px',borderBottom:'none',color:'#F76401'}}>{ChamberName}</h3>
                 <p style={{margin:'0',padding:'0',border:'none',}}>{ChamberAddress}</p> <br />
              <a href={phone}  > <button className="seeChamber">Call Now</button> </a>  <br /><br />
              </div> <br />
                 
           
           
         <br />
        <div className="aboutBangladesh">
                <h2 style={{margin:'0',padding:'10px'}}>About {name}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati hic quas maxime quibusdam expedita, quaerat minus veniam dolores voluptas repudiandae, esse fuga repellendus non perferendis. Quia hic incidunt suscipit commodi sunt! Facilis deleniti nihil incidunt. Architecto ad reiciendis qui nobis voluptas maxime quidem, aut quod, voluptate maiores illum suscipit dolor debitis iure fugiat, modi velit sed? Ea in natus dolor, tenetur quo repellat dicta recusandae voluptatum ipsum non fugit hic, dolorum cum a at porro iste architecto dolore. Commodi ex consequuntur nihil nemo, illum ea unde illo corporis eveniet ipsum ullam nam dolores asperiores. Aspernatur atque necessitatibus molestias optio voluptatem.</p>
                
              </div><br /> <br />
           
            <p style={{color:'red'}}>Update Comming Soon........</p>

            
       </div>
       </>
    );
};

export default ChattogramChamber;