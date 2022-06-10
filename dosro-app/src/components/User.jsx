import { Button } from 'react-bootstrap';
import React,{useState, useEffect} from 'react'
import {initialUser} from '../Configure';


const User = () => {
    // const [data, setData] = useState({ errorMessage: "", isLoading: false });
    // const [userValues, setUserValues] = useState("");
    const hasCode= false;

    const click = async () =>{
        const url = window.location.href;
      const hasCode = url.includes("?code=");
      const proxy_url = `http://api.github.com/user`;
      const data = { 'grant_type': 'client_credentials'};
  
      // If Github API returns the code parameter
      if (hasCode) {
        const newUrl = url.split("?code=");
        // window.history.pushState({}, null, newUrl[0]);
  
        var requestData = {
          code: newUrl[1]
        };
  
        
  
        // Use code parameter and other parameters to make POST request to proxy_server
        
        // const options = 
        
        // axios.request(options).then(function(res) {
        //       console.log(res);  
        //     }).catch(function(err) {
        //       console.log("error = " + err);
        //     }); 

        
      }
        await fetch(proxy_url,{
            mode: 'no-cors',
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${requestData.code}`
        },
            auth:{
              username: initialUser.CLIENT_ID,
              password: initialUser.CLIENT_SECRET,
            },
            data: JSON.stringify(data),
          }

    )
      .then(response => response.json())
      .then(data => {console.log(data)
      })
      .catch(error => {
        console.log(error);
      });
    }
  return (
      <>
      <div>
          { hasCode==false &&
          <div>
          <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${initialUser.CLIENT_ID}&redirect_uri=${initialUser.REDIRECT_URI}`}>
          <Button >Sign in with github</Button></a>
          <Button onClick={click}>click</Button></div>
}
{/* {
    hasCode && 
    <div>
        <h1>{userValues.login}</h1>
    </div>
} */}
      </div>
      </>
  )
}

export default User