import React from "react";
import image from "../../assests/image.webp"
export default function PojaFeatureSection() {
  return (
    <div className="w-full bg-white ">
      {/* Container with 7xl max-width */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-center">
          <div className="inline-block mb-6">
            <span
              className="text-xs md:text-lg font-bold uppercase tracking-wider px-4 py-2 rounded-full"
              style={{ backgroundColor: "#fc8408", color: "white" }}
            >
              Why Choose Us
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-2xl font-bold leading-tight"
            style={{ color: "#a3381c" }}
          >
            Transforming Ideas Into
            <span style={{ color: "#fc8408" }}> Digital Excellence</span>
          </h2>
          {/* <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl leading-relaxed">
            We craft innovative solutions that elevate your brand and create
            lasting impressions. Our approach combines cutting-edge design with
            strategic thinking.
          </p> */}
        </div>

        {/* Image + Text Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            {/* Main Image Container */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px] lg:h-[550px]"
              style={{ backgroundColor: "#f0f0f0" }}
            >
              {/* <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-32 h-32"
                  style={{ color: "#fc8408" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div> */}
              <div className="w-full h-full">
                <img
                  src={image}
                  alt="Feature"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Accent Element */}
              <div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20"
                style={{ backgroundColor: "#a3381c" }}
              ></div>
            </div>

            {/* Floating Card */}
            <div
              className="absolute -bottom-6 -right-4 md:bottom-8 md:right-8 bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-xs"
              style={{ borderTop: "4px solid #fc8408" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#fc8408" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span
                  className="font-bold text-lg"
                  style={{ color: "#a3381c" }}
                >
                  5 Stars
                </span>
              </div>
              <p className="text-gray-700 font-semibold">
                Trusted by 500+ brands worldwide
              </p>
            </div>
          </div>

          {/* Text Content Side */}
          <div>
            {/* Feature Points */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#fc8408" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#a3381c" }}
                  >
                    Lightning Fast Performance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our optimized solutions deliver blazing-fast results that
                    keep your users engaged and satisfied.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#a3381c" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#a3381c" }}
                  >
                    Enterprise Security
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your data is protected with industry-leading security
                    protocols and encryption standards.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "#fc8408" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#a3381c" }}
                  >
                    24/7 Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our expert team is always ready to help you succeed with
                    dedicated support and guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="mt-12 px-8 py-4 rounded-lg font-semibold text-white transition duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: "#fc8408" }}
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="mt-24 flex justify-center">
        <div
          className="w-64 h-1 rounded-full"
          style={{ backgroundColor: "#fc8408", opacity: 0.3 }}
        ></div>
      </div>
    </div>
  );
}
