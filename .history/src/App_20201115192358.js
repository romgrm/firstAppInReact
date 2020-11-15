import React, { Component } from 'react';
import Table from './Table'

class App extends Component {
    state = {               // state est un état et ça permet d'ajouter/supprimer des données en temps réel, elles ne sont pas fixes 
        personnages: [
            {
                nom : 'Charlie',
                travail : 'Maçon',
            },
            {
                nom : 'Romain',
                travail : 'Développeur'
            },
            {
                nom : 'Tanguy',
                travail : 'Architecte'
            }
        ],
    }

    /** la fonction 'supprimerPersonnages' permet de delete des données de l'état en fonction de leur index, grâce àa la fonction 'filter' qui compare les données précédentes et actuelles du tableau 'personnages' */
    supprimerPersonnages = (index) => { 
        const {personnages} = this.state

        this.setState({
            personnages: personnages.filter((personnages, i) => {
                return i !== index; 
            }),
        })
    }
    /** on envoie les données de 'personnages' ainsi que la fonction 'supprimerPersonnages' à notre Table */
    render() {
        const {personnages} = this.state
        return (
            <div className="Container">
              <Table dataPerso={personnages} suppPerso={this.supprimerPersonnages}/>  
            </div> 
          )
        
    }   
  }

  export default App 