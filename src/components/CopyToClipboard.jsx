import { useState, useEffect } from 'react'

const CopyToClipboard = ({ email }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = email;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Set the state to indicate that the email has been copied
    setIsCopied(true);

    // Reset the copied state after a brief period
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <div>
      <button className="bg-green-500 text-white px-4 py-2 rounded shadow-md" onClick={copyToClipboard}>
        {isCopied ? 'Copied!' : 'Copy Email to Clipboard'}
      </button>
    </div>
  );
};

export default CopyToClipboard;
