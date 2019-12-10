import React, { Component } from 'react';
import { fetchBook } from 'store/books/thunks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBooks, getBooksIsLoading } from 'store/books/selectors';

import styles from './BookDetails.module.scss';

class BookDetails extends Component {
  componentDidMount = () => {
    let {
      match: {
        params: { id }
      }
    } = this.props; //id
    const { actions } = this.props;

    actions.fetchBook({ id });
  };
  render() {
    let {
      match: {
        params: { id }
      }
    } = this.props; //id
    const { book } = this.props;

    return (
      <div>
        <div className={styles.book}>
          <img src={book.cover} alt="" />
          <div className={styles.bookInfo}>
            <p>Book name: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Level: {book.level}</p>
          </div>

          <div className={styles.addToCart}>
            <div className={styles.addToCartRow}>
              <span>Price, $</span>
              <span>{book.price}</span>
            </div>
            <div className={styles.addToCartRow}>
              <span>Count</span>
              <span>count</span>
            </div>
            <div className={styles.addToCartRow}>
              <span>Total price</span>
              <span>total price</span>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
        <p>{book.description}</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  book: getAllBooks(state),
  isLoading: getBooksIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBook }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
