import React,{useEffect} from 'react'
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ProductDisp from "./pages/ProductDisp"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        //user is logge out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  console.log("USER IS", user)

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route exact path="/product/:id" component={ProductDisp}  />
          <Route exact path="/login" component={Login}  />
          <Route exact path="*" component={NotFound}  />
          <Route exact path="/nf" component={NotFound}  />

        </Switch>
      </Router>
    </div>
  );
}

export default App
