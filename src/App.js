import React from 'react';
import logo from './logo.svg';
import './App.css';
import CartItems from "../src/CartItems.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import CartFooter from "../src/CartFooter.js"
import TotalPrice from "../src/TotalPrice.js"

class App extends React.Component {

  state = {
    books: [],
    searchTerm:"",
    update:false

  }

  async componentDidMount() {
    const response = await fetch(`/api/books`)
    const json = await response.json()
    this.setState({books: json})

  }
handleInput=(e)=>{
this.setState({
  [e.target.name]:e.target.value,
})
}
deleteFromCart=(id)=>{console.log(id)
var url = `/api/books/cart/remove/${id}`;
console.log(url)

fetch(url, {
method: 'PATCH', // or 'PUT'

}).then(res => res.json())
.then(response =>{  console.log(response);
this.setState( prevstate=>{
return{
  books: prevstate.books.map(book=>{
    return(
      response.id===book.id ? response: book
    )
  })
}
}
)})
.catch(error => console.error('Error:', error));
this.forceUpdate();
}
 addToCart=(id)=>{
  console.log(id)
  var url = `/api/books/cart/add/${id}`;
console.log(url)

 fetch(url, {
  method: 'PATCH', // or 'PUT'

}).then(res => res.json())
.then(response =>{  console.log(response);
this.setState( prevstate=>{
  return{
    books: prevstate.books.map(book=>{
      return(
        response.id===book.id ? response: book
      )
    })
  }
}
)})
.catch(error => console.error('Error:', error));

}
  render() {


let books=[]
if(this.state.searchTerm)
  {

    const booksFiltered=this.state.books.filter((book)=>{return(book.title.includes(this.state.searchTerm) || book.author.includes(this.state.searchTerm))});
console.log(booksFiltered)
     books=booksFiltered.map((book)=>{return(
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.XAt6wGv3nImlQNzrm6iFjgHaKQ&w=76&h=105&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2")' }}></div>
          <div className="book-shelf-changer">
          <a onClick={() => this.addToCart(book.id)}></a>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    </li>)
  })
}
else{
 books=this.state.books.map((book)=>{return( <li>
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.XAt6wGv3nImlQNzrm6iFjgHaKQ&w=76&h=105&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2")' }}></div>
    <div className="book-shelf-changer">
              <a onClick={() => this.addToCart(book.id)}></a>
            </div>

    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.author}</div>
  </div>
</li>)
})}

  return (
    <div className="App">
    <div className="list-books-title">
                  <h1>Daniel's Bookstore</h1>
                </div>
                <div className="container-grid">
                <div className="container-left">
    <div className="search-books">
    <div className="search-books-bar">

      <div className="search-books-input-wrapper">

        <input type="text" placeholder="Search by title or author" name="searchTerm" onChange={this.handleInput}/>

      </div>
    </div>
    </div>
      <div className="list-books">
           <div className="list-books-content">
             <div>
               <div className="bookshelf">

                 <div className="bookshelf-books">
                   <ol className="books-grid">
                    {books}
                   </ol>
                 </div>
               </div>
             </div>
           </div>


         </div>
         </div>

    <div className="container-right">

    <CartItems cartItemsList={this.state.books} delete={this.deleteFromCart}/>
    <TotalPrice cartItemsList={this.state.books}/>
    </div>
    </div>
      </div>
  );
}
}
export default App;
