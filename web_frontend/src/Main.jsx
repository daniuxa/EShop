import Header from './components/Header';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { useSelector, useDispatch } from "react-redux";
import { initProducts } from './store/productsSlice';
import axios from "axios";
import { useEffect } from 'react';
export default function Main(){
    const url = `http://localhost:8080/api/phones`;
    const products = useSelector((state) => 
    {
        return state.productsValue.products;
    }); 
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(url).then(response => dispatch(initProducts(response.data)) )
    }, [])
    // [
    //     {
    //         "id": 1,
    //         "name": "Iphone 13 Starlight",
    //         "price": 1000,
    //         "photoLink": "https://ik.imagekit.io/Salivon/iphone-13-starlight-select-2021.png?updatedAt=1680173452417",
    //         "link": "https://www.apple.com/uk/"
    //       },
    //       {
    //         "id": 2,
    //         "name": "Iphone 13 Pro Max Graphite",
    //         "price": 1000,
    //         "photoLink": "https://ik.imagekit.io/Salivon/iphone-13-pro-max-graphite-select_5.png?updatedAt=1680173452418",
    //         "link": "https://www.apple.com/uk/"
    //       },
    //       {
    //         "id": 3,
    //         "name": "Iphone 12 Red",
    //         "price": 1000,
    //         "photoLink": "https://ik.imagekit.io/Salivon/iphone-12-red_1_.jpeg?updatedAt=1680173452357",
    //         "link": "https://www.apple.com/uk/"
    //       },
    //       {
    //         "id": 4,
    //         "name": "Iphone 14 Midnight",
    //         "price": 1000,
    //         "photoLink": "https://ik.imagekit.io/Salivon/iphone-14-finish-select-202209-6-1inch-midnight.png?updatedAt=1680173452344",
    //         "link": "https://www.apple.com/uk/"
    //       },
    //       {
    //         "id": 5,
    //         "name": "Iphone 14 Pro Max Gold",
    //         "price": 1000,
    //         "photoLink": "https://ik.imagekit.io/Salivon/14pro-promax-gold-1_2.jpeg?updatedAt=1680173452309",
    //         "link": "https://www.apple.com/uk/"
    //       },
    //       {
    //         "id": 6,
    //         "name": "Iphone 14 Pro Max Purple",
    //         "price": 1000,
    //         "photoLink": "https://ik.imagekit.io/Salivon/14pro-promax-purple-1_5.jpeg?updatedAt=1680173452314",
    //         "link": "https://www.apple.com/uk/"
    //       },
    //       {
    //         "id": 7,
    //         "name": "Iphone 13 Blue",
    //         "price": 1000,
    //         "photoLink": "https://ik.imagekit.io/Salivon/iphone-13-blue-select-2021.png?updatedAt=1680173452308",
    //         "link": "https://www.apple.com/uk/"
    //       },
    //       {
    //         "id": 8,
    //         "name": "Iphone 11 Black",
    //         "price": 1000,
    //         "photoLink": "https://ik.imagekit.io/Salivon/iphone11-black-select1-2019_2_3.jpeg?updatedAt=1680173452241",
    //         "link": "https://www.apple.com/uk/"
    //       }
    // ]
    return (
        <>
            <Header />
            <Nav />
            <ProductList products={[...products]}/>
            <Footer />
        </>
    );
}