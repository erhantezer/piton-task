import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


interface Props {
    productId?: number;
    productLikes?: boolean;
    toggle?: () => void;
    toggleProduct?: () => void;
}

const Like = ({ productId, productLikes, toggle = () => { }, toggleProduct = () => { }, }: Props) => {
    const token = localStorage.getItem("user")

    const productLike = async () => {
        console.log(productLikes);
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
                .catch((err) => {
                    console.log(err.response.data);
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
                .catch((err) => {
                    console.log(err.response.data);
                });
        }
        toggleProduct();
        toggle();
    };
    return (
        <div>
            <button onClick={() => productLike()} className="flex ml-auto">
                {productLikes ? (
                    <AiFillHeart size={26} color="red" />
                ) : (
                    <AiOutlineHeart size={26} color="red" />
                )}
            </button>
        </div>
    );
}

export default Like;