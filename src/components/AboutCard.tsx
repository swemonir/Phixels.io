
const AboutCard = () => {
    return (
       <div className="sm:px-8 lg:px-20 px-4 xl:px-56 lg:flex gap-6 bg-black pb-5 justify-between items-center">
            <div className="border-t-2 border-x-2 border-white rounded-2xl py-4 px-24">
                <p className="text-4xl font-bold text-center">9+</p>
                <p className="text-sm text-center mt-2 whitespace-nowrap">Years of experience</p>
            </div>
            <div className="border-t-2 border-x-2 border-white rounded-2xl py-4 px-24">
                <p className="text-4xl font-bold text-center">100+</p>
                <p className="text-sm text-center mt-2 whitespace-nowrap">Projects Successfully Completede</p>
            </div>
            <div className="border-t-2 border-x-2 border-white rounded-2xl py-4 px-24">
                <p className="text-4xl font-bold text-center">1.5k+</p>
                <p className="text-sm text-center mt-2 whitespace-nowrap">Users Trust Our Clients' Platforms </p>
            </div>
            <div className="border-t-2 border-x-2 border-white rounded-2xl py-4 px-24">
                <p className="text-4xl font-bold text-center">$10M+</p>
                <p className="text-sm text-center mt-2 whitespace-nowrap">Secured by Our Clients</p>
            </div>
        </div>
    );
};

export default AboutCard;