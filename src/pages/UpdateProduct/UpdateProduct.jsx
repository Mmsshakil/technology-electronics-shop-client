import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {

    const product = useLoaderData();

    const { _id, photo, name, brand, type, price, descrip, rating } = product;

    console.log(_id);


    return (
        <div>
            <h2>Update product: {name}</h2>
        </div>
    );
};

export default UpdateProduct;