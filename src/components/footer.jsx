import React, { Component } from "react";

import { Menu, Dropdown, Container, Button } from "semantic-ui-react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
class MainFooter extends Component {
  state = {};
  render() {
    return (
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Sharif Sport<span>logo</span>
          </h3>

          <p class="footer-links">
            <a href="#">Home</a>·<a href="#">Blog</a>lkafkaldk
            <a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>
            alkflakmfcma<a href="#">Contact</a>
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker" />
            <p>
              <span>Our address is here</span> Iran Tehran
            </p>
          </div>

          <div>
            <i class="fa fa-phone" />
            <p>+1897983244</p>
          </div>

          <div>
            <i class="fa fa-envelope" />
            <p>
              <a href="mailto:sharif@web.programing">sharif@web.programing</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About us</span>
            sport is very goood :)) do sport handsom:)))
          </p>
        </div>
      </footer>
    );
  }
}

export default MainFooter;
