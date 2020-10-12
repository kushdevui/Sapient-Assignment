import React from 'react';
import { getQuery, types } from '../../utils/assetUtils';
import { withRouter } from 'react-router-dom';
import './side-bar.scss';

const data = {
  LAND: 'land',
  LAUNCH: 'launch',
  YEAR: 'year'
};

class SideBar extends React.Component {
  state = {
    year: null,
    launch: null,
    land: null
  };

  componentDidMount() {
    if (this.props.location.search) {
      this.setData();
    }
  }

  setData = () => {
    let query = new URLSearchParams(this.props.location.search);
    let year = query.get(types.launch_year);
    let launch =
      query.get(types.launch_success) === 'true'
        ? true
        : query.get(types.launch_success) === 'false'
        ? false
        : null;
    var land =
      query.get(types.land_success) === 'true'
        ? true
        : query.get(types.land_success) === 'false'
        ? false
        : null;
    this.setState({
      year,
      launch,
      land
    });
  };

  handleClick = (type, value) => {
    this.setState(
      prevState => {
        return {
          [type]: prevState[type] === value ? null : value
        };
      },
      () => {
        const { year, land, launch } = this.state;
        let params = {
          launch_year: year,
          launch_success: launch,
          land_success: land
        };
        this.props.history.push('/?' + getQuery(params));
        this.props.setLoad(true);
      }
    );
  };

  render() {
    const { year, land, launch } = this.state;
    const years = [
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020'
    ];
    return (
      <div className="side-nav-wrapper">
        <h4>Filters</h4>
        <div className="filter-sub">Launch Year</div>
        <div className="filter-years">
          {years.map((item,index) => (
            <button
            key={index}
              style={{ background: year === item ? '#008000' : '' }}
              onClick={() => this.handleClick(data.YEAR, item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="filter-sub">Successful Launch</div>
        <div className="filter-launch">
          <button
            onClick={() => this.handleClick(data.LAUNCH, true)}
            style={{ background: launch === true ? '#008000' : '' }}
          >
            True
          </button>
          <button
            onClick={() => this.handleClick(data.LAUNCH, false)}
            style={{ background: launch === false ? '#008000' : '' }}
          >
            False
          </button>
        </div>
        <div className="filter-sub">Successful landing</div>
        <div className="filter-lainding">
          <button
            onClick={() => this.handleClick(data.LAND, true)}
            style={{ background: land === true ? '#008000' : '' }}
          >
            True
          </button>
          <button
            onClick={() => this.handleClick(data.LAND, false)}
            style={{ background: land === false ? '#008000' : '' }}
          >
            False
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);
