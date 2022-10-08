import React from "react";
import CloseIcon from '../../assets/icons/close-icon.svg';
const Toast = ({ message,type ,setIsSubmitted}) => {
  return (
    <div className="toast">
      <div className="close-button" onClick={()=>setIsSubmitted(prev => !prev)}>
        <img src={CloseIcon} alt="close-icon" />
      </div>
      <div className="toast__content">
        <div className="texts">
          <div className="title">{type === 'success'? 'Added' : 'Error while adding link element'}</div>
          <div className="message">{message}</div>
        </div>
        <div className="icon">
          {type === "success" && <div className="icon__success">✔</div>}
            {type === "error" && <div className="icon__error">Error</div>}
        </div>
      </div>
    </div>
  );
};

export default Toast;
