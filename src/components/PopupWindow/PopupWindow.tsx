import "./popupWindow.css";

interface PopupWindowProps {
  popupColor: string;
  popupTitle: string;
  popupText: string;
  closeWindow: Function;
}

export const PopupWindow = ({
    popupColor, popupTitle, popupText, closeWindow
  }: PopupWindowProps) => {
    
  return (
    <div className="popup_wrapper">
      <div className="popup">
        <div className={`popup_header ${popupColor}`}></div>
        <div className="popup_text_container">
          <p className="popup_text_title">{popupTitle}</p>
          <p className="popup_text_content">{popupText}</p>
        </div>
        <div className="popup_footer">
          <button 
            className="transparent_black_btn popup_btn" 
            onClick={() => closeWindow()}
          >
              Понятно
          </button>
        </div>
      </div>
    </div>
  )
}
