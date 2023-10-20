import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import ServiceCard from "./ServiceCard";
import BrandSlider from "../shared/Header/BrandSlider";
import Footer from "../shared/Footer/Footer";


const Home = () => {

    const service = useLoaderData();
    // console.log(service);

    return (
        <div>

            <Header></Header>
            <BrandSlider></BrandSlider>

               
                {/* brands */}
                <div className=" flex flex-col items-center">
                    <h2 className="text-2xl font-bold font-nunito text-center my-5 text-white">Our Brands</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            service?.map(aService => <ServiceCard key={aService.id} service={aService}></ServiceCard>)
                        }
                    </div>
                </div>
            
            {/* extra part */}
            <div className=" border rounded-md mx-auto py-14 mt-10">
                <h2 className="text-center text-xl font-semibold text-white">Do you have any <span className="text-emerald-500 font-bold">Question</span> ?</h2>
                <form className="w-2/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Name</span>
                        </label>
                        <input type="text" name="email" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter Your Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">What is your Question ?</span>
                        </label>
                        <textarea className="p-5 bg-transparent border rounded-lg"
                            name="postContent"
                            placeholder="Type here . . . . "
                            rows={3}
                            cols={40}
                        />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;