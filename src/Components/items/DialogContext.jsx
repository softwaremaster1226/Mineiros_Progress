const DialogContext = ({ item: { title, text } }) => {
  return (
    <div className="py-5">
      <div className="dialogitembackground">
        <h4>{title}</h4>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default DialogContext;
