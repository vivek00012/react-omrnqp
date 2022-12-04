import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [checkbox, setCheckbox] = useState([
    {
      name: 'Select All',
      id: 0,
      checked: false,
    },
    {
      name: 'checkbox 1',
      id: 1,
      checked: false,
    },
    {
      name: 'checkbox 1',
      id: 2,
      checked: false,
    },
  ]);

  const onCheck = (e) => {
    const checkBoxValue = e.target.value;
    console.log(e.target.checked);
    if (checkBoxValue == 0) {
      setCheckbox((state) => {
        const values = [...state];
        values.map((c) => {
          c.checked = e.target.checked;
        });
        return [...checkbox];
      });
    }
    setCheckbox((state) => {
      const index = state.findIndex((st) => st.id == checkBoxValue);
      state[index].checked = e.target.checked;
      return [...state];
    });
  };

  return (
    <div>
      {
        // console.log(checkbox)
      }
      {checkbox.map((checkboxItem) => {
        return (
          <div key={checkboxItem.id}>
            <input
              type="checkbox"
              value={checkboxItem.id}
              name={checkboxItem.name}
              onChange={onCheck}
              checked={checkboxItem.checked}
            />
            <label>{checkboxItem.name}</label>
          </div>
        );
      })}
    </div>
  );
}
