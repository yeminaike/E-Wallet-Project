
// import Login from "./Components/Login";
 import Signup from "./Components/Signup";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Login from "./Components/Login";


function App() {
  return (
    <div className="App">

  <Login/>
  {/* <Signup/> */}

  <Router>
        <Routes>
        {/* <Route exact path="/" component={''} /> */}

        <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
         
          

          </Routes>
      </Router>

    </div>
  );
}

export default App;
