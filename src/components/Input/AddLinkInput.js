import { useState } from "react";

import "../../styles/index.scss"
const AddLinkInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, value,...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  console.log(value); 
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        
        focused={focused.toString()}
      />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default AddLinkInput;