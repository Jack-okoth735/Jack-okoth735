import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Dynamic List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an item"
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">
          Add Item
        </button>
      </div>
      <div className="list-container">
        {items.length === 0 ? (
          <p className="empty-message"></p>
        ) : (
          <ul className="item-list">
            {items.map((item, index) => (
              <li key={index} className="list-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;