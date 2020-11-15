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

/** on récupère les données envoyées par Table et on les utilise pour les placer dans un tableau de ligne, et on créer un button 'supprimer' qui va changer l'état de notre application */
const TableBody = (props) => {
    const row = props.dataPerso.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.nom}</td>
                <td>{row.travail}</td>
                <td onClick={() => props.suppPerso(index)}> Delete </td>
            </tr>
            )
    })
    return <tbody>{row}</tbody>
}

/** on récupère les données envoyées par App et on les envoie à TableBody */
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