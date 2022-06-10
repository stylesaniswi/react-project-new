import { Button } from 'react-bootstrap';
import React,{useState, useEffect} from 'react'
import {initialUser} from '../Configure';


const User = () => {
    // const [data, setData] = useState({ errorMessage: "", isLoading: false });
    // const [userValues, setUserValues] = useState("");
    const hasCode= false;

    const click = () =>{
      const axios =require('axios');
      const request = require('superagent');
        const url = window.location.href;
      const hasCode = url.includes("?code=");
      
  
      // If Github API returns the code parameter
      if (hasCode) {
        const newUrl = url.split("?code=");
        // window.history.pushState({}, null, newUrl[0]);
  
        var requestData = {
          code: newUrl[1]
        };

        var data = { };
  
        
  
        // Use code parameter and other parameters to make POST request to proxy_server
        
        // const options = 
        
        // axios.request(options).then(function(res) {
        //       console.log(res);  
        //     }).catch(function(err) {
        //       console.log("error = " + err);
        //     }); 

        
      }
    //           fetch('https://github.com/login/oauth/access_token',{
    //             method: "POST",       
    //         data: {
    //           'grant_type': 'authorization_code',
    //           'client_id': initialUser.CLIENT_ID,
    //           'client_secret': initialUser.CLIENT_SECRET,
    //           'code': requestData.code,
    //           'redirect_uri': initialUser.REDIRECT_URI
    //         },
    //         headers: { 'content-type': 'application/x-www-form-urlencoded'} 
    //       }

    // )
    //   .then(response => response.json())
    //   .then(data => {console.log(data)
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

      request
      .post('ttps://github.com/login/oauth/access_token')
      .send({
              client_id: initialUser.CLIENT_ID,
              client_secret : initialUser.CLIENT_SECRET,
              code : requestData.code,
              redirect_uri: initialUser.REDIRECT_URI
      }) // sends a JSON post body
      .set('Accept', 'application/json')
      .then(function (result) {
        const data = result.body;
        console.log(data);
      });


    }

    const tryo= () =>{
      fetch(`https://api.github.com/user`,{
        method: "GET",
        headers: {
          Authorization: 'Bearer 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' 
        }
      })
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
          <Button onClick={click}>click</Button>
          <Button onClick={tryo}>Trythis</Button></div>
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