import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedRating > 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container">
      {!isSubmitted ? (
        <div className="card">
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className="buttons">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`button ${selectedRating === num ? 'selected' : ''}`}
                onClick={() => setSelectedRating(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="submitButton" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      ) : (
        <div className="card">
          <h2>Thank you!</h2>
          <p>You selected {selectedRating} out of 5</p>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
      )}
    </div>
  );
}

export default App;
