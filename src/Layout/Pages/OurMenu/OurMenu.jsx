import { useEffect, useState } from "react";
import BannerCover from "../Shared/BannerCover/BannerCover";
import './OurMenu.css'
import MenuItemsCover from "./OurMenuComponents/MenuItemsCover/MenuItemsCover";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuComponent from "../Shared/MenuComponent/MenuComponent";

// import menu banner cover image
import MenuBanner_cover_bg from "../../../assets/menu/banner3.jpg"

// import menu banner images to use as parameters
// dessert bg
import dessert_bg from '../../../assets/menu/dessert-bg.jpeg'
// pizza bg
import Pizza_bg from '../../../assets/menu/pizza-bg.jpg'
// salads bg
import Salads_bg from '../../../assets/menu/salad-bg.jpg'
// soup bg
import Soup_bg from '../../../assets/menu/soup-bg.jpg'
import { Link } from "react-router-dom";

const OurMenu = () => {
    const [allMenuData, setAllMenuData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setAllMenuData(data))
    }, [])

    const getOffersItems = allMenuData.filter(offerMenu => offerMenu.category === 'offered')
    const getDessertItems = allMenuData.filter(offerMenu => offerMenu.category === 'dessert')
    const getPizzaItems = allMenuData.filter(pizzaMenu => pizzaMenu.category === 'pizza')
    const getSaladsItems = allMenuData.filter(saladMenu => saladMenu.category === 'salad')
    const getSoupItems = allMenuData.filter(soupMenu => soupMenu.category === 'soup')

    // console.log(allMenuData)
    // console.log(getOffersItems)
    // console.log(getDessertItems)
    // console.log(getPizzaItems)
    // console.log(getSaladsItems)
    // console.log(getSoupItems)
    return (
        <div className="OurMenu_bg">
            <BannerCover cover_bg={MenuBanner_cover_bg}></BannerCover>
            <div className="Menu-sections bg-white max-w-[1320px] mx-auto relative">
                <div className="Menu-sections_before"></div>
                {/* ============================= Our Menu Offered Menu items section starts ============================= */}
                <div className="pt-[80px] pb-[50px]">
                    <SectionTitle
                        subHeading={"---Don't miss---"}
                        heading={"TODAY'S OFFER"}
                    ></SectionTitle>
                    <div className="grid grid-cols-2 px-[50px] gap-10">
                        {
                            getOffersItems.map(offerItem => (
                                <MenuComponent
                                    key={offerItem._id}
                                    item={offerItem}
                                ></MenuComponent>
                            ))
                        }
                    </div>
                    <div className="flex justify-center mt-[45px]">
                        <Link to="/our-shop">
                            <button className="btn h-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-[#1F2937] text-[#1F2937] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                        </Link>
                    </div>
                </div>
                {/* ============================= Our Menu Offered Menu items section ends ============================= */}

                {/* ================== Dessert Menu section starts =================== */}
                <div>
                    {/* dessert cover */}
                    <MenuItemsCover cover_bg={dessert_bg} coverHeading={'Dessert'}></MenuItemsCover>
                    {/* dessert menu items */}
                    <div className="pt-[80px] pb-[50px]">
                        <div className="grid grid-cols-2 px-[50px] gap-10">
                            {
                                getDessertItems.map(dessertItem => (
                                    <MenuComponent
                                        key={dessertItem._id}
                                        item={dessertItem}
                                    ></MenuComponent>
                                ))
                            }
                        </div>
                        <div className="flex justify-center mt-[45px]">
                            <Link to="/our-shop/dessert">
                                <button className="btn h-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-[#1F2937] text-[#1F2937] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ================== Dessert Menu section ends =================== */}


                {/* ================== Pizza Menu section starts =================== */}
                <div>
                    {/* Pizza cover */}
                    <MenuItemsCover cover_bg={Pizza_bg} coverHeading={'Pizza'}></MenuItemsCover>
                    {/* Pizza menu items */}
                    <div className="pt-[80px] pb-[50px]">
                        <div className="grid grid-cols-2 px-[50px] gap-10">
                            {
                                getPizzaItems.map(PizzaItem => (
                                    <MenuComponent
                                        key={PizzaItem._id}
                                        item={PizzaItem}
                                    ></MenuComponent>
                                ))
                            }
                        </div>
                        <div className="flex justify-center mt-[45px]">
                            <Link to="/our-shop/pizza">
                                <button className="btn h-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-[#1F2937] text-[#1F2937] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ================== Pizza Menu section ends =================== */}

                {/* ================== Salads Menu section starts =================== */}
                <div>
                    {/* Salads cover */}
                    <MenuItemsCover cover_bg={Salads_bg} coverHeading={'Salads'}></MenuItemsCover>
                    {/* Salads menu items */}
                    <div className="pt-[80px] pb-[50px]">
                        <div className="grid grid-cols-2 px-[50px] gap-10">
                            {
                                getSaladsItems.map(SaladsItem => (
                                    <MenuComponent
                                        key={SaladsItem._id}
                                        item={SaladsItem}
                                    ></MenuComponent>
                                ))
                            }
                        </div>
                        <div className="flex justify-center mt-[45px]">
                            <Link to="/our-shop/salad">
                                <button className="btn h-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-[#1F2937] text-[#1F2937] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ================== Salads Menu section ends =================== */}

                {/* ================== Soup Menu section starts =================== */}
                <div>
                    {/* Soup cover */}
                    <MenuItemsCover cover_bg={Soup_bg} coverHeading={'Soup'}></MenuItemsCover>
                    {/* Soup menu items */}
                    <div className="pt-[80px] pb-[50px]">
                        <div className="grid grid-cols-2 px-[50px] gap-10">
                            {
                                getSoupItems.map(SoupItem => (
                                    <MenuComponent
                                        key={SoupItem._id}
                                        item={SoupItem}
                                    ></MenuComponent>
                                ))
                            }
                        </div>
                        <div className="flex justify-center mt-[45px]">
                            <Link to="/our-shop/soup">
                                <button className="btn h-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-[#1F2937] text-[#1F2937] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* ================== Soup Menu section ends =================== */}


            </div>
        </div>
    );
};

export default OurMenu;