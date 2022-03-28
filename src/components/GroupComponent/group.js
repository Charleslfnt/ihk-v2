import React from "react";

class Group extends React.Component {
    render() {
        return (
            <div className="groups-section">
                <h2 className="text-center">Nos groupes</h2>
                <div class="groups">
                    <div>
                    <h3 className="text-center">IHK ltd</h3>
                    <p className="text-center">Vente de matériaux</p>
                    </div>
                    <div>
                    <h3 className="text-center">IHK Immo</h3>
                    </div>
                </div>

                <div class="groups">
                    <div>
                    <h3 className="text-center">IHK Location</h3>
                    </div>
                    <div>
                    <h3 className="text-center">Safran Prestige</h3>
                    <p className="text-center">E-commerce d'épices en tout genre</p>
                    <p className="text-center"><a href="https://www.safranprestige.fr" className="text-center" title="notre site">Aller sur le site</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Group