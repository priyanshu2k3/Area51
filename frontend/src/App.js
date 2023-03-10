import { Routes,Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import Calculate from './pages/Calcutate';
import Vendor from './pages/Vendors';

function App() {
  return (
    <div className="App">
        <Routes>
       
       <Route path="/" element={<Homepage/>}/>
       <Route path="/Blog" element={<Blog/>}/>
       <Route path="/Calculate" element={<Calculate/>}/>
       <Route path="/Vendor" element={<Vendor/>}/>

       {/* <Route path="/room/:roomId" element={<RoomPage/>}/> */}
       
     </Routes>
    </div>
  );
}

export default App;
