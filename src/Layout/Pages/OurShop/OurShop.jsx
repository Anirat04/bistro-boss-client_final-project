import BannerCover from "../Shared/BannerCover/BannerCover";
import ShopBanner_cover from "../../../assets/shop/banner2.jpg"
import './OurShop.css'
// import react tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OurShop = () => {
    const catagories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = catagories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menuCardData, setMenuCardData] = useState([])
    console.log(category)
    console.log(initialIndex)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setMenuCardData(data))
    }, [])

    const getSaladsItems = menuCardData.filter(saladMenu => saladMenu.category === 'salad')
    const getPizzaItems = menuCardData.filter(pizzaMenu => pizzaMenu.category === 'pizza')
    const getSoupItems = menuCardData.filter(soupMenu => soupMenu.category === 'soup')
    const getDessertItems = menuCardData.filter(offerMenu => offerMenu.category === 'dessert')
    const getDrinkItems = menuCardData.filter(offerMenu => offerMenu.category === 'drinks')

    // console.log(menuCardData)
    // console.log(getSaladsItems)
    // console.log(getPizzaItems)
    // console.log(getSoupItems)
    // console.log(getDessertItems)
    // console.log(getDrinkItems)

    return (
        <>
            <div className="mb-[130px]">
                <BannerCover cover_bg={ShopBanner_cover}></BannerCover>
            </div>
            <div className="relative">
                <div className="card-sections_before">
                    <div className="max-w-[1330px] mx-auto mb-[130px]">
                        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                            <TabList className="flex justify-center text-[24px] font-bold uppercase mb-[48px]">
                                <Tab>Salad</Tab>
                                <Tab>Pizza</Tab>
                                <Tab>soups</Tab>
                                <Tab>desserts</Tab>
                                <Tab>drinks</Tab>
                            </TabList>
                            {/* ===================== Salad Tab Starts ===================== */}
                            <TabPanel>
                                <div className="grid grid-cols-3 gap-6 justify-between">
                                    {
                                        getSaladsItems.map(Salad => (
                                            <div key={Salad._id} className="card-normal w-[424px] bg-[#F3F3F3] shadow-xl hover:scale-105 transition-all ease-linear">
                                                <figure className="relative">
                                                    <img className="w-full min-h-[300px]" src={Salad.image} alt="Shoes" />
                                                    <p className="bg-[#1F2937] text-white inline-block px-[23px] py-[11px] absolute top-5 right-5">${Salad.price}</p>
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title text-[#151515] text-[24px] font-semibold flex justify-center">{Salad.name}</h2>
                                                    <p className="text-[#737373]">If a dog chews shoes whose shoes does he choose?</p>
                                                    <div className="flex justify-center mt-[45px]">
                                                        <button className="btn h-full bg-[#E8E8E8] border-t-0 border-x-0 border-b-[3px] border-[#BB8506] text-[#BB8506] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                            {/* ===================== Salad Tab ends ===================== */}


                            {/* ===================== Pizza Tab Starts ===================== */}
                            <TabPanel>
                                <div className="grid grid-cols-3 gap-6 justify-between">
                                    {
                                        getPizzaItems.map(Pizza => (
                                            <div key={Pizza._id} className="card-normal w-[424px] bg-[#F3F3F3] shadow-xl hover:scale-105 transition-all ease-linear">
                                                <figure className="relative">
                                                    <img className="w-full min-h-[300px]" src={Pizza.image} alt="Shoes" />
                                                    <p className="bg-[#1F2937] text-white inline-block px-[23px] py-[11px] absolute top-5 right-5">${Pizza.price}</p>
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title text-[#151515] text-[24px] font-semibold flex justify-center">{Pizza.name}</h2>
                                                    <p className="text-[#737373]">If a dog chews shoes whose shoes does he choose?</p>
                                                    <div className="flex justify-center mt-[45px]">
                                                        <button className="btn h-full bg-[#E8E8E8] border-t-0 border-x-0 border-b-[3px] border-[#BB8506] text-[#BB8506] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                            {/* ===================== Pizza Tab ends ===================== */}

                            {/* ===================== Soup Tab Starts ===================== */}
                            <TabPanel>
                                <div className="grid grid-cols-3 gap-6 justify-between">
                                    {
                                        getSoupItems.map(Soup => (
                                            <div key={Soup._id} className="card-normal w-[424px] bg-[#F3F3F3] shadow-xl hover:scale-105 transition-all ease-linear">
                                                <figure className="relative">
                                                    <img className="w-full min-h-[300px]" src={Soup.image} alt="Shoes" />
                                                    <p className="bg-[#1F2937] text-white inline-block px-[23px] py-[11px] absolute top-5 right-5">${Soup.price}</p>
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title text-[#151515] text-[24px] font-semibold flex justify-center">{Soup.name}</h2>
                                                    <p className="text-[#737373]">If a dog chews shoes whose shoes does he choose?</p>
                                                    <div className="flex justify-center mt-[45px]">
                                                        <button className="btn h-full bg-[#E8E8E8] border-t-0 border-x-0 border-b-[3px] border-[#BB8506] text-[#BB8506] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                            {/* ===================== Soup Tab ends ===================== */}

                            {/* ===================== Dessert Tab Starts ===================== */}
                            <TabPanel>
                                <div className="grid grid-cols-3 gap-6 justify-between">
                                    {
                                        getDessertItems.map(Dessert => (
                                            <div key={Dessert._id} className="card-normal w-[424px] bg-[#F3F3F3] shadow-xl hover:scale-105 transition-all ease-linear">
                                                <figure className="relative">
                                                    <img className="w-full min-h-[300px]" src={Dessert.image} alt="Shoes" />
                                                    <p className="bg-[#1F2937] text-white inline-block px-[23px] py-[11px] absolute top-5 right-5">${Dessert.price}</p>
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title text-[#151515] text-[24px] font-semibold flex justify-center">{Dessert.name}</h2>
                                                    <p className="text-[#737373]">If a dog chews shoes whose shoes does he choose?</p>
                                                    <div className="flex justify-center mt-[45px]">
                                                        <button className="btn h-full bg-[#E8E8E8] border-t-0 border-x-0 border-b-[3px] border-[#BB8506] text-[#BB8506] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                            {/* ===================== Dessert Tab ends ===================== */}

                            {/* ===================== Drink Tab Starts ===================== */}
                            <TabPanel>
                                <div className="grid grid-cols-3 gap-6 justify-between">
                                    {
                                        getDrinkItems.map(Drink => (
                                            <div key={Drink._id} className="card-normal w-[424px] bg-[#F3F3F3] shadow-xl hover:scale-105 transition-all ease-linear">
                                                <figure className="relative">
                                                    <img className="w-full min-h-[300px]" src={Drink.image} alt="Shoes" />
                                                    <p className="bg-[#1F2937] text-white inline-block px-[23px] py-[11px] absolute top-5 right-5">${Drink.price}</p>
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title text-[#151515] text-[24px] font-semibold flex justify-center">{Drink.name}</h2>
                                                    <p className="text-[#737373]">If a dog chews shoes whose shoes does he choose?</p>
                                                    <div className="flex justify-center mt-[45px]">
                                                        <button className="btn h-full bg-[#E8E8E8] border-t-0 border-x-0 border-b-[3px] border-[#BB8506] text-[#BB8506] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                            {/* ===================== Drink Tab ends ===================== */}
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurShop;