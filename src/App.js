
// import Login from "./Components/Login";
 import Signup from "./Components/Signup";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Login from "./Components/Login";
 import MyModal from "./Components/MyModal";



function App() {
  return (
    <div className="App">
    
  

  <Router>
        <Routes>
        {/* <Route exact path="/" component={''} /> */}

        <Route exact path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mymodal" element={<MyModal />} />
          
         
         
          

          </Routes>
      </Router>

    </div>
  );
}

export default App;
