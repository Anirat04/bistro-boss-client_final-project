import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MenuComponent from "../../../Shared/MenuComponent/MenuComponent";

const FromOurMenu = () => {
    const [menuData, setMenuData] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenuData(data.filter(data => data.category === "popular")))
    }, [])
    // console.log(menuData)
    return (
        <section className="mb-[130px]">
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'from our menu'}
            ></SectionTitle>
            <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-6">
                {
                    menuData.map(data => (
                        <MenuComponent
                            key={data.id}
                            item={data}
                        ></MenuComponent>
                    ))
                }
            </div>
            <div className="flex justify-center mt-[48px]">
                <button className="btn h-full bg-transparent border-t-0 border-x-0 border-b-[3px] border-[#1F2937] text-[#1F2937] text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506]">View Full  Menu</button>
            </div>

        </section>
    );
};

export default FromOurMenu;