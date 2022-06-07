import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase.js'
import Nav from './components/Nav';


function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user? <Nav text = "Chat" status= {user.displayName} photoURL= {user.photoURL}/> : <Nav text="Login" status="Sign Up"/>}
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
