import { BrowserRouter, Navigate, Route, Routes,useParams } from 'react-router-dom'
import Home from './Componet/Home/Home'
import './Componet/Media/Media.css'

import ListName from './Componet/ListName/ListName'

import './Componet/Media/Media.css'
import Foter from './Componet/Foter/Foter'
import Registation from './Componet/Registation/Registation'
import Disclaimer from './Componet/Disclaimer/Disclaimer'
import PrivacyPolicy from './Componet/Privacy/PrivacyPolicy'
import Advirtisment from './Componet/Advirtisment/Advirtisment'
import About from './Componet/About/About'
import Chamber from './Componet/Chamber/Chamber';
import NoPage from './Componet/Page/NoPage'
import Contact from './Componet/Page/Contact'
import DhakaRoutes from './Componet/Routes/DhakaRoutes'
import DhakaChamber from './Componet/Chamber/DhakaChamber'
import ChattogramRoutes from './Componet/Routes/ChattogramRoutes'
import ChattogramChamber from './Componet/Chamber/ChattogramChamber'
import Payemet from './Componet/Page/Payemet'
import MessengerChat from './Componet/Page/MessengerChat'

function App() {


  
 

  return (
   
    <BrowserRouter>

    <Home></Home>
    
    <Routes>


    <Route path='*' element={<NoPage></NoPage>}></Route>

<Route exact path='/' element={<ListName></ListName>}></Route>
<Route path='/registaton-form' element={<Registation></Registation>}></Route>
<Route path='/disclaimer' element={<Disclaimer></Disclaimer>}></Route>
<Route path='/privacy-policy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
<Route path='/ads' element={<Advirtisment></Advirtisment>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path='/payment' element={<Payemet></Payemet>}></Route>


<Route  path=':space' element={<Chamber></Chamber>}></Route>
<Route path='/contact' element={<Contact></Contact>}></Route>
{/* <Route path='/payment' element={<Advirtisment></Advirtisment>}></Route> */}

{/* Distric Wise Page Routes */}


<Route path='/dhaka' element={<DhakaRoutes></DhakaRoutes>}></Route>
<Route path='/chattogram' element={<ChattogramRoutes></ChattogramRoutes>}></Route>

<Route path='/dhaka/:fullName' element={<DhakaChamber></DhakaChamber>}></Route>
<Route path='/chattogram/:ChName' element={<ChattogramChamber></ChattogramChamber>}></Route>








    </Routes>

   
    <Foter></Foter>
    
    
    </BrowserRouter> 
    
  )
}

export default App
