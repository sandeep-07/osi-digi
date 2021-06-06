import React from 'react'
import "../pages/Contact.css"
import {Row,Container ,Col} from "reactstrap"
function Footer() {
  return (
    <div>
      <footer class="page-footer" style={{background:"#48008b"}}>
        <div class="foot">
              <div>
                <ul class="co">
                  <li>
                    <a class="facebook" href="https://www.facebook.com/">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>

                  <li>
                    <a class="instagram" href="https://www.instagram.com/">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>

                  <li>
                    <a class="twitter" href="https://www.twitter.com/">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
            </div>
            <div class="info">
              <p>For more info, visit our social media handles...</p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
