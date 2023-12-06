import React from 'react';
import DhakaData from '../DataMainPageShow/DhakaDatabase/DhakaStore';
import Dhaka from '../Page/Dhaka';

import './AllCss.css'
import Pagination from '../Page/Pagination';

const DhakaRoutes = () => {
   
    return (
        <>
        <div>
            <title>Dhaka Specialist Lawyer and ITP</title>
            {
                DhakaData.map(database=><Dhaka database={database} key={database.email}></Dhaka>)
            }
            
        </div>
       <Pagination></Pagination>
       <br /> <br />

       
  
        </>
    );
};

export default DhakaRoutes;