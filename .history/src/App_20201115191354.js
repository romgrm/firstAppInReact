import React, { Component } from 'react';
import Table from './Table'

class App extends Component {
    state = {
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

    supprimerPersonnages = (index) => {
        const {personnages} = this.state

        this.setState({
            personnages: personnages.filter((personnages, i) => {
                return i !== index; 
            }),
        })
    }

    render() {
        const {personnages} = this.state
        return (
            <div className="Container">
              <Table zeubi={personnages} suppPerso={this.supprimerPersonnages}/>
            </div>
          )
        
    }   
  }

  export default App 