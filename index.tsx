import React, { useState } from 'react';
import { render } from 'react-dom';
import './styles.css';

const App = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = "This is the text to be copied";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button 
        onClick={copyToClipboard} 
        style={{ backgroundColor: isCopied ? 'green' : 'initial' }}
      >
        {isCopied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
};

render(<App />, document.getElementById('root'));