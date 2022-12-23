import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Like from "../components/Like";

interface Data {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    likes: Array<any>;
}

interface Props {
    productId: number;
    toggleProduct: () => void;
}
const ProductDetail = ({ productId }: Props) => {
    const router = useRouter();
    const { proId } = router.query;
    const [product, setProduct] = useState<Data>();
    console.log(product?.likes);

    useEffect(() => {
        if (!proId) return;
        const getData = async () => {
          await axios
            .get(`https://assignment-api.piton.com.tr/api/v1/product/get/${proId}`, {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "access-token": `${localStorage.getItem("user")}`,
              },
            })
            .then((res) => {
              setProduct(res.data.product);
              console.log(res);
            })
            .catch((err) => {
              console.log(err.response.data);
              router.push("/");
            });
        };
        getData();
      }, [proId]);
    
      if (!proId) return;
      const getData = async () => {
        await axios
          .get(`https://assignment-api.piton.com.tr/api/v1/product/get/${proId}`, {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              "access-token": `${localStorage.getItem("user")}`,
            },
          })
          .then((res) => {
            setProduct(res.data.product);
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      };
    
      if (!product) {
        return null;
      }
    

    return (
        <div>
            <Navbar />
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5  mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full  object-contain h-[400px] object-center rounded border border-gray-200"
                            src={`https://assignment-api.piton.com.tr${product.image}`}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col  gap-y-4">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {product.name}
                            </h1>

                            <p className="leading-relaxed">{product.description}</p>

                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    {product.price} TL
                                </span>

                                <Like
                                    productId={product.id}
                                    productLikes={product.likes.length > 0}
                                    toggleProduct={getData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ProductDetail;