import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllBooks, getBooksIsLoading } from 'store/books/selectors';
import { fetchBooks } from 'store/books/thunks';
import BookItem from './components/BookItem/BookItem';

import styles from './Books.module.scss';

class Books extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.fetchBooks();
  }

  render() {
    const { books } = this.props;

    return (
      <div>
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
  books: getAllBooks(state),
  isLoading: getBooksIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBooks }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
