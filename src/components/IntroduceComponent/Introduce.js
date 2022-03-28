import React from "react";

class Introduce extends React.Component {
     render() {
        return (
            <div className="introduce">
                <div>
                <h2>QUI SOMMES-NOUS ?</h2>
                <p>Depuis plus de 20 ans, IHK assure le négoce de produits tels que : Matériaux de construction (fer à béton, cornières, tôles ondulées, profilés...) 
                    mais nous commercialisons également d'autres produits tels que : Acier, Quincaillerie, Bois,
                     Revêtement sol (carrelage, parquet,…) et plafond, Sanitaire, Produits Chimiques</p>
                </div>

                <div>
                <h2>NOS PRINCIPAUX MARCHÉS SE SITUENT</h2>
                     <p>l'Océan Indien (Madagascar, Réunion, L'Ile Maurice, Mayotte, Les Comores) l'Afrique (Mozambique, Tanzanie, Kenya, Gabon, Sénégal, Cameroun...). l'Europe (France et DOM, Belgique). Asie</p>
                </div>

                <div>
                <h2>DES FOURNISSEURS AUX 4 COINS DU MONDE</h2>
                <p>Europe (CEE, Turquie, Roumanie,..) Asie (Inde, Chine, Malaysie..) Amérique du Sud.</p>
                </div>
            </div>      
        );
      }
}

export default Introduce;