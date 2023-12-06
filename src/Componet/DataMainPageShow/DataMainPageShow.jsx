import React from 'react';
import data from '../../../src/Componet/DataCenter/AllData.jsx'
import HeaderProfile from '../HeaderProfile/HeaderProfile.jsx';

const DataMainPageShow = () => {

  const MainPageData = data

    
    return (
        <div>
            {
                MainPageData.map(data=><HeaderProfile data={data} key={data.email}></HeaderProfile>)
            }

            
        </div>
    );
};

export default DataMainPageShow;