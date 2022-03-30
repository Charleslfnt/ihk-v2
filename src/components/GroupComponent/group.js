import React from "react";

class Group extends React.Component {

    render() {
        return (
            <div className="groups-section">
                    <img src="img/job.jpeg" alt="contact" className="img-fluid banniere"></img>
                <h2 className="text-center"  id="groupes" >Nos groupes</h2>
                <div class="groups">
                    <div>
                    <h3 className="text-center">IHK ltd</h3>
                    <p className="text-center">Société d'import export de matériaux de construction</p>
                    </div>
                    <div>
                    <h3 className="text-center">IHK Immo</h3>
                    <p className="text-center">Location immobilière</p>
                    </div>
                </div>

                <div class="groups">
                    <div>
                    <h3 className="text-center">IHK Location</h3>
                    <p className="text-center">Location de voitures en région Parisienne</p>
                    </div>
                    <div>
                    <h3 className="text-center">Safran Prestige</h3>
                    <p className="text-center">E-commerce d'épices en tout genre</p>
                    <p className="text-center"><a href="https://www.safranprestige.fr" className="text-center" title="notre site">Voir le site</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Group