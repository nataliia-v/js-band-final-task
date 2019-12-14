import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getBooks, getTotalPrice } from 'store/cart/selectors';
import { calculateTotalPrice } from 'store/cart/actions';

class Cart extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.calculateTotalPrice();
  }

  render() {
    const { books, allTotalPrice } = this.props;
    return (
      <div>
        <button type="button">Purchase</button>
        <ul>
          {books.map(book => (
            <li className="list-group list-group-horizontal" key={book.id}>
              <p className="list-group-item">{book.title}</p>
              <p className="list-group-item">{book.currentCount}</p>
              <p className="list-group-item">{book.totalPrice}</p>
            </li>
          ))}
        </ul>

        <div>
          <span>Total price,</span>
          <span> $ {allTotalPrice}</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ calculateTotalPrice }, dispatch)
});

const mapStateToProps = state => ({
  books: getBooks(state),
  allTotalPrice: getTotalPrice(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
