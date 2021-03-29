import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {

    const handelAddProduct = () =>{

        fetch('https://rocky-forest-15689.herokuapp.com/addProduct', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
        
    }
    return (
        <div>
            <form action="">
                <p><span>name : <input type="text"></input></span></p>
                <p><span>price:<input type="text"></input></span></p>
                <p><span>quantity:<input type="text"></input></span></p>
                <p><span>image:<input type="file"></input></span></p>

            <button onClick={handelAddProduct}>Add Product</button>
            </form>
           
        </div>
    );
};

export default Inventory;