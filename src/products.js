import React from 'react'

const Products = (props) => {
    return (
        <div class="col mb-5">
            <div class="col-lg-10 card h-100">
                <div class="badge bg-light text-dark fw-bolder position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{props.datas.sale ? "Sale" : ""}</div>
                <img class="card-img-top" src={props.datas.photo} alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">{props.datas.brand}<br />
                            <span className='text-warning fw-bold fs-1'>
                                {props.datas.rate}</span></h5>
                        ${props.datas.price}
                    </div>
                </div><br /><br />
                <br />
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <button disabled={props.cart.some(obj => obj.id === props.datas.id)} onClick={!props.datas.view ? () => { props.buttonclick(props.datas) } : ""} className="text-center btn btn-outline-dark mb-2 position-absolute bottom-0 start-50 translate-middle-x">{props.datas.view ? "View Options" : "Add To Cart "} </button>
                </div>
            </div>
        </div>
    )
}

export default Products;