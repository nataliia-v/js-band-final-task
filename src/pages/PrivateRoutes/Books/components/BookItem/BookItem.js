import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './BookItem.module.scss';

function BookItem({ id, title, author, cover, price }) {
  const bookPath = `/books/${id}`;

  return (
    <div className="card mb-3" style={{ width: `${470}px` }}>
      <div
        // className="row no-gutters"
        className={classNames(styles.row, 'row no-gutters')}
      >
        <div>
          <img
            className={classNames(styles.bookImg, 'fa fa-check-square-o')}
            src={cover}
            alt="cart"
          />
        </div>

        <div className="col-md-8">
          <div
            // className="card-body"
            className={classNames(styles.cardBody, 'card-body')}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-title">{author}</p>
            <div className={styles.wrapper}>
              <span className="card-title">{price}</span>
              <Link to={bookPath} className="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
