import { useContext } from "react";
import { ProviderContext } from "../../../../Provider/Provider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";

const CardComponent = ({ CardDetails }) => {
    const { user } = useContext(ProviderContext)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()

    const handleAddToCart = (CardDetails) => {
        const { category, image, name, price, recipe, _id } = CardDetails
        // console.log('onclik is working', category, image)
        if (user && user.email) {
            //Set Card to the database
            const cartItem = {
                cardId: _id,
                userEmail: user.email,
                name: name,
                category: category,
                price: price,
                image: image,
                recipe: recipe,
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Added to cart list",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch data to update the cart length
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "You won't be able to add this card to the cart unless you login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login to proceed",
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page by navigate
                    navigate('/login')
                }
            });
        }
    }
    // console.log(CardDetails, 'yash')
    return (
        <div>
            <div className="card-normal w-[424px] bg-[#F3F3F3] shadow-xl hover:scale-105 transition-all ease-linear">
                <figure className="relative">
                    <img className="w-full min-h-[300px]" src={CardDetails.image} alt="Shoes" />
                    <p className="bg-[#1F2937] text-white inline-block px-[23px] py-[11px] absolute top-5 right-5">${CardDetails.price}</p>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#151515] text-[24px] font-semibold flex justify-center">{CardDetails.name}</h2>
                    <p className="text-[#737373]">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-center mt-[45px]">
                        <button onClick={() => handleAddToCart(CardDetails)} className="btn h-full bg-[#E8E8E8] border-t-0 border-x-0 border-b-[3px] border-[#BB8506] text-[#BB8506] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;