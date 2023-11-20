import './BannerCover.css'


const BannerCover = ({ cover_bg }) => {
    return (
        <div>
            <div
                className=" pt-[240px] pb-[110px]"
                style={{
                    background: `url("${cover_bg}")`
                }}
            >
                <div className="overlay bg-black max-w-[1320px] mx-auto bg-opacity-60 text-white text-center">
                    <div className="cover-text py-[145px]">
                        <h3 className='font-cinzel text-[88px] font-bold'>
                            Our menu
                        </h3>
                        <p className='font-cinzel text-[24px] font-semibold'>
                            would you like to try a dish?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCover;