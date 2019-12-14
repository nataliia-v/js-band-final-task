import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './BookItem.module.scss';

function BookItem({ id, title, author, cover, price }) {
  const bookPath = `/books/${id}`;

  const wrapperClass = classNames(styles.wrapper, 'card');
  const cardBodyClass = classNames(styles.cardBody, 'card-body');
  const titleClass = classNames(styles.title, 'card-title');

  return (
    <div className={wrapperClass}>
      <img src={cover} className="card-img-top" alt="..." />
      <div className={cardBodyClass}>
        <div>
          <h5 className={titleClass}>{title}</h5>
          <span className="card-text">{author}</span>
        </div>
        <div className={styles.cardFooter}>
          <span className="card-text">{price}$</span>
          <Link to={bookPath} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookItem;
