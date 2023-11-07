import React from 'react';

function MyComponent() {
  const customFontStyle = {
    fontFamily: 'Your Font Name, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    // Other font properties here
  };

  return (
    <div style={customFontStyle}>
      This text uses the custom font style.
    </div>
  );
}

export default MyComponent;
