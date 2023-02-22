import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Home } from './pages/Home';
import { FirebaseProvider } from './context/AppContext';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <FirebaseProvider>
     <Routes>
      <Route path = "/home" element={<Home/>} />
     </Routes>
     </FirebaseProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
