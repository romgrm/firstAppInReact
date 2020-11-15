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

const TableBody = () => {
    return(
        <tbody>
      
    </tbody>
    )
}

class Table extends Component {
    render() {

        const {donneePersonnages} = this.props; 
        
        return (
            <table>
                <TableHeader />
                <TableBody donneePersonnages ={donneePersonnages} />
            </table>
        )
    }
}




export default Table