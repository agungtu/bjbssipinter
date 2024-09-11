"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const sliderData = [
  {
    heading:
      "Go Digital bersama BJBS Sipinter, Jadikan sekolah lebih maju dengan teknologi",
    text: "Selamatkan Waktu, Hemat Energi, Tingkatkan Efisiensi, Teknologi Inovatif untuk Operasional Sekolah yang lebih mudah",
    image: "/images/a.svg",
  },
  // {
  //   heading: "Awesome Jibo Mobile App",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   image: "/images/app-mockup-2.png",
  // },
];

const Slider: React.FC = () => {
  return (
    <>
      <Swiper
        id="home"
        navigation={true}
        modules={[Navigation]}
        className="homepage-slides"
      >
        {sliderData &&
          sliderData.map((value, i) => (
            <SwiperSlide key={i}>
              <div
                className="single-slider-item"
                style={{ backgroundColor: "#AF0321;" }}
              >
                <div className="slide-item-table">
                  <div className="slide-item-tablecell">
                  <div className="wave-price-header"></div>
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="slider-text">
                            <h1 className="">{value.heading}</h1>

                            <p className="">{value.text}</p>

                            <div className="slide-button">
                              {/* <a
                                href="https://app.dev.solusinegeri.com/BSCHOOL"
                                target="_blank"
                                className="slide-btn-white mr-10"
                                style={{ backgroundColor: "rgb(235, 156, 66)" }}
                              >
                                <i className="icofont-cloud-download text-white"></i>
                                Get A Free Demo
                              </a> */}
                              <a
                                href="https://www.youtube.com/watch?v=XM5E0cjedik"
                                target="_blank"
                                className="slide-btn-bordered text-white"
                                style={{ backgroundColor: "#AF0321" }}
                              >
                                Watch Video
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6" style={{ marginTop: 20 }}>
                          <div className="welcome-phone">
                            <Image
                              src={value.image}
                              alt="App Mockup image"
                              width={400}
                              height={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
