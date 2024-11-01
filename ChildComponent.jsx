export default ChildComponent;
import React from 'react';

const ChildComponent = ({ data }) => {
  return (
    <div>
      {data.length === 0 ? (
        <p>المصفوفة لا تحتوي على عناصر.</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

