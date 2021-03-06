import React, { useState} from "react";

class Navbar extends React.Component {
     render() {
        return (
            <div className="myNav fixed-top">
            <p class="text-center title">IHK.LTD</p>
            <p className="subtitle text-center">A bridge company</p>  
            <nav class="navbar navbar-expand-lg navbar-light">
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
                    <a class="nav-link active" href="#nous">L'agence</a>
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