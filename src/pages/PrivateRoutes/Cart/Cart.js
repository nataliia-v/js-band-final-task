import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from 'store/cart/selectors';

class Cart extends Component {
  render() {
    const { books } = this.props;
    return (
      <div>
        <button>Purchase</button>
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
          <span>Total Price,</span>
          <span> $ 103</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: getBooks(state)
});

export default connect(mapStateToProps)(Cart);
