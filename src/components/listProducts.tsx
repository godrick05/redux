import React from "react";
import { useState } from "react";

const ListProducts = () => {

    const [products, setProducts] = useState([    
        {
            id: 1,
            title: "Curso de React Native",
            value: 2500,
            modules: [
                {id: 1, title: "modulo 1"},
                {id: 2, title: "modulo 2"},
                {id: 3, title: "modulo 3"},
                {id: 4, title: "modulo 4"}
            ]
        },
        {
            id: 2,
            title: "Curso de ReactJS",
            value: 1500,
            modules: [
                {id: 1, title: "modulo 1"},
                {id: 2, title: "modulo 2"},
                {id: 3, title: "modulo 3"}
            ]
        },
        {
            id: 3,
            title: "Curso de Javascript",
            value: 500,
            modules: [
                {id: 1, title: "modulo 1"},
                {id: 2, title: "modulo 2"},
                {id: 3, title: "modulo 3"},
                {id: 4, title: "modulo 4"},
                {id: 5, title: "modulo 5"}
            ]
        }
    ])

    return (
        <div>
            <h2>Lista de Produtos</h2>


            {products.map(products => (
                <div key={products.id}>
                    <h4>{products.title}</h4>
                    <p> Valor: R$ {products.value},00</p>
                    {products.modules.map(products => (
                        <li>{products.id} - {products.title}</li>
                    ))}
                    <button>Selecionar Curso</button>
                </div>
            ))}

        </div>
    )
}

export default ListProducts;