const detail = () => {
  return (
    <div className="w-full lg:px-[100px] px-5 py-5 h-full flex lg:flex-row flex-col lg:gap-20 gap-0">
      <div className="relative">
        <div className="block">
          <img
            src="../../images/art.jpg"
            alt="gambar"
            className="w-full lg:h-80 h-full object-cover object-center mb-5"
          />
          <h3 className="font-medium text-2xl lg:text-4xl text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            qui!
          </h3>
          <div className="flex lg:gap-10 gap-5 lg:justify-center justify-evenly mt-10 mb-5">
            <div className="flex items-center gap-3">
              <img src="../../images/icons/edit.svg" alt="gambar" />
              <span className="font-medium text-gray-600 lg:block hidden">
                John Doe
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img src="../../images/icons/calendar.svg" alt="gambar" />
              <span className="font-medium text-gray-600 lg:block hidden">
                September 20, 2022
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img src="../../images/icons/visibility.svg" alt="gambar" />
              <span className="font-medium text-gray-600 lg:block hidden">
                2000
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img src="../../images/icons/category.svg" alt="gambar" />
              <span className="font-medium text-gray-600 lg:block hidden">
                Art
              </span>
            </div>
          </div>
        </div>
        <div className="block mt-10">
          <p className="font-medium text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="font-medium text-gray-600 mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            facilis inventore ipsa aliquam blanditiis delectus placeat rerum
            nam? Odio dolores labore magnam at, earum quam illum explicabo
            delectus veritatis sequi.
          </p>
          <p className="font-bold text-gray-600 mt-5">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="font-medium text-gray-600 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            quod! Suscipit consequatur iste numquam fuga nulla eos odit,
            deserunt nemo quod perspiciatis! Accusantium, odio praesentium,
            assumenda illo iusto sequi vel laudantium ullam nobis placeat earum!
            Dolor eveniet quidem asperiores, accusantium modi eligendi! Beatae
            quibusdam modi, consequuntur in enim quisquam minima.
          </p>
          <div className="flex lg:flex-row flex-col gap-3 mt-5 mb-10">
            <img
              src="../../images/furniture1.jpg"
              alt="gambar"
              className="w-full h-96 object-cover object-center flex"
            />
            <img
              src="../../images/furniture2.jpg"
              alt="gambar"
              className="w-full h-96 object-cover object-center flex"
            />
            <img
              src="../../images/furniture3.jpg"
              alt="gambar"
              className="w-full h-96 object-cover object-center flex"
            />
          </div>
          <p className="font-medium text-gray-600 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit
            id velit. Laboriosam hic rerum aspernatur, ut ullam consectetur
            voluptas aperiam facilis esse tenetur temporibus eius quas ratione
            asperiores quasi non doloribus dolorum ab sequi, vel commodi
            excepturi vero in alias. Beatae aut at voluptas dolor, doloribus
            molestiae suscipit eius sunt necessitatibus iste magni fugiat harum
            nisi. Minus reprehenderit perspiciatis minima, assumenda voluptas
            optio harum vel? Ratione laboriosam accusamus libero ad iste
            nesciunt impedit perferendis voluptates aliquam minus. Quisquam,
            ipsa necessitatibus voluptates ducimus explicabo iste iusto ratione
            quidem quis quaerat officiis sapiente illum enim, cupiditate iure
            voluptatibus vitae. Vero, earum.
          </p>
          <div className="flex mt-5 mb-10">
            <img
              src="../../images/design.jpg"
              alt="gambar"
              className="w-full h-96 object-cover object-center flex"
            />
          </div>
          <p className="font-medium text-gray-600 mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            similique distinctio officia maxime et suscipit pariatur iusto
            dolore, ut sequi error, consequuntur vero eos sit itaque
            exercitationem nisi, alias ipsa.
          </p>
          <div className="block ml-0 lg:ml-32 my-10">
            <p className="text-3xl font-medium italic text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              iure.
            </p>
            <p className="text-lg font-medium italic text-gray-500">
              John Doe - 2022
            </p>
          </div>
          <div className="my-10 lg:my-20 flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-3">
            <h3 className="font-medium">Share Article:</h3>
            <div className="flex gap-3">
              <img
                src="../../images/icons/facebook.svg"
                alt="gambar"
                className="w-10 h-10 object-center object-cover cursor-pointer"
              />
              <img
                src="../../images/icons/twitter.svg"
                alt="gambar"
                className="w-10 h-10 object-center object-cover cursor-pointer"
              />
              <img
                src="../../images/icons/instagram.svg"
                alt="gambar"
                className="w-10 h-10 object-center object-cover"
              />
              <img
                src="../../images/icons/whatsapp.svg"
                alt="gambar"
                className="w-10 h-10 object-center object-cover cursor-pointer"
              />
              <img
                src="../../images/icons/telegram.svg"
                alt="gambar"
                className="w-10 h-10 object-center object-cover cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block w-[80%]">
        <h3 className="font-semibold text-2xl text-gray-600 my-5">
          Recent Post
        </h3>
        <div className="flex flex-col my-5 cursor-pointer">
          <div className="flex gap-3">
            <img
              src="../images/design.jpg"
              alt="fashion"
              className="w-14 h-14 flex object-cover object-center"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet.
              </h3>
              <h3 className="font-normal text-red-500">September 12, 2022</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-5 cursor-pointer">
          <div className="flex gap-3">
            <img
              src="../images/fashion.jpg"
              alt="fashion"
              className="w-14 h-14 flex object-cover object-center"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet.
              </h3>
              <h3 className="font-normal text-red-500">September 12, 2022</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-5 cursor-pointer">
          <div className="flex gap-3">
            <img
              src="../images/furniture1.jpg"
              alt="fashion"
              className="w-14 h-14 flex object-cover object-center"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-gray-600">
                Lorem ipsum dolor sit amet.
              </h3>
              <h3 className="font-normal text-red-500">September 12, 2022</h3>
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-2xl text-gray-600 my-5">Social</h3>
        <div className="flex gap-3 lg:justify-between justify-start mb-3">
          <img
            src="../../images/icons/facebook.svg"
            alt="gambar"
            className="w-10 lg:w-14 h-10 lg:h-14 object-center object-cover cursor-pointer"
          />
          <img
            src="../../images/icons/twitter.svg"
            alt="gambar"
            className="w-10 lg:w-14 h-10 lg:h-14 object-center object-cover cursor-pointer"
          />
          <img
            src="../../images/icons/instagram.svg"
            alt="gambar"
            className="w-10 lg:w-14 h-10 lg:h-14 object-center object-cover"
          />
          <img
            src="../../images/icons/whatsapp.svg"
            alt="gambar"
            className="w-10 lg:w-14 h-10 lg:h-14 object-center object-cover cursor-pointer"
          />
        </div>
        <h3 className="font-semibold text-2xl text-gray-600 my-5">
          Popular Tags
        </h3>
        <div className="flex gap-3 justify-between mb-3">
          <button className="border-none bg-none outline-none">#holiday</button>
          <button className="border-none bg-none outline-none">
            #politics
          </button>
          <button className="border-none bg-none outline-none">#brands</button>
        </div>
        <div className="flex gap-3 justify-between mb-3">
          <button className="border-none bg-none outline-none">
            #technology
          </button>
          <button className="border-none bg-none outline-none">#art</button>
          <button className="border-none bg-none outline-none">#science</button>
        </div>
      </div>
    </div>
  );
};

export default detail;
