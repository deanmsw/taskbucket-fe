import React, { useState } from 'react';
import styles from './styles.module.css'; // Import your CSS module here

interface Quote {
  uuid: number;
  name: string;
  price: number | string;
  status: string;
}

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList: React.FC<QuoteListProps> = ({ quotes }) => {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleViewClick = (quote: Quote) => {
    setSelectedQuote(quote);
    setIsOpen(true);
  };

  return (
    <>
      <table className={styles.quoteTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.uuid}>
              <td>{quote.name}</td>
              <td>{quote.price}</td>
              <td>{quote.status}</td>
              <td>
                <button onClick={() => handleViewClick(quote)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOpen && selectedQuote && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Quote Details</h2>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>Name: {selectedQuote.name}</p>
              <p>Price: {selectedQuote.price}</p>
              <p>Status: {selectedQuote.status}</p>
              {/* Add more details here as needed */}
              <button className={styles.rejectBtn}>Reject</button>
              <a href={`/checkout/${selectedQuote.uuid}`}>
                <button className={styles.acceptBtn}>Accept</button>
              </a>
            </div>
            <div className={styles.modalFooter}>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteList;
