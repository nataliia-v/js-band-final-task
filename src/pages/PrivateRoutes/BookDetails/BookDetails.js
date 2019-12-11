import React, { Component } from 'react';
import { fetchBook } from 'store/books/thunks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    // const { actions } = this.props;
    //
    // actions.addBookInCart(payload);
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
      <div>
        {books.map(book => (
          <div key={book.id}>
            <div className={styles.book}>
              <img className={styles.img} src={book.cover} alt="book" />
              <div className={styles.bookInfo}>
                <p>Book name: {book.title}</p>
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
  actions: bindActionCreators({ fetchBook }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
