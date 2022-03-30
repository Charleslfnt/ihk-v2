import React from "react";
import emailJs from 'emailjs-com';

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            societe: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target.value
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const nom = target.nom;
        const prenom = target.prenom;
        const email = target.email;
        const societe = target.societe;
        const message = target.message;

        this.setState({value: e.target.value});
    }



    handleSubmit (e) {
        e.preventDefault()
        emailJs.sendForm('service_3r6w34p', 'template_t36834l', e.target, 'ApKEX4FYSBHDAcAFA').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        alert('Message envoyé !');
        this.setState ({
            nom: '',
            prenom: '',
            email: '',
            societe: '',
            message: ''
        }) 
    }

     render() {
        return (
            <div className="contact-section">
                <img src="img/student.jpeg" alt="contact" className="img-fluid banniere "></img>
                <h2 className="text-center" id="contact">Contact</h2>
                <form action="#" method="POST" onSubmit={this.handleSubmit}>
                    <div>
                        <div className="range">
                        <input type="text" name="nom" className="" placeholder="Nom" value={this.state.nom} onChange={this.handleChange} required></input>
                        <input type="text" name="prenom" className=""  placeholder="Prénom" value={this.state.prenom} required></input>
                        </div>
                        <div className="range">
                        <input type="email" name="email" className="" placeholder="E-mail" value={this.state.email} onChange={this.handleChange}  required></input>
                        <input type="text" name="societe" className=""  placeholder="Société" value={this.state.societe} onChange={this.handleChange}></input>
                        </div>
                        <div className="range-two">
                        <select type="text" name="sujet"  onChange={this.handleChange} required>
                            <option value="">Sujet :</option>
                            <option value="IHK-LTD">IHK LTD</option>
                            <option value="Safran Prestige">Safran Prestige</option>
                            <option value="Immobilier">IHK Immo</option>
                            <option value="Location voiture">IHK auto</option>
                            <option value="Autre">Autre</option>
                        </select>
                        </div>
                        <div className="range-two">
                        <textarea name="message" class="" placeholder="Rédigez votre message ici..." value={this.state.message} onChange={this.handleChange} required></textarea>
                        </div>
                        <div className="range-check">
                        <input type="checkbox" name="checkbox" id="check"  required></input>
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