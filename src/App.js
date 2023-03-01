import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Home } from './pages/Home';
import { FirebaseProvider } from './context/AppContext';
import { AddMember } from './pages/AddMember';
import { AddAdmin } from './pages/AddAdmin';
import { EnrollManually } from './pages/EnrollManually';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <FirebaseProvider>
     <Routes>
      <Route path = "/home" element={<Home/>} />
      <Route path = "/add" element = {<AddMember/>}/>
      <Route path = "/addadmin" element = {<AddAdmin/>}/>
      <Route path = "/enroll" element = {<EnrollManually/>}/>
      <Route path = "*" element={<Home/>} />

     </Routes>
     </FirebaseProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
