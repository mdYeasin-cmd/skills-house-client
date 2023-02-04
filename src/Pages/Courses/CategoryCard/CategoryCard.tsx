import './CategoryCard.css'

type CategoryCardProps = {
    category: {
        name: string;
        icon: JSX.Element;
    }
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <div data-aos="zoom-in-up" className="border border-[#51DBDC] category-card w-[23%] py-6 font-medium shadow-md rounded-lg text-[#51DBDC]">
            <div className="flex justify-center">
                <span className='text-4xl'>{category.icon}</span>
            </div>
            <h2 className="text-2xl text-center">{category.name}</h2>


        </div>
    );
};

export default CategoryCard;