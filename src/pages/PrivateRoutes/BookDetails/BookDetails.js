import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBook } from 'store/books/thunks';
import { addBookToCart } from 'store/cart/actions';
import { getBooksIsLoading, getBookById } from 'store/books/selectors';
import { addToastThunk } from 'store/layout/thunks';
import { getCartBookById } from 'store/cart/selectors';
import Spinner from 'components/Spinner/Spinner';

import AddToCartForm from './components/AddToCartForm/AddToCartForm';

import styles from './BookDetails.module.scss';

class BookDetails extends Component {
  componentDidMount = () => {
    this.fetchBook();
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.id !== this.props.match.params.id &&
      this.props.match.params.id
    ) {
      this.fetchBook();
    }
  }

  fetchBook = () => {
    const {
      history,
      match: {
        params: { id }
      },
      actions
    } = this.props;

    actions.fetchBook(history, { id });
  };

  onSubmit = payload => {
    const { actions, book } = this.props;
    actions.addBookToCart({ ...payload, ...book });
    actions.addToastThunk({
      message: `${book.title} has been added to the cart.`
    });
  };

  render() {
    const { book, cartBook, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div className={styles.bookWrap}>
        {book && (
          <div key={book.id}>
            <div className={styles.book}>
              <img className={styles.img} src={book.cover} alt="book" />
              <div className={styles.bookInfo}>
                <h5>Book name: {book.title}</h5>
                <p>Author: {book.author}</p>
                <p>Level: {book.level}</p>
              </div>
              <AddToCartForm
                {...book}
                cartBook={cartBook}
                classes={{ root: styles.cartForm }}
                onSubmit={this.onSubmit}
              />
            </div>
            <p>{book.description}</p>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  book: getBookById(state, id),
  cartBook: getCartBookById(state, id),
  isLoading: getBooksIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchBook, addBookToCart, addToastThunk },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
