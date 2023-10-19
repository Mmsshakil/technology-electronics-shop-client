
import swal from 'sweetalert';

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const descrip = form.descrip.value;
        const rating = form.rating.value;

        if(rating > 10){
            swal("Error!", "Rating must be less than 10", "error");
            return;
        }

        const newProduct = { photo, name, brand, type, price, descrip, rating };
        console.log(newProduct);

        // send the data to the server
        fetch('http://localhost:3000/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Success!", "New Product Added", "success");
                }
            })


    }

    return (
        <div>

            <div className=" w-full md:w-2/3 lg:w-1/2 mx-auto p-10 border mb-14 ">
                <h2 className="text-xl font-semibold text-center text-white">Add New Product</h2>

                <form onSubmit={handleAddProduct}>
                    <div className="flex flex-col gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter product image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter product name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brand" placeholder="Enter brand name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <input type="text" name="type" placeholder="Enter product type" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter product price" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Short description</span>
                            </label>
                            <input type="text" name="descrip" placeholder="Enter short description" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Rating out of 10</span>
                            </label>
                            <input type="text" name="rating" placeholder="Enter product rating" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default AddProduct;