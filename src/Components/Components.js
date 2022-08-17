import React from "react"
class ProductTile extends React.Component { 
    render() { 
        return ( 
            <div class="card"> 
                <div class="card-image"> 
                    <figure class="image is-4by3"> 
                        <img src='./WIN_20220317_15_09_35_Pro.jpg' alt="Placeholder image"></img> 
                    </figure> 
                </div> 
                <div class="card-content"> 
                    <p class="title product-title">MKX</p> 
 
                    <div class="content"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. 
                        <br></br> 
                    </div> 
                    <a class="button is-primary" href="product.html" target="_blank"> 
                        <strong>More Details</strong> 
                    </a> 
                </div> 
            </div> 
        ) 
    } 
}

export default ProductTile;