import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Getuser() {
  const [users, setUsers] = useState([]);
  const [userValues, setUserValues] = useState("");
  

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  const showDetails = async (login) => {
    console.log("clicked");
    document.getElementsByClassName('show')[0].style.display="none";
    const response = await fetch(`https://api.github.com/users/${login}`);
    setUserValues(await response.json());
    console.log("sucess");
    document.getElementsByClassName('clicked')[0].style.display="block";
  };

  const goBack=()=>{
    document.getElementsByClassName('show')[0].style.display="";
    document.getElementsByClassName('clicked')[0].style.display="none";
  }
  const getFollowers = async (login) => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((res) => {
        return res.followers;
      });
  };
console.log("aayo", userValues);
  return (

    <>
      <h1 className="text-center">List of Github Users</h1>
      <div className="container container-fluid mt-5">

        <div className="row text-center show">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div
                  className="card p-2"
                  onClick={() => showDetails(curElem.login)}
                >
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={curElem.avatar_url}
                        className="rounded"
                        width="155"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 text-Left">{curElem.login}</h4>
                      <span className="text-left">{curElem.type}</span>
                      <div className="p-2 m-2 d-flex justify-content-between rounded bg-dark text-white">
                        <div className="d-flex flex-column">
                          <span className="articles">Articles</span>{" "}
                          <span className="number1">38</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">ID</span>{" "}
                          <span className="number2">{curElem.id}</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>{" "}
                          <span className="number3">8.9</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
          <div className="clicked" >
              {
                  userValues!== undefined &&
                  <>
                    <h2>Details</h2>
                    <button onClick={goBack}>Goback</button>
                    <div className="card p-2">
                      <div className="d-flex align-items-center">
                        <div className="image">
    
                          <img
                            src={userValues.avatar_url}
                            className="rounded"
                            width="155"
                          />
                        </div>
                        <div className="ml-3 w-100">
                          <h4 className="mb-0 mt-0 text-Left">{userValues.name}</h4>
                          <span className="text-left">{userValues.type}</span>
                          <div className="p-2 m-2 d-flex justify-content-between rounded text-white bg-dark">
                          <div className="d-flex flex-column">
                              <span className="articles">Repos</span>{" "}
                              <span className="number1">{userValues.public_repos}</span>{" "}
                            </div>
                            <div className="d-flex flex-column">
                              <span className="followers">followers</span>{" "}
                              <span className="number2">{userValues.followers}</span>{" "}
                            </div>
                            <div className="d-flex flex-column">
                              <span className="rating">following</span>{" "}
                              <span className="number3">{userValues.following}</span>{" "}
                            </div>
                            <div className="d-flex flex-column">
                              <span className="rating">Location</span>{" "}
                              <span className="number3">{userValues.location}</span>{" "}
                            </div>
                            <div className="d-flex flex-column">
                              <span className="rating">Github</span>{" "}
                              <span className="number3"><a href={userValues.html_url}><button className="btn btn-primary">url</button></a></span>{" "}
                            </div>
                            <div className="d-flex flex-column">
                              <span className="rating">Blog</span>{" "}
                              <span className="number3"><a href={userValues.blog}><button className="btn btn-primary">Blog</button></a></span>{" "}
                            </div>                        
                          </div>
                        </div>
                      </div>
                    </div>
                    </>

                  
              }
                
            </div>
        </div>
    </>
  );
}

export default Getuser;
