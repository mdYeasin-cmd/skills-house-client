

const NewsLetter = () => {
    return (
        <div className="bg-[#34526e] text-white">
            <div className="w-full xl:w-1/2 mx-auto xl:py-20">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 dark:text-white mb-4 text-center md:mt-0 mt-4">Subscribe</h1>
                <p className="text-base leading-normal dark:text-gray-200 text-center">
                    For getting our every update please subscribe our newsletter
                </p>
                <div className="flex items-stretch mt-12">
                    <input className="bg-gray-100 rounded-lg rounded-r-none dark:bg-gray-800 text-base leading-none text-gray-800 dark:text-white p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                    <button className="w-32 rounded-l-none hover:bg-[#51DBDC] bg-[#51DBDC] rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#51DBDC]">subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;