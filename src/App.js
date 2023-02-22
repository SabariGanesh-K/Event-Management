import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Home } from './pages/Home';
import { FirebaseProvider } from './context/AppContext';
import { AddMember } from './pages/AddMember';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <FirebaseProvider>
     <Routes>
      <Route path = "/home" element={<Home/>} />
      <Route path = "/add" element = {<AddMember/>}/>
     </Routes>
     </FirebaseProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
