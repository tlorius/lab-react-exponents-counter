const Exponent = ({ num, exponent }) => {
  let exponentText = "";
  for (let i = 0; i < exponent; i += 1) {
    exponentText += `${num} `;
    if (i !== exponent - 1) {
      exponentText += " * ";
    }
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <span className="exponent-number">{exponent}</span>
      </p>
      <p className="exponent-result">
        {exponentText} = <span className="total">{num ** exponent}</span>
      </p>
    </div>
  );
};

export default Exponent;
