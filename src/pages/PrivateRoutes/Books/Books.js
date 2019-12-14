import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getBooksIsLoading, getFilteredBooks } from 'store/books/selectors';
import { fetchBooks } from 'store/books/thunks';
import Spinner from 'components/Spinner/Spinner';
import BookItem from './components/BookItem/BookItem';
import Filters from './components/Filters/Filters';

import styles from './Books.module.scss';

class Books extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchBooks();
  }

  render() {
    const { books, isLoading } = this.props;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <div className={styles.wrapper}>
        <Filters />
        <div className={styles.booksList}>
          {books.map(book => (
            <BookItem key={book.id} {...book} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: getFilteredBooks(state),
  isLoading: getBooksIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBooks }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
