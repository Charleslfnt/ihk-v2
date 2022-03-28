import React, { useState} from "react";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state =  {
          sticky: true,
          scrollPos: 0
        }
        }
    
        componentDidMount = () => {
          window.addEventListener('scroll', this.handleScroll)
        }
    
        componentWillUnmount = () => {
          window.removeEventListener('scroll', this.handleScroll)
        }
    
        handleScroll = () => {
          this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
          });
        }

     render() {
        return (
            <div className="myNav">
            <p class="text-center title"><a class="navbar-brand" href="#">IHK.LTD</a></p>
            <nav class="navbar sticky-top navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item barre">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item barre">
                    <a class="nav-link active" href="#nous">Qui sommes-nous ?</a>
                  </li>
                  <li class="nav-item barre">
                    <a class="nav-link active" href="#groupes">Nos Groupes</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
        );
      }
}

export default Navbar;