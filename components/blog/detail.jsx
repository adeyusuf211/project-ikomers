const BlogDetail = () => {
  return (
    <>
      <div className="w-full h-full px-5 lg:px-[150px] py-10 bg-gray-100 relative">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="lg:w-[70%] w-full">
            <img
              src="../images/design.webp" className="w-full h-96 object-center object-cover"
              alt="gambar"
            />
            <h3 className="font-bold text-3xl text-gray-800 my-3 text-center mt-10">
              Lorem ipsum dolor sit amet.
            </h3>
            <div className="flex gap-2 justify-center">
              <a href="#" className="text-blue-600 font-semibold">
                Art and Design
              </a>{" "}
              |{" "}
              <a href="#" className="text-blue-600 font-semibold">
                2 weeks ago
              </a>
              |{" "}
              <a href="#" className="text-blue-600 font-semibold">
                200 Likes
              </a>
            </div>
            <div className="mt-5 mb-10 blog">
              <h3 className="text-gray-600 font-base text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis doloribus voluptates accusamus nemo aliquid,
                voluptatibus non, quod fuga asperiores quae laborum voluptas
                dignissimos in iusto repellendus architecto perferendis
                provident labore. <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                sequi voluptatem explicabo incidunt est praesentium commodi
                quidem facilis corrupti non nemo alias deserunt aspernatur
                dignissimos, quo illum quod magni veritatis. Alias optio, soluta
                tempore amet aspernatur facere itaque distinctio consequatur quo
                facilis sed, iusto ea vero nam quae perspiciatis a. <br />{" "}
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt aliquid perferendis quod nam, facilis vero aperiam
                alias provident maiores, porro deserunt velit, eveniet harum.
                Quisquam amet a nihil suscipit exercitationem eum fugiat qui
                officiis, illum excepturi quia mollitia sint deserunt repellat
                tempora sed nulla consequatur est modi. Laborum asperiores quo
                ab nobis aliquid deserunt porro voluptates. Quo aliquid possimus
                expedita iure amet, nostrum dolore libero! Libero, obcaecati
                aliquam dolore omnis est pariatur voluptates nostrum sequi
                voluptas temporibus aliquid, quis in modi magnam? Voluptate odio
                qui ea? Eius molestias provident, voluptatem nostrum mollitia
                veritatis ipsam, incidunt ipsa architecto tenetur maiores
                excepturi?
              </h3>
              <div className="flex gap-3 my-5">
                <img
                  src="../images/furniture1.webp"
                  alt="gambar"
                  className="w-60 h-60 flex"
                />
                <img
                  src="../images/furniture2.webp"
                  alt="gambar"
                  className="w-60 h-60 flex"
                />
              </div>
            </div>
            <h3 className="text-gray-600 text-lg font-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              laboriosam odio itaque? Omnis est odit rem tempora quis facilis
              voluptates.
            </h3>
            <blockquote className="bg-white italic text-gray-700 my-3">
              <h3 className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, reiciendis.
              </h3>
              <p className="font-semibold">John Doe - 2022</p>
            </blockquote>
            <h3 className="text-gray-600 text-lg font-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, error!
            </h3>
            <div className="flex flex-col items-center mt-5 mb-20">
              <h3 className="font-semibold text-2xl text-gray-600">Share:</h3>
              <div className="flex gap-3 my-2">
                <a className="w-10 h-10 rounded-full bg-gray-400 cursor-pointer">
                  <img src="../images/icons/instagram.svg" alt="icons" />
                </a>
                <a className="w-10 h-10 rounded-full bg-gray-400 cursor-pointer">
                  <img src="../images/icons/facebook.svg" alt="icons" />
                </a>
                <a className="w-10 h-10 rounded-full bg-gray-400 cursor-pointer">
                  <img src="../images/icons/twitter.svg" alt="icons" />
                </a>
                <a className="w-10 h-10 rounded-full bg-gray-400 cursor-pointer">
                  <img src="../images/icons/whatsapp.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="block lg:mb-0 mb-20 p-5 lg:w-[40%] w-full h-full bg-white lg:sticky lg:top-0">
            <h3 className="font-bold text-xl text-gray-700">Recent Post</h3>
            <div className="block my-5">
              <div className="flex gap-3 my-3">
                <img
                  src="../images/design.webp"
                  alt="gambar"
                  className="w-20 h-20 object-cover object-center"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <h3 className="font-medium text-sm text-gray-500">
                    October 25, 2022.
                  </h3>
                </div>
              </div>
              <div className="flex gap-3 my-3">
                <img
                  src="../images/background.webp"
                  alt="gambar"
                  className="w-20 h-20 object-cover object-center"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <h3 className="font-medium text-sm text-gray-500">
                    October 25, 2022.
                  </h3>
                </div>
              </div>
              <div className="flex gap-3 my-3">
                <img
                  src="../images/banner.webp"
                  alt="gambar"
                  className="w-20 h-20 object-cover object-center"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <h3 className="font-medium text-sm text-gray-500">
                    October 25, 2022.
                  </h3>
                </div>
              </div>
              <div className="flex gap-3 my-3">
                <img
                  src="../images/technology.webp"
                  alt="gambar"
                  className="w-20 h-20 object-cover object-center"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <h3 className="font-medium text-sm text-gray-500">
                    October 25, 2022.
                  </h3>
                </div>
              </div>
              <div className="flex gap-3 my-3">
                <img
                  src="../images/art.webp"
                  alt="gambar"
                  className="w-20 h-20 object-cover object-center"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-gray-700 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                  </h3>
                  <h3 className="font-medium text-sm text-gray-500">
                    October 25, 2022.
                  </h3>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-xl text-gray-700 mb-3">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-3 mb-5">
              <button className="border-none outline-none">#technology</button>
              <button className="border-none outline-none">#art</button>
              <button className="border-none outline-none">#cloud</button>
              <button className="border-none outline-none">#football</button>
              <button className="border-none outline-none">#travel</button>
              <button className="border-none outline-none">#game</button>
            </div>
            <h3 className="font-bold text-xl text-gray-700 mb-3">
              Social Media
            </h3>
            <div className="flex gap-2">
              <img
                src="../images/design.webp"
                alt="gambar"
                className="w-14 h-14 object-cover object-center"
              />
              <img
                src="../images/art.webp"
                alt="gambar"
                className="w-14 h-14 object-cover object-center"
              />
              <img
                src="../images/technology.webp"
                alt="gambar"
                className="w-14 h-14 object-cover object-center"
              />
              <img
                src="../images/banner.webp"
                alt="gambar"
                className="w-14 h-14 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
