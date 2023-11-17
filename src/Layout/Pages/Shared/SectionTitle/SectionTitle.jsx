
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-[424px] mx-auto text-center mb-[48px]'>
            <p className='text-[#D99904] text-[20px] italic mb-[16px]'>{subHeading}</p>
            <h3 className='text-[40px] uppercase border-y-[4px] border-[#E8E8E8] py-[18px]'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;