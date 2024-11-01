export default ParentComponent;
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data] = useState(['عنصر 1', 'عنصر 2', 'عنصر 3']); 

  return (
    <div>
      <h1>قائمة البيانات</h1>
      <ChildComponent data={data} />
    </div>
  );
};

