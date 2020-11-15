import React, { Component } from 'react';
import Table from './Table'

class App extends Component {
    render() {

        const personnages = [
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
        ]
      return (
        <div className="Container">
          <Table donneePersonnages={personnages}/>
        </div>
      )
    }
  }

  export default App 