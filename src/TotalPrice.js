import React from 'react';
function TotalPrice ({cartItemsList}){
  const cartItemsListFiltered = cartItemsList.filter(book => {
return book.inCart;
});
  let priceArray=cartItemsListFiltered.map((product)=>product.price);
  let productSum =priceArray.reduce((acc,cur) => acc+cur,0);
return(
    <div className="container">
    <div className="list-group">
      <div className="list-group-item">
  <div className="row">
  <div className="col-md-10">

  <p>Total Price:  {productSum}
  </p>
</div>
  </div>
</div>
</div>
</div>
  )
}
export default TotalPrice;
