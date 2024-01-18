import { useParams } from "react-router";

const Product = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <h1>Product will be come soon</h1>
            <h1>{id}</h1>
        </div>
    );
};

export default Product;