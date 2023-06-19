import Header from './components/Header';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { useSelector, useDispatch } from "react-redux";
import { initProducts } from './store/productsSlice';
import axios from "axios";
import { useEffect, useState } from 'react';
export default function Main(){
    const url = `http://localhost:8080/api/phones`;
    const products = useSelector((state) => 
    {
        return state.productsValue.products;
    }); 
    const [error, setError] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(url).then(response => dispatch(initProducts(response.data))).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              setError(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    }, [])
   
    return (
        <>
            <Header />
            <Nav />
            <ProductList products={[...products]} error={error}/>
            <Footer />
        </>
    );
}