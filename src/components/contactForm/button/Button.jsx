import css from "./button.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/operations";

const Button = ({ children, typeButton, contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => {
    console.log("delID", id);
    dispatch(deleteContact(id));
  };

  const classButton =
    typeButton === "button_add"
      ? css["button_add"]
      : typeButton === "button_del"
      ? css["button_del"]
      : css["button"];

  return (
    <div className={css.wrapper}>
      <button
        className={`${css.button} ${classButton}`}
        onClick={
          typeButton === "button_del"
            ? () => {
                handleDeleteContact(contact.id);
              }
            : null
        }
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  typeButton: PropTypes.string.isRequired,
  contact: PropTypes.object,
};
export default Button;
