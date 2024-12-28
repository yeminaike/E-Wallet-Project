

 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUp/SignUpPage";






function App() {
  return (
    <div className="App">
   
  

   <Router>
        <Routes>
    

        <Route exact path="/" element={<SignUpPage />} />
       
         
         
          

          </Routes>
      </Router> 

    </div>
  );
}

export default App;
