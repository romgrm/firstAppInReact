import React, {Component} from 'react'

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
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange} />  {/** on opère un changement d'état au clic avec la fonction "handleChange"  */}
            <label htmlFor="job">Travail</label>
            <input
              type="text"
              name="job"
              id="job"
              value={job}
              onChange={this.handleChange} /> {/** on opère un changement d'état au clic avec la fonction "handleChange"  */}
          </form>
        );
      }
}

  
  export default Form;