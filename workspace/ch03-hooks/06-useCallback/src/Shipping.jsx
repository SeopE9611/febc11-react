function Shipping({handlePayment}) {
  return (
    <>
      <h2>배송비</h2>
      <div>
        배송비: 3,500원<br/>
      </div>
      <br/>
      <button type="button" onClick={handlePayment}>결제</button>
    </>
  )
}

export default Shipping;