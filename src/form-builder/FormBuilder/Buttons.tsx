type Props = {
  onSubmit: () => void;
  clear: () => void;
};

const Buttons = (props: Props) => {
  return (
    <div className="form-builder__buttons">
      <button className="form-builder__button" onClick={props.onSubmit}>
        SUBMIT
      </button>
      <button className="form-builder__button" onClick={props.clear}>
        CLEAR
      </button>
    </div>
  );
};

export default Buttons;
