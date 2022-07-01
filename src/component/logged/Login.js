import React,{useContext, useState} from "react";
import Man from './man.png'
import {FirebaseContext} from '../Firebase'
import { useHistory } from "react-router-dom";
 export const  Login  = (props) => {

    let history = useHistory();

    const firebase = useContext(FirebaseContext)
    
    const data = {
        email:'',
        password:''
    }
    
    const [loginData, setloginData] = useState(data)
    const [error, setError] = useState('')
    const {email,password} = loginData
    const handleChange = (e) =>{
        setloginData ({...loginData, [e.target.id] : e.target.value });
    }
    
    const handleSubmit = (e) => {
   
        e.preventDefault();
        
        firebase.loginUser(email,password)

        // remet à vide le state et redirection
        .then( () => {
            setloginData({...data});
            history.push('/')
        })
    
        // en cas d'érreur , change le state 'error' pour lui mettre les valeur de l'érreur
        .catch (error =>{
            setError(error)
            setloginData({...data});
        })
    
    
    }
    
    const showError = () =>{
        const errorId = document.getElementById("errorId")
       if (error !== '') {
        errorId.classList.add('showError');
        errorId.innerHTML = `<h2 style="color: red;background-color: white;" >  ${error.message} </h2>`
          setTimeout(() => {
            errorId.classList.remove('showError');
          }, 4000);
       }
        
    }
  
 
    return (
        <div className="base-container" ref={props.containerRef}>
         
          <div className="errorMessage"  id="errorId" > {showError()} </div>  
        
        <div className="headerr">Login</div>
          <div className="contentt">
              <div >
                  <img className="imagee"  src={Man} alt="login" />
              </div>
          <form onSubmit ={handleSubmit} >
        <div className="form">
        
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input onChange={handleChange} type="text" name="email" value={email} placeholder="email" id ="email" />
              </div>

              <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input onChange={handleChange} type="password" name="password" value ={password} placeholder="password" id= "password" />
              </div>

             <button type="submit" className="btn" onClick={handleSubmit}>Login</button>
               
        </div>
        </form>
      </div>
     
    </div>
    );

}
