import React, { Component } from 'react';
import { fetchBook } from 'store/books/thunks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentBook, getBooksIsLoading } from 'store/books/selectors';
import Spinner from 'components/Spinner/Spinner';

import styles from './BookDetails.module.scss';

class BookDetails extends Component {
  componentDidMount = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props; // id
    const { actions } = this.props;

    actions.fetchBook({ id });
  };

  render() {
    const { book, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div>
        <div className={styles.book}>
          <img src={book.cover} alt="book" />
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
            <button type="button">Add to cart</button>
          </div>
        </div>
        <p>{book.description}</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  book: getCurrentBook(state),
  isLoading: getBooksIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBook }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
