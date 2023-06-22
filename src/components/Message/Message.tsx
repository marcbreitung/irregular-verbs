type MessageProps = {
  message: string;
  severity: "error" | "warning" | "info" | "success";
  onClose?: () => void;
};

const Message = ({ message, severity, onClose }: MessageProps) => {
  return (
    <div className={`message ${severity}`}>
      <div className="message__content">{message}</div>
      <div className="message__close" onClick={onClose}>
        X
      </div>
    </div>
  );
};

export default Message;
