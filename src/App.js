import Header from "./components/header/Header";
import Signin from "./components/Signin";
import Postlist from "./components/Postlist";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/posts" element={<Postlist/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
