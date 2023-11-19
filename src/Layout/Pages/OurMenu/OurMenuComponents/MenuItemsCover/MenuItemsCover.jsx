
const MenuItemsCover = ({ cover_bg, coverHeading }) => {
    return (
        <div>
            <div>
                <div
                    className="py-[175px] bg-fixed"
                    style={{
                        backgroundImage: `url("${cover_bg}")`,
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="overlay bg-black max-w-[1320px] mx-auto bg-opacity-60 text-white text-center px-[128px]">
                        <div className="cover-text py-[145px]">
                            <h3 className='font-cinzel text-[45px] font-semibold'>
                                {coverHeading}
                            </h3>
                            <p className='font-cinzel text-[14px] font-medium leading-6'>
                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItemsCover;