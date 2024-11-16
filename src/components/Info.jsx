import React from "react";

const Info = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  See Your Dream With Us
                </h2>

                <p className="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p>
              </header>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                See All
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="group block">
                  <img
                    src="https://www.bmwgroup.com/en/company/_jcr_content/main/layoutcontainer_1988/columncontrol/columncontrolparsys/globalimage.coreimg.jpeg/1701354503044/720x720-i5er.jpeg"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Super Cars
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$15000</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group block">
                  <img
                    src="https://www.motortrend.com/uploads/2023/09/002-2024-BMW-i5-front-three-quarters-in-action.jpg?w=768&width=768&q=75&format=webp"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Morden World
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$25000</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;