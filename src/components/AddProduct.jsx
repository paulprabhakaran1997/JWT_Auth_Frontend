import React, { useEffect, useState } from 'react'
import apiInstance from '../baseApi/apiInstance';
import { apiGetProducts } from '../api/apiGetProducts';
import { apiDeleteProducts } from '../api/apiDeleteProducts';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [pid , setPid] = useState('0');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        return (async () => {
            const response = await apiGetProducts();
            console.log("Prod Response = ", response);
            setProducts(response.data.data)
        })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiInstance.post('/api/addProduct', { id:pid, name, price });
            if (response) {
                console.log("Repsonse = ", (response.data));
                if(pid === '0'){
                    setProducts([...products , response.data.data])
                }else{
                    setProducts(products.map(obj =>{
                        if(obj._id === pid){
                            return response.data.data
                        }else{
                            return obj
                        }
                    }))
                }
                handleReset()
            }
        } catch (error) {
            console.log("ERR = ", error)
        }

    }

    const handleEdit = (id) =>{
        setName(products.find(data => data._id === id).name);
        setPrice(products.find(data => data._id === id).price);
        setPid(id)
    }

    const handleDelete = async (id) =>{
        const response = await apiDeleteProducts(id);
        console.log(("DEl REsponse = ",response));
        if(response && response === 200){
            setProducts(products.filter(obj => obj._id !== id))
        }
    };

    const handleReset = () =>{
        setName('');
        setPrice('');
        setPid('0');
    }

    return (
        <div>
            <h1>AddProduct</h1>
            <button onClick={handleReset}>New Product</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder='price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <button type='submit'>Add Product</button>
            </form>


            {products.length ? (
                <table style={{margin:"0 auto"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data) => (
                            <tr key={data._id}>
                                <td>{data._id}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>
                                    <button onClick={() => handleEdit(data._id)}>Edit</button>
                                    <button onClick={() => handleDelete(data._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No Products</p>
            )}



        </div>
    )
}

export default AddProduct