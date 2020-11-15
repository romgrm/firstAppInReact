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
    const row = props.karma.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.nom}</td>
                <td>{row.work}</td>
            </tr>
            )
    })
    return <tbody>{row}</tbody>
}

class Table extends Component {
    render() {

        const {zeubi} = this.props; // this.props permet d'accéder aux propriétés(données) envoyée par la const 'personnages' dans App 
        
        return (
            <table>
                <TableHeader />
                <TableBody karma ={zeubi} />
            </table>
        )
    }
}




export default Table