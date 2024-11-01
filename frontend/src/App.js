import React from 'react';
import BookingForm from './components/BookingForm';
import Calendar from './components/Calendar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Hall Booking System</h1>
      <BookingForm />
      <Calendar />
    </div>
  );
};

export default App;
