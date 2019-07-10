import React from 'react';
function CartItem (props) {
  return (
    <div className="list-group">
      <div className="list-group-item">
  <div className="row">
    <div className="col-md-4">{props.product.title}</div>
    <div className="col-md-4">{props.product.author}</div>
    <div className="col-md-2">{props.product.price}</div>
    <div className="col-md-2"><button className="btn-success" onClick={()=>props.delete(props.product.id)}>Delete</button></div>
</div>
</div>
</div>
  )
}
export default CartItem;
