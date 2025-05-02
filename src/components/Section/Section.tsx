import "./Section.scss";

const Separator = ({ text }: { text: string }) => {
  return (
    <div className="separator-container">
      {text && <span className="separator-text">{text}</span>}
      <hr className="separator-line" />
    </div>
  );
};

export default Separator;
