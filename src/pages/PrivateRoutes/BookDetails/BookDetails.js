import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBook } from 'store/books/thunks';
import { addBookToCart, updateBookCountInCart } from 'store/cart/actions';
import { updateBookCount } from 'store/books/actions';
import {
  getBooksIsLoading,
  getAllBooks,
  getBooksIsError
} from 'store/books/selectors';
import Spinner from 'components/Spinner/Spinner';
import ErrorIndicator from 'components/ErrorIndicator/ErrorIndicator';
import Counter from 'pages/PrivateRoutes/BookDetails/components/Counter/Counter';

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

  onSubmit = payload => {
    console.log(payload);
    const { actions } = this.props;
    actions.addBookToCart(payload);
    actions.updateBookCount(payload);
    actions.updateBookCountInCart(payload);
  };

  render() {
    const { books, isLoading, isError } = this.props;

    if (isLoading) {
      return <Spinner />;
    }
    if (isError) {
      return <ErrorIndicator />;
    }

    return (
      <div className={styles.bookWrap}>
        {books.map(book => (
          <div key={book.id}>
            <div className={styles.book}>
              <img className={styles.img} src={book.cover} alt="book" />
              <div className={styles.bookInfo}>
                <h5>Book name: {book.title}</h5>
                <p>Author: {book.author}</p>
                <p>Level: {book.level}</p>
              </div>
              <Counter {...book} onSubmit={this.onSubmit} />
            </div>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  books: getAllBooks(state),
  isLoading: getBooksIsLoading(state),
  isError: getBooksIsError(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchBook, addBookToCart, updateBookCount, updateBookCountInCart },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
