

const BagSummary = () => {

    let bagSummary = {
        totalItem:3,
        totalMRP: 5432,
        totalDiscount: 23,
        finalPayment: 4983
    }
  return (
    <>
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items)</div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{bagSummary.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{bagSummary.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{bagSummary.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </>
  )
}

export default BagSummary