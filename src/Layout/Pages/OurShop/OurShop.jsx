import BannerCover from "../Shared/BannerCover/BannerCover";
import ShopBanner_cover from "../../../assets/shop/banner2.jpg"
import './OurShop.css'
// import react tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../Shared/CardComponent/CardComponent";
import useCart from "../../../hooks/useCart";

const OurShop = () => {
    const catagories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = catagories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menuCardData, setMenuCardData] = useState([])
    // const [cart, refetch] = useCart()
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
                                            <CardComponent
                                                key={Salad._id}
                                                CardDetails={Salad}
                                            ></CardComponent>
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
                                            <CardComponent
                                                key={Pizza._id}
                                                CardDetails={Pizza}
                                            ></CardComponent>
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
                                            <CardComponent
                                                key={Soup._id}
                                                CardDetails={Soup}
                                            ></CardComponent>
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
                                            <CardComponent
                                                key={Dessert._id}
                                                CardDetails={Dessert}
                                            ></CardComponent>
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
                                            <CardComponent
                                                key={Drink._id}
                                                CardDetails={Drink}
                                            ></CardComponent>
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