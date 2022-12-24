import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Link from "next/link";
import Like from "../components/Like";
import { useRouter } from "next/router";


interface IProduct {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    likes: number;
}

interface IProps {
    productId: number;
    productLikes: number;
    toggle: () => void;
}

export default function Products({ productId }: IProps) {
    const [products, setProducts] = useState<IProduct[]>([]);
    const router = useRouter();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios
            .get("https://assignment-api.piton.com.tr/api/v1/product/all", {
                headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                    "access-token": `${localStorage.getItem("user")}`,
                },
            })
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err.response.data);
                router.push("/login")
            });
            
    };





    return (
        <div>
            <Navbar />
            <div className="flex justify-center gap-x-10 flex-wrap ">
                {products.map((product, index) => (
                    <div key={index} className="text-center">
                        <div className="max-w-xs  border rounded-lg shadow-md mt-16">
                            <Like
                                productId={product.id}
                                productLikes={product.likes === 1}
                                toggle={getData}
                            />
                            <div className="flex flex-col p-12 text-center h-96 w-80">
                                <Link href={{pathname:`/products/[id]`,query:{id:product.id}}}>
                                    <picture>
                                    <img
                                        src={`https://assignment-api.piton.com.tr${product.image}`}
                                        alt={`${product.name}`}
                                        className="object-contain object-center w-64 rounded-t-md h-40"
                                    />
                                    </picture>
                                    <div className="space-y-2 mt-4  border-b-4">
                                        <p className="whitespace-pre-line text-lg  font-medium tracking-wide truncate p-1">
                                            {product.name}
                                        </p>
                                    </div>
                                </Link>

                            </div>
                            <div className="text-center">
                                <p className="text-blue-700 text-lg mb-2  font-semibold">
                                    {product.price.toFixed(2)} ₺
                                </p>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
}

