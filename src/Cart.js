import React from 'react'

const Cart = (props) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto text-center ">
        <div class="fw-bold">{props.data.brand }</div>
                {props.data.price}
             
              <button onClick={()=>{props.handle(props.data)}} class="btn badge bg-danger rounded-pill ">X</button>
               </div>
            </li>
  )
}

export default Cart