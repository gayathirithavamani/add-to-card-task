import './App.css';
import Content from './content'
import Products from './products'
import Footer from './footer'
import Cart from './Cart'
import { useState } from 'react';




function App() {

  let spec = [
    {
      id: 1,
      brand: "Sugar",
      view: true,
      sale: false,
      price: 798,
      photo: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      brand: "Lakme",
      rate: "*****",
      view: false,
      sale: true,
      price: 600,
      photo: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      brand: "L'Oreal Paris",
      view: false,
      sale: true,
      price: 1000,
      photo: "data:image/jpeg;base64,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"
    },
    {
      id: 4,
      brand: "Faces Canada",
      rate: "*****",
      view: false,
      sale: false,
      price: 1400,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWiB7sVbYI0k5_L_FEveJIYFhME5hA-nDnIA&usqp=CAU"
    },
    {
      id: 5,
      brand: "Elle 18",
      price: 350,
      view: false,
      sale: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWgeP6jnnNfdczkTTsFDmY5ET22F5WLjwpQ&usqp=CAU"
    },
    {
      id: 6,
      brand: "Insight",
      price: 500,
      view: true,
      sale: false,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXzDY8PAplhdxAA1aen4R8QOI7apnk3MCsA&usqp=CAU"
    },
    {
      id: 7,
      brand: "Maybelline",
      price: 900,
      rate: "*****",
      view: false,
      sale: true,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPrZIY8KOZQxmSuiZ_xN5JAJ9cbnDI32N6g&usqp=CAU"
    },
    {
      id: 8,
      brand: "Night Crimson",
      price: 250,
      rate: "*****",
      view: false,
      sale: false,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfj3MfhaNuIXPzOEYoCLhz8PevvmfFC0qiJMrntA8KOXp_oALfXFkNRfe3VKhStBD6YTg&usqp=CAU"
    }
  ]

  const [items, setitems] = useState([])
  const [totals, settotal] = useState(0)

  let addcart = (item) => {
    setitems([...items, item]);
    settotal(totals + item.price);
  }

  let handleremove = (item) => {
    let indexs = items.some(obj => obj.id == item.id)
    let newcart = items.splice(indexs, 1);
    setitems([...newcart])
    settotal(totals - item.price)
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a class="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Content />
      <div className='row'>
        <div className='col-sm-12 col-md-8 col-lg-10'>
          <section class=" py-5">
            <div class="container px-4 px-lg-5 mt-5">
              <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {spec.map((data) => {
                  return <Products datas={data} buttonclick={addcart} cart={items} />
                })}
              </div>
            </div>
          </section>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-2'>
          <ol class="list-group list-group-numbered container"><br></br><br></br>
            <div className='text-center fw-bolder fs-1 '>Cart</div>
            {items.map((itemdata) => {
              return <Cart data={itemdata} handle={handleremove} />
            })}
          </ol>
          <div className='fw-bolder fs-5'>Total : $ {totals} </div>
        </div>

      </div>
      <Footer />
    </div>


  );
}

export default App;
