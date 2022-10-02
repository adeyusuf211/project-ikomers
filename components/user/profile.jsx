const Profile = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
      <img
        src="../../images/art.jpg"
        alt="gambar"
        className="w-80 h-80 object-cover object-center"
      />
      <div className="block w-full">
        <h3 className="font-semibold text-gray-700">My Profile</h3>
        <div className="flex gap-3 my-3">
          <h3 className="font-medium text-gray-700 w-[40%] lg:w-[50%]">Name</h3>
          <h3 className="font-medium text-gray-700 w-full">John Doe</h3>
        </div>
        <div className="flex gap-3 my-3">
          <h3 className="font-medium text-gray-700 w-[40%] lg:w-[50%]">
            Birthday
          </h3>
          <h3 className="font-medium text-gray-700 w-full">
            September 25, 2022
          </h3>
        </div>
        <div className="flex gap-3 my-3">
          <h3 className="font-medium text-gray-700 w-[40%] lg:w-[50%]">
            Gender
          </h3>
          <h3 className="font-medium text-gray-700 w-full">Man</h3>
        </div>
        <h3 className="font-semibold text-gray-700">Contact</h3>
        <div className="flex gap-3 my-3">
          <h3 className="font-medium text-gray-700 w-[40%] lg:w-[50%]">
            Email
          </h3>
          <h3 className="font-medium text-green-600 w-full">john@doe.com</h3>
        </div>
        <div className="flex gap-3 my-3">
          <h3 className="font-medium text-gray-700 w-[40%] lg:w-[50%]">
            Phone Number
          </h3>
          <div className="flex gap-3 w-full">
            <h3 className="font-medium text-gray-700">(+90) 82929358473</h3>
            <small className="text-green-600">Change</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
