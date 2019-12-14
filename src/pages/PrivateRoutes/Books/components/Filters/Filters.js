import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from 'components/Forms/Input/Input';
import Select from 'components/Forms/Select/Select';
import { getFilters } from 'store/filters/selectors';
import { setFilter } from 'store/filters/actions';
import { priceOptions } from 'utils/constants';

import styles from './Filters.module.scss';

class Filters extends Component {
  handleChange = event => {
    const { actions } = this.props;
    const { name, value } = event.currentTarget;

    actions.setFilter({ name, value });
  };

  render() {
    const { filters } = this.props;

    return (
      <div className={styles.wrapper}>
        <Input
          name="search"
          value={filters.search}
          placeholder="Search by book name"
          onChange={this.handleChange}
          classes={{ input: styles.search }}
        />
        <Select
          name="price"
          value={filters.price}
          onChange={this.handleChange}
          options={priceOptions}
          classes={{ root: styles.priceDropdown }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: getFilters(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setFilter }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
