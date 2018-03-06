import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Page extends Component {
    onYearBtnClick = (e) => {
        this.props.setYear(+e.target.innerText);
    }
    render() {
        const { year, photos } = this.props;
        return (
            <div>
                <p>
                    <button onClick={this.onYearBtnClick}>2272</button>
                    <button onClick={this.onYearBtnClick}>2273</button>
                    <button onClick={this.onYearBtnClick}>2274</button>
                </p>
                <h3>Year {year}</h3>
                <p>You have {photos.length} photos by the year {year}.</p>
            </div>
        )
    }


}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}
