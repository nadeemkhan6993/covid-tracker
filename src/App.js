import React, { Component } from 'react';
import './App.css';
import image from './coronavirus.jpg';
import Cards from './components/Card/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import {fetchData} from './api';

class App extends Component {

  state={
    data:{},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data: fetchedData});
  }

  handleCountryChange = async(country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
  }

  render(){
    const {data, country} = this.state;
    return(
      <div className="container">
        <img className='banner' src={image} alt="Covide-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;