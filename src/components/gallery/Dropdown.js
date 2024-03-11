import React, {useState} from'react';

function Dropdown({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = React.useRef(null);
 
    // Close the dropdown if a click occurs outside of it
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
 
    // Add event listener when the dropdown is open
    React.useEffect(() => {
      if (isOpen) {
        window.addEventListener('click', handleClickOutside);
      }
      // Clean up event listener when the dropdown is closed
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, [isOpen]);
 
    return (
      <div ref={dropdownRef}>
        {/* Dropdown button */}
        <button onClick={() => setIsOpen(!isOpen)}>
          Open Me!
        </button>
        {/* Dropdown content */}
        {isOpen && (
            <>
            {children}
            </>
        )}
      </div>
    );
  }
  export default Dropdown;