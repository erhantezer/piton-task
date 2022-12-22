import { useRouter } from "next/router";
import store from "../../store/store";

interface Item {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    likes: Array<any>;
  }

const ProductDetail = () => {
    const router = useRouter();
    const {productId} = router.query

    return (
        <div>
            Enter
        </div>
    );
}

export default ProductDetail;