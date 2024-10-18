const Insights = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-around md:items-center p-5 py-10 mt-24 md:mt-0 flex-col md:flex-row ">
        <p className="text-4xl font-semibold">
          We earn trust by <br /> working efficiently
        </p>
        <div className="flex mt-10 md:mt-0 gap-6 md:gap-2 flex-col md:flex-row">
          <div>
            <p className="text-4xl">15+</p>
            <p className="text-gray-500"> years of experience</p>
          </div>
          <hr className="w-[0.5px] bg-gray-200  h-full" />
          <div>
            <p className="text-4xl">84k</p>
            <p className="text-gray-500"> Customers worldwide</p>
          </div>
          <hr className="w-[0.5px] bg-gray-200  h-full" />
          <div>
            <p className="text-4xl">600+</p>
            <p className="text-gray-500"> Project completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
