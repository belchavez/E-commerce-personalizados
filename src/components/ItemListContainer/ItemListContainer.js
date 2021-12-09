import ItemCount from "../ItemCount/ItemCount"
const ItemListContainer = () =>{
    const dataproducts =[

        {
            name: "Gorra volver al futuro",
            price: 1200,
            stock:10
        },
        {
            name: "Remera Dark",
            price: 1500,
            stock:10

        },
        {
            name: "Remera Dark",
            price: 1500,
            stock: 10

        },
        {
            name: "Remera Dark",
            price: 1500,
            stock: 10

        },
    ]
    return(
        <>
        <h2>Ultimas Unidades</h2>
        <ItemCount stock ={10}/>
        <ItemCount stock ={5}/>
        <ItemCount stock ={3}/>
        <ItemCount stock ={2}/>
        </>

    )
   
}  


export default ItemListContainer;