import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";



interface IProps {
    productId?: number | string;
    productLikes?: boolean;
    toggle?: () => void;
    toggleProduct?: () => void;
}
export default function LikeButton({
    productId,
    productLikes,
    toggle = () => { },
    toggleProduct = () => { },
}: IProps) {
    const token =localStorage.getItem("user") || ""

    const postLike = async () => {
        
        if (!productLikes) {
            await axios
                .post(
                    "https://assignment-api.piton.com.tr/api/v1/product/like",
                    { productId: productId },
                    {
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "access-token": `${token}`,
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            await axios
                .post(
                    "https://assignment-api.piton.com.tr/api/v1/product/unlike",
                    { productId: productId },
                    {
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "access-token": `${token}`,
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        toggleProduct();
        toggle();
    };

    return (
        <>
            <button onClick={() => postLike()} className="flex ml-auto">
                {productLikes ? (
                    <AiFillHeart size={28} color="red" />
                ) : (
                    <AiOutlineHeart size={28} color="red" />
                )}
            </button>
        </>
    );
}
