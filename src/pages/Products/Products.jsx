import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {

    const products = useLoaderData();

    return (
        <div className="flex flex-col justify-center items-center">

            <h1>product: {products.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    products.map(product => <ProductsCard 
                        key={product._id}
                        product={product}
                        ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;