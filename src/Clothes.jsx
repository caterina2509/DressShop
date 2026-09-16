function Clothes({any}){
    return (
        <div className="products">
           {any.map((element => {
            const {id, name, searchTerm, price, image}=element;
            return (
                <div key={id} className="product-card">
                    <img src={image} alt="imagination" width="400" height="450"/>
                   

                    <div className="product-info">
                    <p>{id}</p>
                      <p>{name}</p>
                      
                         <p>${price}</p>
                         </div>
                          </div>

                
            )
           }))}

        </div>
    )
}
export default Clothes;