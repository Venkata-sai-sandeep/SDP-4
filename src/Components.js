import React from "react";

class ProductTile extends React.Component { 
    render() { 
        return ( 
            <div class="card"> 
                <div class="card-image"> 
                    <figure class="image is-4by3"> 
                        <img src={this.props.product.image} alt="Placeholder image"></img> 
                    </figure> 
                </div> 
                <div class="card-content"> 
                    <p class="title product-title">{this.props.product.name}</p> 
 
                    <div class="content"> 
                        {this.props.product.short_description} 
                        <br></br> 
                    </div> 
                    <a class="button is-primary" href={"product.html?id=" + this.props.product.id.toString()} target="_blank"> 
                        <strong>More Details</strong> 
                    </a> 
                </div> 
            </div> 
        ) 
    }
}

class ProductCatalog extends React.Component { 
    renderTile = (current_item) => { 
        return <ProductTile product={current_item}></ProductTile>; 
    } 
 
    render() { 
        let tiles = []; 
        for (let i = 0; i < this.props.products.length; i++) { 
            const current_item = this.props.products[i]; 
            tiles.push(this.renderTile(current_item)); 
        } 
        return tiles; 
    } 
}


export default ProductCatalog;