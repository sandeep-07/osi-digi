import React, { Component, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
// import Header from "./components/Header";
import "./Contact.css"
import { useStateValue } from "../StateProvider";
import Button from "@material-ui/core/Button";
import { auth,db} from "../firebase";


function Profile() {
  
  const [{ basket, user }, dispatch] = useStateValue();
  const [contact,setContact]=useState("");
  const [email,setEmail]=useState("");
  const [city,setCity]=useState("")
  const [username,setUserName]=useState("")
  
  user?(
  db
  .collection("users")
  .doc(user.uid)
  .get()
  .then((docRef) => {
    if(user)
    setEmail(user.email)
    setContact(docRef.data().contact)
    setCity(docRef.data().city)
    setUserName(docRef.data().username)
  })
  .catch((error) => { })):console.log("USER DOES not exists")

  console.log(contact)

    
  return(  
    <section className="container-1">
    <img id = "back" src="https://scontent.flko1-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/33597105_1360152880784660_8041343268299997184_o.jpg?_nc_cat=100&ccb=2&_nc_sid=dd9801&_nc_ohc=3JsBux6TCSQAX_2nhNE&_nc_ht=scontent.flko1-1.fna&tp=14&oh=7925b2240a8ce94aec43a6a53d4af6a4&oe=6000378D" width="1519" height="500" alt="coverphoto"/>
    <div>
      <div style={{display:"flex", marginButton: 10}}>
        <div>
          <div
            style={{
              width:150,
              height: 200,
              borderRadius: 80,
              overflow:"hidden",
              // border: "6px solid  rgb(37, 226, 132)",
              marginTop: -80,
              marginLeft: 50
              }}
          >
          
          </div>
        </div>
        <div id="h">
          <h3 style={{marginLeft: 40, marginTop: -80, color: "white"}}>
            <strong>{user ? username+ "" : "Sign In"}</strong>
          </h3>
        </div>
        <div style={{marginLeft: 25,flex:1, marginTop: 0, color:"white"  }}><h3 id="h_">edit</h3></div> 
        </div> 
        <div style={{borderTop : "1px solid white"}}> 
          <div
            style={{
              color:"darkblue",
              fontFamily: "fantasy",
              marginTop: 10
            }}> 
          </div>
        </div> 
       </div>
       <h1 style={{marginLeft:680, marginTop:-120}}><strong>About</strong></h1>
       <div class="title">
         <div class="underline"></div>
       </div>
         <article class="review">
           <div class="img-container">
       <article class="review">
            <h2 style={{marginLeft:150,marginTop:30}}><strong>Contact Info</strong></h2>
            <p id="author">{}</p>
            <p id="job" style={{marginLeft:150}}>Hi Gamer,</p>
            <p id="info" style={{marginLeft:150}}>Here's your about info:
            </p>
            <p id="e" style={{marginLeft:150, colour:"black"}}><strong>📧 Email: {user?(email):"Sign in plz"}</strong></p>
            <p id="e" style={{marginLeft:150}}><strong>📱   Contact no. :{user?(contact):"Sign in plz"} </strong></p>
            {/* <p id="e" style={{marginLeft:150}}><strong>⭐ Favourites :{user?(favourites):"Sign in plz"} </strong></p> */}
            {/* <p id="e" style={{marginLeft:20}}><strong>Description :{user?(description):"Sign in plz"} </strong></p>
              <textarea id="e" rows="6" cols="45" ></textarea>
              <button type="reset" id="b">Edit</button> */}
        </article>
 </div>
      </article>  
      {/* <article class="review">
            <div class="img-container2">
              <h3 id="m" style={{marginLeft:20}}>More...</h3>
              <p></p>
              <p></p>
              <p id="e" style={{marginLeft:20}}><strong>🏢 Workplace:{user?(workplace):"Sign in plz"} </strong></p>
              <p></p>
              <p id="e" style={{marginLeft:20}}><strong>🏙️ City: {user?(city):"Sign in plz"}</strong></p>
              <p></p>
              <p></p>
              <p></p>

            </div>
            </article> */}


            <div>
              <h2 style={{marginLeft:920, marginTop:-230}}><strong>History & Orders</strong></h2>
            </div>

            <Button class="but" style={{marginLeft:920, marginTop:30}}>
             <Link to="/orders" style={{color:"black"}}> <p style={{marginTop:5}}><strong>Go to your orders</strong></p></Link>
            </Button>

           
            <Button class="but2" style={{marginLeft:920, marginTop:30,  }}>
              
             
             <Link to="/"><p style={{marginTop:5}}><strong>Back to Homepage</strong></p></Link> 
            </Button>
          <section class="slideshow ">
            <div class="content">
              <div class="content-carousel">
                <figure class="shadow"><img src="https://yt3.ggpht.com/ytc/AAUvwnhmq_1z8YkaDRcufHc_Yvdi3E8eWTEcxV7jHGFPDw=s900-c-k-c0x00ffffff-no-rj"></img>
                  </figure>
                  <figure class="shadow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZUl7Lqp6_58Q3NF1T2_0JaO2_Hf03Er-Jg&usqp=CAU"></img>
                  </figure>
                  <figure class="shadow"><img src="https://yt3.ggpht.com/a/AATXAJwaL-y9dtkPXRaXwuXI4jWaOLt-Zpcc8WkDlh4Jrw=s900-c-k-c0x00ffffff-no-rj"></img>
                  </figure>
                  <figure class="shadow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWH7ISW6A0wI4myLmdHTQ7Lvv-_cuFVvozw&usqp=CAU"></img>
                  </figure>
                  <figure class="shadow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNm1mrVMlOhfEmOT77xMYARaflDuJ5h6Ppw&usqp=CAU"></img>
                  </figure>
                  <figure class="shadow"><img src="https://yt3.ggpht.com/a/AATXAJyr2icffyO6itMC01a8SwbhP3gmrgCTwVFOvhPa=s900-c-k-c0x00ffffff-no-rj"></img>
                  </figure>
                  <figure class="shadow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDBVmaYvJK1TnYVCT_4BfmkB8YlXx0A_zeg&usqp=CAU"></img>
                  </figure>
                  <figure class="shadow"><img src="https://yt3.ggpht.com/ytc/AAUvwnggpwpMdYd3VQApsGC4l7X600E_KE1mBbk5OD8O=s900-c-k-c0x00ffffff-no-rj"></img>
                  </figure>
                  <figure class="shadow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMCgCmkQ0u6iyHN3nj69wyD24pSdjnXl4Vw&usqp=CAU"></img>
                  </figure>
                  {/* <figure class="shadow"><img src="https://yt3.ggpht.com/ytc/AAUvwnhmq_1z8YkaDRcufHc_Yvdi3E8eWTEcxV7jHGFPDw=s900-c-k-c0x00ffffff-no-rj"></img>
                  </figure> */}
              </div>
              
            </div>
            

           
            
            
          </section>
          </section>

         
          
         
    
       )}
export default Profile;