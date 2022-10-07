const SubHeader = ({ title }) => {
  return (
    <div className="bg-white px-10 py-5 lg:px-[150px]">
      <h3 className="font-semibold text-2xl text-gray-700 py-4">
        Ikomers | {title}
      </h3>
    </div>
  );
};

export default SubHeader;
