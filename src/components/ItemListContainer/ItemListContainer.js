import Products from "../products/products"
const ItemListContainer = () =>{
    const dataproducts =[

        {
            name: "Gorra volver al futuro",
            price: 1200,
            stock: 5,
        },
        {
            name: "Remera Dark",
            price: 1500,
            stock: 2,

        }
    ]
    return(
        <>
            <h2> Ultimas unidades </h2>
            {dataproducts.map((product) =>{
                return(
                    <Products name= {product.name} price= {product.price} stock={product.stock}/>

                )
            })}
        </>        
    )
}  


export default ItemListContainer;