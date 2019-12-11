import React, { Component } from 'react';
import { ReactComponent as ArrowTop } from 'images/arrowTop.svg';
import { ReactComponent as ArrowBottom } from 'images/arrowBottom.svg';

import styles from './Counter.module.scss';

class Counter extends Component {
  constructor(props) {
    super(props);

    const { id, title, price, count } = props;
    this.state = {
      id,
      title,
      price,
      count,
      totalPrice: Math.floor(count * price * 100) / 100
    };
  }

  increment = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
    this.setState(state => {
      return {
        totalPrice: (Math.floor(state.count * state.price * 100) / 100).toFixed(
          2
        )
      };
    });
  };

  decrement = () => {
    this.setState(state => {
      return {
        count: state.count - 1
        // totalPrice: count * state.price
      };
    });
    this.setState(state => {
      return {
        // count: state.count - 1,
        totalPrice: (Math.floor(state.count * state.price * 100) / 100).toFixed(
          2
        )
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
  };

  render() {
    // console.log(this.state);

    const { price, count, totalPrice } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.addToCart}>
        <div className={styles.addToCartRow}>
          <span>Price, $</span>
          <span>{price}</span>
        </div>
        <div className={styles.addToCartRow}>
          <span>Count</span>
          <div className={styles.flexCount}>
            <p className={styles.count}>{count}</p>
            <div className={styles.flexArrows}>
              <span onClick={this.increment} className={styles.arrowContainer}>
                <ArrowTop className={styles.arrow} />
              </span>
              <span onClick={this.decrement} className={styles.arrowContainer}>
                <ArrowBottom className={styles.arrow} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.addToCartRow}>
          <span>Total price</span>
          <span>{totalPrice}</span>
        </div>
        <button type="submit">Add to cart</button>
      </form>
    );
  }
}

export default Counter;
