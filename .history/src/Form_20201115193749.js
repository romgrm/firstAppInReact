import React, { Component } from 'react'

class Form extends Component {
   
    // on set notre etat en fonction des propriétés de l'objet "initialState"
    initialState = {
        nom : '',
        travail : '',
    }

    state = this.initialState 

    // on créer une fonction flechée pour pouvoir changer l'éat en fonction d'une entrée clavier 
    handleChange = (event) => {
        const {name, value} = event.target 
    
        this.setState({
            [name]:value,
    
    
        })
    }
    
    // on return un formulaire avec les données du dessus (handle change, nom, travail... )
    render() {
        const { nom, travail } = this.state;
      
        return (
          <form>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={nom}
              onChange={this.handleChange} />  {/** on opère un changement d'état au clic avec la fonction "handleChange"  */}
            <label htmlFor="travail">Travail</label>
            <input
              type="travail"
              name="travail"
              id="travail"
              value={travail}
              onChange={this.handleChange} /> {/** on opère un changement d'état au clic avec la fonction "handleChange"  */}
          </form>
        );
      }
}

export default Form;