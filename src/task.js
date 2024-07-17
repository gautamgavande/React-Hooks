import React, { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    { title: 'Accordion 1', content: 'This is the content of accordion 1' },
    { title: 'Accordion 2', content: 'This is the content of accordion 2' },
    { title: 'Accordion 3', content: 'This is the content of accordion 3' },
  ];

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index}>
          <h2 onClick={() => handleAccordionClick(index)}>{item.title}</h2>
          {activeIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;