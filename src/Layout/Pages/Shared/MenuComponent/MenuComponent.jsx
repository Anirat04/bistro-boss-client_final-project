const MenuComponent = ({item}) => {
    const {name, image, price, recipe } = item;
    console.log(item)
    return (
        <div className="flex gap-8">
            <div className="menuImg max-w-[118px] min-h-[104px]">
                <img className="rounded-r-full rounded-bl-full min-h-[104px] max-h-[full]" src={image} alt="" />
            </div>
            <div className="menuText">
                <h3 className="font-cinzel text-[20px] text-[#151515]">{name} ------------------</h3>
                <p className="text-[#737373] text-[16px] leading-7">{recipe}</p>
            </div>
            <div className="menuPrice">
                <p className="text-[20px] text-[#BB8506] mr-5">${price}</p>
            </div>
        </div>
    );
};

export default MenuComponent;