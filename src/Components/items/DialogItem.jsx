import DialogContext from "./DialogContext";
import DialogPeople from "./DialogPeople";
const DialogItem = ({ item: { icon, title, text, name, job } }) => {
  return (
    <div className="col-sm-6 ">
      <DialogContext item={{ title, text }} />
      <DialogPeople item={{ icon, name, job }} />
    </div>
  );
};
export default DialogItem;
