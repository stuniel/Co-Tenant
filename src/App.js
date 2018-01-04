import React from 'react';
import FlatCard from './components/FlatCard';
import Header from './components/Header';
import Map from './components/Map';
import SearchForm from './components/SearchForm';
import DATA from './data';
import './css/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flats : [] };
  }
  render() {
    return (
      // TODO Header, SearchForm, Map and FlatCards will come here
      <h2>Co-Tenant</h2>
    )
  }
}

export default App;
