import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./home";
import Signup from "./signup";
import Signin from "./Signin";

import PageNotFound from "./PageNotFound";


function App() {
  
  return (
    <div>

    
    <Router>
    <Routes>
        
        <Route>
          
          
          <Route index element={<Home/>}/>

        </Route>
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/signin" element={ <Signin/> } />
        
        <Route path="*" element={<PageNotFound/>} />
        
        </Routes>
      </Router>
    </div>
  );
  }
 
  
  export default App;
  
  
  
  
  
  
  

