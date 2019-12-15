import React, { Component } from 'react';
import classNames from 'classnames';

import KeyValuePair from 'components/KeyValuePair/KeyValuePair';
import Counter from 'components/Forms/Counter/Counter';
import Button from 'components/Button/Button';

import styles from './AddToCartForm.module.scss';

class AddToCartForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: props.cartBook ? props.cartBook.totalPrice : 0,
      totalCount: props.cartBook ? props.cartBook.totalCount : 0
    };
  }

  handleCountChange = e => {
    const { price } = this.props;
    const { value } = e.currentTarget;

    this.setState({
      totalCount: value,
      totalPrice: (value * price).toFixed(2)
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;

    onSubmit(this.state);
  };

  render() {
    const { price, count, classes } = this.props;
    const { totalPrice, totalCount } = this.state;

    const wrapperClass = classNames(styles.wrapper, classes.root);

    return (
      <form className={wrapperClass} onSubmit={this.handleSubmit}>
        <KeyValuePair title="Price, $" value={price} />
        <KeyValuePair
          title="Count"
          value={
            <Counter
              name="totalCount"
              value={totalCount}
              min={0}
              max={count}
              onChange={this.handleCountChange}
            />
          }
        />
        <KeyValuePair title="Total price" value={totalPrice} />

        <div className={styles.footer}>
          <Button type="submit" disabled={!totalCount}>
            Add to cart
          </Button>
        </div>
      </form>
    );
  }
}

export default AddToCartForm;
