import { Link } from "react-router-dom";
import 'aos/dist/aos.css';


const ServiceCard = ({ service }) => {

   

    const { img, title, details, id, price } = service;

    return (
        <div  className="card card-compact w-96 bg-base-100 shadow-xl rounded-md mt-5 border border-b-gray-700">
            <Link to={`/service/${id}`} className=" font-semibold">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className=" text-center text-xl font-bold text-white my-4">
                <h2 >{title}</h2>
            </div>
            </Link>
        </div>
    );
};

export default ServiceCard;