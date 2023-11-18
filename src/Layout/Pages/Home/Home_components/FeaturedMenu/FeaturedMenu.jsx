import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import './FeaturedMenu.css'
import featuredImg from '../../../../../assets/home/featured.jpg'
const FeaturedMenu = () => {
    return (
        <div>
            <section className="mb-[130px]">
                <div className="Featured_bg">
                    <div className="overlay py-[130px] bg-[#151515] bg-opacity-70 text-white">
                        <div className="max-w-[1320px] mx-auto">
                            <SectionTitle
                                subHeading={'---Check it out---'}
                                heading={'FROM OUR MENU'}
                            ></SectionTitle>
                            <div className="featurdItem flex gap-[68px]">
                                <div>
                                    <img className="max-w-[648px] min-h-[400px] max-h-[400px]" src={featuredImg} alt="" />
                                </div>
                                <div className="featured-text flex flex-col justify-center">
                                    <h3 className="text-white text-[24px] font-normal leading-9">March 20, 2023</h3>
                                    <h3 className="text-white text-[24px] font-normal leading-9 uppercase">WHERE CAN I GET SOME?</h3>
                                    <p className="text-[20px] leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                                    <button className="btn h-auto bg-transparent border-t-0 border-x-0 border-b-[3px] border-white text-white text-[20px] uppercase py-[20px] px-[30px] hover:border-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506] w-[178px] mt-[24px]">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default FeaturedMenu;