import React from 'react';
import CartItem from "../src/CartItem.js"
function CartItems(props){
  const cartItemsListFiltered = props.cartItemsList.filter(book => {
return book.inCart;
});
let productList =cartItemsListFiltered.map((product,i) =>
  <CartItem key = {product.id} product={product} delete={props.delete}/>)

return <div className="container">
  <h1>Cart Items</h1>
  <div className="list-group">
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-4">Book</div>
        <div className="col-md-4">Author</div>
        <div className="col-md-2">Price</div>
      </div>
    </div>
    {productList}
  </div>
</div>

}
export default CartItems;
