const Pill = ({ quantity, className = '' }) => {
  return (
      <span className={`pill ${className}`}>
          {quantity}
      </span>
  );
};

export default Pill;


// const Pill = ({ quantity, className }) => {
//     return (
//       <span className={`pill ${className}`}>{quantity}</span>
//     );
//   };
  
//   export default Pill;


// const Pill = ( {quantity} ) => <span className='pill'>{ quantity }</span>;

// export default Pill;