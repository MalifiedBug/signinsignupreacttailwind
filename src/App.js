import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {Routes,Route} from 'react-router-dom'
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/protected" element={<Protected />}/>
      </Routes>     
    </div>
  );
}

export default App;
