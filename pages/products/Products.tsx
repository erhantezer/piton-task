import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";


interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    likes: number;
}

interface Props {
    productId: number;
    productLikes: number;
    toggle: () => void;
}

const Products = ({productId}:Props) => {
    const [product, setProduct] = useState<Product[]>([])
    console.log(product)

    const url="https://assignment-api.piton.com.tr/api/v1/product/all"

const getData = async () => {

    try {
        const {data} = await axios.get("https://assignment-api.piton.com.tr/api/v1/product/all")
        setProduct(data)
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getData()
},[])

    return (
        <div>
            <Navbar/>
            <div>

            </div>
        </div>
    );
}

export default Products;