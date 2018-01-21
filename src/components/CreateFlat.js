import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import { amenities } from '../data/listing';

class CreateFlat extends React.Component {
  state = {
    title: '',
    location: '',
    price: '',
    amenities: [],
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleAmnetiesChange = (e) => {
    const { amenities } = this.state;
    const amenity = e.target.value;
    const index = amenities.indexOf(amenity);
    const isChecked = e.target.checked;
    isChecked
      ? amenities.push(amenity)
      : amenities.splice(index, 1);
    this.setState({ amenities });
  }

  handleSubmit = (e) =>  {
    e.preventDefault();
    let title = this.state.title.trim();
    let location = this.state.location.trim();
    let price = this.state.price;
    let amenities = this.state.amenities;
    if (!title || !location || !price) {
      alert('missing data')
      return;
    }
    this.props.onCommentSubmit({ title, location, price, amenities });
    this.setState({ title: '', location: '', price: '', amenities: [] });
    console.log('data sent')
  }

  render() {
    console.log(amenities)
    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          placeholder='Flat title…'
          label='title'
          onChange={ this.handleInputChange }
          value={this.state.title}
        />
        <Input
          placeholder='Location'
          label='location'
          onChange={ this.handleInputChange }
          value={this.state.location}
        />
        <Input
          type='number'
          placeholder='Price'
          label='price'
          onChange={ this.handleInputChange }
          value={this.state.price}
        />
        {amenities.map((label, index) => (
          <Checkbox
            key={label}
            name='amenities'
            label={label}
            onChange={ this.handleAmnetiesChange }
            checked={this.state.amenities.includes(label)}
          />
        ))}
        <button type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}

export default CreateFlat;
