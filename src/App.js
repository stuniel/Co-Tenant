import React from 'react';
import CreateFlat from './components/CreateFlat';
import Flats from './components/Flats';
import axios from 'axios';
import './css/style.css';

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get('http://localhost:3001/api/flats')
      .then(res => {
        this.setState({ data: res.data });
    })
  }

  handleCommentSubmit = (flat) => {
    console.log('it works')
    console.log(flat)
    const flats = this.state.data;
    axios.post('http://localhost:3001/api/flats', flat)
      .catch(err => {
        console.error(err)
        this.setState({ data: flats })
      });
  }
  // TODO Header, Map and FlatCards will come here
  render() {
    const {data} = this.state;
    return (
      <div>
        <CreateFlat onCommentSubmit={this.handleCommentSubmit}/>
        <Flats data={data} />
      </div>
    )
  }
}

export default App;
