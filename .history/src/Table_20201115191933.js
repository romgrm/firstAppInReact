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
    const row = props.dataPerso.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.nom}</td>
                <td>{row.travail}</td>
                <td onClick={() => props.suppPerso(index)}> Supprimer </td>
            </tr>
            )
    })
    return <tbody>{row}</tbody>
}

const Table = (props) => {
    const {dataPerso, suppPerso} = props 

    return (
        <table>
            <TableHeader />
            <TableBody dataPerso={dataPerso} suppPerso={suppPerso} />
        </table>
    )
}


export default Table