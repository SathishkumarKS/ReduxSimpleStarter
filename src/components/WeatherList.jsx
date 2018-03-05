import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Chart  from './Chart';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  renderCityData(cityData) {
    const cityName = cityData.city.name;
    const tempList = cityData.list.map(weather => weather.main.temp);
    const pressureList = cityData.list.map(weather => weather.main.pressure);
    const humidityList = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Chart data={tempList} color="orange" unit="K"/>
        </td>
        <td>
          <Chart data={pressureList} color="green" unit="hPa"/>
        </td>
        <td>
          <Chart data={humidityList} color="black" unit="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.weather.map(this.renderCityData)
          }
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({ weather }) {
  return {
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
