const BlogDetail = () => {
  return (
    <>
      <div className="w-full h-full px-5 lg:px-[150px] py-10 bg-gray-100">
        <img
          src="../images/design.jpg"
          alt="gambar"
          className="w-full h-full object-center object-cover"
        />
        <h3 className="font-bold text-3xl text-gray-800 my-3 text-center">
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            doloribus voluptates accusamus nemo aliquid, voluptatibus non, quod
            fuga asperiores quae laborum voluptas dignissimos in iusto repellendus
            architecto perferendis provident labore. <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sequi voluptatem explicabo incidunt est praesentium commodi quidem facilis corrupti non nemo alias deserunt aspernatur dignissimos, quo illum quod magni veritatis. Alias optio, soluta tempore amet aspernatur facere itaque distinctio consequatur quo facilis sed, iusto ea vero nam quae perspiciatis a. <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aliquid perferendis quod nam, facilis vero aperiam alias provident maiores, porro deserunt velit, eveniet harum. Quisquam amet a nihil suscipit exercitationem eum fugiat qui officiis, illum excepturi quia mollitia sint deserunt repellat tempora sed nulla consequatur est modi. Laborum asperiores quo ab nobis aliquid deserunt porro voluptates. Quo aliquid possimus expedita iure amet, nostrum dolore libero! Libero, obcaecati aliquam dolore omnis est pariatur voluptates nostrum sequi voluptas temporibus aliquid, quis in modi magnam? Voluptate odio qui ea? Eius molestias provident, voluptatem nostrum mollitia veritatis ipsam, incidunt ipsa architecto tenetur maiores excepturi?
          </h3>
          <div className="flex gap-3 my-5">
            <img src="../images/furniture1.jpg" alt="gambar" className="w-60 h-60 flex" />
            <img src="../images/furniture2.jpg" alt="gambar" className="w-60 h-60 flex" />
          </div>
        </div>
        <h3 className="text-gray-600 text-lg font-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus laboriosam odio itaque? Omnis est odit rem tempora quis facilis voluptates.
        </h3>
        <blockquote className="bg-white italic text-gray-700 my-3">
          <h3 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, reiciendis.</h3>
          <p className="font-semibold">John Doe - 2022</p>
        </blockquote>
        <h3 className="text-gray-600 text-lg font-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, error!
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
    </>
  );
};

export default BlogDetail;
