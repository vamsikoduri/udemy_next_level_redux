import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import { connect } from 'react-redux';


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: "" };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {

        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {

        event.preventDefault();
        this.props.fetchWeather(this.state.term);
    }


    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="get a five day forcast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-second">Submit</button>
                </span>
            </form>


        )
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// here null represent the state of the application
export default connect(null, mapDispatchToProps)(SearchBar);