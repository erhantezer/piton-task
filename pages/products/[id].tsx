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
    const [product, setProduct] = useState<IData>();
    

    useEffect(() => {
        if (!id) return;
        getData();
    }, [id]);

    if (!id) return;
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
            .catch((error) => {
                console.log(error);
            });
    };

    if (!product) {
        return null;
    }
   

    return (

        <div>
            <Navbar />
            <section className="text-gray-700 body-font  overflow-hidden bg-white">
                <div className="container px-5 py-20 mx-auto">

                    <div className="lg:w-4/5 p-4 bg-blue mx-auto" >
                        <div className="flex p-2 flex-wrap border rounded-xl border-gray-300">

                        <div className="lg:w-2/5">
                        <picture>
                        <img
                            alt="ecommerce"
                            className=" w-full  p-4 object-contain h-[300px] object-center rounded "
                            src={`https://assignment-api.piton.com.tr${product?.image}`}
                        />
                        </picture>
                        </div>
                        <div className="lg:w-3/5 w-full lg:pl-10 lg:py-6  lg:mt-0 flex flex-col gap-y-2">
                            <h2 className="pr-4 text-sm title-font text-gray-500 tracking-widest">
                                <Like
                                    productId={product?.id}
                                    productLikes={product?.likes?.length > 0}
                                    toggleProduct={getData}
                                />
                            </h2>
                            <h1 className="text-gray-900 text-xl pl-4 title-font font-semibold">
                                {product?.name}

                            </h1>

                            <p className="indent-3 text-justify p-4">{product?.description}</p>

                            <div className="flex justify-end p-4 ">
                                <span className=" bg-blue-500 p-2  px-8 rounded-l-full text-white title-font font-medium text-2xl">
                                    {product?.price} ₺
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default ProductDetail