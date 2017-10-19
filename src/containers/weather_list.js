import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';

class WeatherList extends Component {

    renderWeather(cityData) {

        const name = cityData.city.name;

        const temp = cityData.list.map((weather) => weather.main.temp);

        const presure = cityData.list.map((weather) => weather.main.pressure);

        const humidity = cityData.list.map((weather) => weather.main.humidity);


        return (
            <tr key={name}>
                <td>{name}</td>
                
                <td>
                    <Chart data={temp} color="orange" />
                </td>
                
                <td>
                    <Chart data={presure} color="blue" />
                </td>
                
                <td>
                    <Chart data={humidity} color="red" />
                </td>
            </tr>
        )
    }


    render() {
        return (

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>

        );
    }

}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);