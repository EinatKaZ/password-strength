import './App.css';
import {useEffect , useState} from 'react' ;

function App() {
  const [password , setPassword] = useState("") ; 
  const [strength , setStrength] = useState("week") ; 
  const [submit , setSubmit] = useState (false) ;

  useEffect(()=>{
    if(password.length < 3){
      setStrength("weak")
      setSubmit(false)
    }

    if(password.length > 2 && password.length < 7 ){
      setStrength("medium")
      setSubmit(true)
    }

    if(password.length >= 7 ){
      setStrength("Strong")
      setSubmit(true)
    }

  }, [strength,password,submit])


  return (
    <div className="App">

      <h1> Enter Your Password </h1>
      <input type = "text" onChange={(e)=>{setPassword(e.target.value)}}></input>
      <button onClick={strength} disabled = {submit ? false : true}  > Submit </button>
      <p> Your password strength is <b>{strength}</b> </p>
     
    </div>
  );
}

export default App;
