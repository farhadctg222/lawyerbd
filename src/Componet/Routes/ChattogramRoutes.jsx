import React from 'react';
import './AllCss.css'
import ChattogramData from '../DataMainPageShow/ChattogramDatabase/ChattogramStore';
import Chattogram from '../Page/Chattogram';
import Pagination from '../Page/Pagination';


const ChattogramRoutes = () => {
    return (
        <>
        <div>
            <title>Chattogram Best Lawyer and ITP</title>
            {
                ChattogramData.map(data=><Chattogram data={data} key={data.email}></Chattogram>)
            }
            
        </div>
       
       <Pagination></Pagination>
       <br /> <br />

       
  
      
        </>
    );
};

export default ChattogramRoutes;