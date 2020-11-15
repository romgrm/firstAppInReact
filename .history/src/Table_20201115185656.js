import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th> Nom </th>
                <th> Travail </th>
            </tr>
        </thead>    
    )
}

const TableBody = (props) => {
    const rows = props.donneePersonnages.map((row, index) => {
        return(
            <tr key={index}>
                <td>{rows.nom}</td>
                <td>{rows.travail}</td>
            </tr>
            )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {

        const {donneePersonnages} = this.props; // this.props permet d'accéder aux propriétés(données) envoyée par la const 'personnages' dans App 
        
        return (
            <table>
                <TableHeader />
                <TableBody donneePersonnages ={donneePersonnages} />
            </table>
        )
    }
}




export default Table