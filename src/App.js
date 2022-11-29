import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {Routes,Route} from 'react-router-dom'
import Protected from './Protected';
import SendEmail from './SendEmail';
import Reset from './Reset';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/protected" element={<Protected />}/>
        <Route path="/sendemail" element={<SendEmail />}/>
        <Route path="/reset" element={<Reset />}/>
      </Routes>     
    </div>
  );
}

export default App;
