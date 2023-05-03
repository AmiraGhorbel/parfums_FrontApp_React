import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



class Apropos extends Component {
    state = {

    }

    render() {

        return (
            <div className="Apropos">
                <br></br>
                <br></br>
                <h2 style={{ float: 'left', color: '#880E4F' }}>C'est la Beauté à la Suédoise</h2>
                <br></br><br></br>
                <hr></hr>
                <div style={{ float: 'left' }}>
                <p style={{ float: 'left' }}>
                    Notre héritage suédois fait que,
                    nous avons une vision unique de la beauté.
                    Pour nous, ce n’est pas seulement votre apparence,
                    mais aussi votre vie et vos sentiments. C'est une manière de vivre; d'être en bonne santé,
                    de bénéficier d'une peau </p>
                <p style={{ float: 'left' }}>belle, de s'exprimer et de s'amuser.Il s’agit d’avoir confiance
                    en vous et de trouver un équilibre dans la vie. Un équilibre qui vient
                    aussi bien de l’intérieur
                    que de l’extérieur, ce qui va vous permettre de garder le contrôle,
                    </p>
                <p style={{ float: 'left' }}>peu importe ce que la vie vous réserve.</p>
                    </div>
                <h2 style={{ float: 'left', color: '#880E4F' }}>Qui Sommes-nous</h2>
                
                <div style={{ float: 'left' }}>
                
                <hr></hr>
                <p style={{ float: 'left' }}>
                    Depuis plus de 50 ans,
                    nous incitons des femmes et des hommes du monde entier à réaliser leurs rêves et à célébrer leur expression unique.
                    Nous développons, produisons,
                    distribuons et vendons des produits innovants et axés sur les </p>
                <p style={{ float: 'left' }}>tendances aux amoureux de la beauté à travers le monde entier et nous leur offrons la
                    possibilité unique de faire partie du monde de la beauté.</p></div>

                <h2 style={{ float: 'left', color: '#880E4F' }}>Inspirés par la Nature</h2>
                <div style={{ float: 'left' }}>
                <hr></hr>
                <p style={{ float: 'left' }}>Depuis le début, la nature a joué un rôle important pour nous.
                Nous avons été parmi les premiers au monde à proposer des produits cosmétiques contenant des extraits naturels tels que la Sève de Bouleau,
                des décennies avant la plupart des </p>
                <p style={{ float: 'left' }}>autres sociétés et le concept des produits
                cosmétiques suédois naturels a toujours servi de base à nos produits.</p>
                </div>
            </div>
        );
    }
}
export default Apropos;