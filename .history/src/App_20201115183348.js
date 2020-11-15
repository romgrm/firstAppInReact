import React, { Component } from 'react';
import TableHeader from './Table'
import TableBody from './Table'

class App extends Component {
    render() {
      return (
        <div className="Container">
          <TableHeader />
          <TableBody />
        </div>
      )
    }
  }

  export default App 