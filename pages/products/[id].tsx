import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Like from "../../components/Like";

interface IData {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    likes: Array<any>;
}

interface IProps {
    productId: number | string;
    productLikes: boolean;
    toggleProduct: () => Promise<void>;
}
const ProductDetail = ({ productId }: IProps) => {
    const router = useRouter();
    const { id } = router.query;
    console.log(router.query)
    const [product, setProduct] = useState<IData>();
    console.log(id);

    useEffect(() => {
        // if (!id) return;
        const getData = async () => {
            await axios
                .get(`https://assignment-api.piton.com.tr/api/v1/product/get/${id}`, {
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
                    // router.push("/");
                });
        };
        getData();
    }, [id]);

    // if (!id) return;
    const getData = async () => {
        await axios
            .get(`https://assignment-api.piton.com.tr/api/v1/product/get/${id}`, {
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

    // if (!product) {
    //     return null;
    // }
    // console.log(product.id)

    return (

        <div>
            <Navbar />
            <section className="text-gray-700 body-font  overflow-hidden bg-white">
                <div className="container px-5 py-20 mx-auto">

                    <div className="lg:w-4/5 p-4  mx-auto flex flex-wrap border rounded-xl border-gray-300">

                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full p-4  object-contain h-[300px] object-center rounded "
                            src={`https://assignment-api.piton.com.tr${product?.image}`}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6  lg:mt-0 flex flex-col gap-y-2">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                <Like
                                    productId={product?.id}
                                    productLikes={product?.likes?.length > 0}
                                    toggleProduct={getData}
                                />
                            </h2>
                            <h1 className="text-gray-900 text-xl title-font font-medium ">
                                {product?.name}

                            </h1>

                            <p className="">{product?.description}</p>

                            <div className="flex justify-end">
                                <span className=" bg-blue-500 p-1 rounded-l-full text-white title-font font-medium text-2xl">
                                    {product?.price} TL
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ProductDetail