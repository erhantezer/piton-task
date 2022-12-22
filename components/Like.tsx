
interface Props {
    productId?: number;
    productLikes?: boolean;
    toggle?: () => void;
    toggleProduct?: () => void;
}

const Like = ({
    productId,
    productLikes,
    toggle = () => {},
    toggleProduct = () => {},
}: Props) => {
    const token = localStorage.getItem("user")
    return (
        <div>
            Enter
        </div>
    );
}

export default Like;