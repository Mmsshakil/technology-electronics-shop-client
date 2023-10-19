import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const product = useLoaderData();
    const { _id, photo, name, brand, type, price, descrip, rating } = product;

    console.log(_id);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center my-5 gap-5">
            <img src={photo} alt="" />
            <div className="">
                <div className=" flex flex-col gap-2">
                    <div>
                        <h2><span className="text-emerald-600">Name:</span> {name}</h2>
                    </div>
                    <div>
                        <h2><span className="text-emerald-600">Brand:</span> {brand}</h2>
                    </div>
                    <div>
                        <h2><span className="text-emerald-600">Type:</span> {type}</h2>
                    </div>
                    <div>
                        <h2><span className="text-emerald-600">Descriptions:</span> {descrip}</h2>
                    </div>
                    <div>
                        <h2><span className="text-emerald-600">Price:</span> ${price}</h2>
                    </div>

                </div>
                <Link className="">
                    <button className="btn btn-outline btn-accent mt-4">Add to Cart</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;