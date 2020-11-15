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

    // on récupère les données envoyées par le handleSubmit et on les stocke sur notre état 
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
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
            <label htmlFor="travail">travail</label>
            <input
              type="travail"
              name="travail"
              id="travail"
              value={travail}
              onChange={this.handleChange} /> {/** on opère un changement d'état au clic avec la fonction "handleChange"  */}
            <input 
              type="button"
              value="Submit"
              onClick={this.submitForm}/>  {/** on utilise la fonction 'submitForm' sur le click button pour envoyer les données à notre état */}
          </form>
        );
      }
}

export default Form;