import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BookItem.module.scss';

function BookItem({ id, title, author, cover, price }) {
  const bookPath = `/books/${id}`;

  return (
    <div className="card" style={{ width: `${15}rem` }}>
      <img className="card-img-top" src={cover} alt="" />
      <div className="card-body">
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
  );
}

export default BookItem;
