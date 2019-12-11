import React, { Component } from 'react';
import { fetchBook } from 'store/books/thunks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooksIsLoading, getAllBooks } from 'store/books/selectors';
import Spinner from 'components/Spinner/Spinner';
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
    const { books, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div>
        {books.map(book => (
          <div key={book.id}>
            <div className={styles.book}>
              <img src={book.cover} alt="book" />
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
  isLoading: getBooksIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBook }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
