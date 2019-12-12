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
      currentCount: 0,
      totalPrice: 0
    };
  }

  increment = () => {
    this.setState(state => {
      return {
        currentCount: state.currentCount + 1
      };
    });
    if (this.state.currentCount === this.state.count) {
      this.setState(state => {
        return {
          currentCount: state.count
        };
      });
    }
    this.setState(state => {
      return {
        totalPrice: (
          Math.floor(state.currentCount * state.price * 100) / 100
        ).toFixed(2)
      };
    });
  };

  decrement = () => {
    this.setState(state => {
      return {
        currentCount: state.currentCount - 1
      };
    });
    if (this.state.currentCount === 0) {
      this.setState(state => {
        return {
          currentCount: 0
        };
      });
    }

    this.setState(state => {
      return {
        totalPrice: (
          Math.floor(state.currentCount * state.price * 100) / 100
        ).toFixed(2)
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.currentCount === 0) {
      return null;
    }
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.setState(state => {
      return {
        count: this.props.count - state.currentCount,
        currentCount: 0,
        totalPrice: 0
      };
    });
  };

  render() {
    const { price, currentCount, totalPrice } = this.state;
    return (
      <form className={styles.addToCart}>
        <div className={styles.addToCartRow}>
          <span>Price, $</span>
          <span>{price}</span>
        </div>
        <div className={styles.addToCartRow}>
          <span>Count</span>
          <div className={styles.flexCount}>
            <p className={styles.count}>{currentCount}</p>
            <div className={styles.flexArrows}>
              <button
                onClick={this.increment}
                className={styles.arrowContainer}
              >
                <ArrowTop className={styles.arrow} />
              </button>
              <button
                onClick={this.decrement}
                className={styles.arrowContainer}
              >
                <ArrowBottom className={styles.arrow} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.addToCartRow}>
          <span>Total price</span>
          <span>{totalPrice}</span>
        </div>
        <button type="button" onClick={this.handleSubmit}>
          Add to cart
        </button>
      </form>
    );
  }
}

export default Counter;
