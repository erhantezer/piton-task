import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Like from "../components/Like";


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

const Products = ({ productId }: Props) => {
    const [products, setProducts] = useState<Product[]>([])
    
//     const url = "https://assignment-api.piton.com.tr/api/v1/product/all"

//     const accesstoken =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaGFuQGdtYWlsLmNvbSIsImlhdCI6MTY3MTcwNjk2NiwiZXhwIjoxNjk3NjI2OTY2fQ.6UPZW-cxoK1Sua7NNA_R_FERUeIe9MHaeHz0qbZH7h8";
//     const config = { headers: { Authorization: `Bearer ${accesstoken}` } };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(url,config);
//         setProducts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, []);

  const get_product = () => {
    const api_Url =
      "https://assignment-api.piton.com.tr/api/v1/product/all";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaGFuQGdtYWlsLmNvbSIsImlhdCI6MTY3MTcwNjk2NiwiZXhwIjoxNjk3NjI2OTY2fQ.6UPZW-cxoK1Sua7NNA_R_FERUeIe9MHaeHz0qbZH7h8";
    const config = { headers: { Authorization: `Bearer ${token}` }, 

};
    /*take only token and save in token variable*/
    axios
      .get<Product[]>(api_Url, config)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
      
  };
  useEffect(() => {
    get_product();
  }, []);




    return (
        <div>
            <Navbar />
                {products ? (<h1>Products</h1>):(<h1>Loading</h1>) }
            <div className="flex justify-center gap-x-8 flex-wrap">
                
                {/* {product.map((item, index) => (
                    <div key={index}>
                        <div className="max-w-xs rounded-md shadow-md mt-16">
                            <div className="flex flex-col justify-between p-6 space-y-8  ">
                                <Link href={`/products/${item.id}`}>
                                    <Image
                                        src={`https://assignment-api.piton.com.tr${item.image}`}
                                        alt={`${item.name}`}
                                        className="object-contain object-center w-full rounded-t-md h-72"
                                    />

                                    <div className="space-y-2 mt-4">
                                        <h2 className="text-xl font-semibold tracking-wide truncate">
                                            {item.name}
                                        </h2>
                                        <p className="truncate">{item.description}</p>
                                    </div>
                                </Link>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-semibold text-center">
                                        {item.price} TL
                                    </h2>

                                    <Like 
                                        productId={item.id}
                                        productLikes={item.likes === 1}
                                        toggle={getData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default Products;