import React from "react";
import { Routes,Route } from "react-router-dom";
import Menu from "./Menu";
import Add from "./Add";
import Display from "./Display";
import Home from "./Home";
import Error from "./Error";
class App extends React.Component
{
  render()
  {
    return(
      <>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Add" element={<Add/>}/>
          <Route path="/Display" element={<Display/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </>
    )
  }
}
export default App;