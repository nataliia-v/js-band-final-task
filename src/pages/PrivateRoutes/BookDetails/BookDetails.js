import React from 'react';

function BookDetails({
  match: {
    params: { id }
  }
}) {
  return <div>Book Details - {id}</div>;
}

export default BookDetails;
