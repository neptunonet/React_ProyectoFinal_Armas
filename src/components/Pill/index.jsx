const Pill = ({ quantity, className = '' }) => {
  return (
      <span className={`pill ${className}`}>
          {quantity}
      </span>
  );
};

export default Pill;
