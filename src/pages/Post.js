import React,{useState} from "react";
import "./Post.css";
import { Container, Row, Col } from "reactstrap";
import { auth,db} from "../firebase";
import { useStateValue } from "../StateProvider";
function Post({ username, caption, imageUrl, postId, desc, name, timestamp }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const [contact,setContact]=useState("");
  const [email,setEmail]=useState("");
  const [city,setCity]=useState("")

  
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
    
  })
  .catch((error) => { })):console.log("USER DOES not exists")

  return (
    <div className='game '>
      <Container fluid>
        <Row>
          <Col md={2} sm={4} xs={4}>
            <img src={imageUrl} className='sideImg' />
          </Col>
          <Col md={8} sm={12}>
            <div className='info desc'>
              <Row>
                <Col md={3} className='text-white'>
                  Details
                </Col>
                <Col>
                  <p className='desc'>{desc}</p>
                </Col>
              </Row>
              
              <Row>
                <Col md={3} className='text-white'>
                  Created On
                </Col>
                <Col>{timestamp}</Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
