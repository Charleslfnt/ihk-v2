import React from "react";

class Contact extends React.Component {
     render() {
        return (
            <div className="contact-section">
                <img src="img/businesswoman.jpeg" alt="contact" className="img-fluid banniere "></img>
                <h2 className="text-center" id="contact">Contact</h2>
                <form action="#">
                    <div>
                        <div className="range">
                        <input type="text" name="nom" className="" placeholder="Nom" required></input>
                        <input type="text" name="prenom" className="" placeholder="Prénom" required></input>
                        </div>
                        <div className="range">
                        <input type="email" name="email" className="" placeholder="E-mail" required></input>
                        <input type="text" name="societe" className="" placeholder="Société"></input>
                        </div>
                        <div className="range-two">
                        <select type="text" name="sujet" required>
                            <option value="">Sujet :</option>
                            <option value="IHK-LTD">IHK LTD</option>
                            <option value="Safran Prestige">Safran Prestige</option>
                            <option value="Immobilier">IHK Immo</option>
                            <option value="Location voiture">IHK auto</option>
                            <option value="Autre">Autre</option>
                        </select>
                        </div>
                        <div className="range-two">
                        <textarea name="message" class="" placeholder="Rédigez votre message ici..." required></textarea>
                        </div>
                        <div className="range-check">
                        <input type="checkbox" name="checkbox" value="checked" id="check" required></input>
                        <label for="check">Les informations recueillies à partir de ce formulaire sont strictement à usage interne et réservées au traitement de votre demande - Politique de confidentialité</label>
                        </div>
                        <div className="range-two">
                        <button type="submit" class="btn btn-dark">Envoyer !</button>
                        </div>
                    </div>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41957.78128663613!2d2.373782131152362!3d48.90850770670397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e4072b47e7f%3A0xc6832c0cffdb66ca!2s8%20Rue%20Marguerite%20de%20Rochechouart%2C%2075009%20Paris!5e0!3m2!1sfr!2sfr!4v1648418882196!5m2!1sfr!2sfr" width="100%" height="400" allowfullscreen="" title="Notre adresse" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        
        );
      }
}

export default Contact;