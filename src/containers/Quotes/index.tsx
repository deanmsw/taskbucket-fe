'use client';
import QuoteList from '@/components/QuoteList';
import React from 'react';

const quotes = [
  { uuid: 1, name: 'Quote 1', price: '$100', status: 'Pending' },
  { uuid: 2, name: 'Quote 2', price: '$200', status: 'Accepted' },
  { uuid: 3, name: 'Quote 3', price: '$150', status: 'Rejected' },
];

function Quotes() {
  return (
    <>
      <QuoteList quotes={quotes} />
    </>
  );
}

export default Quotes;
