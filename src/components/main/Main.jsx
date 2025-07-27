import React, { useState } from "react";
import img1 from "../../assets/IMAGE1.png";
import img2 from "../../assets/IMAGE2.jpg";
import img3 from "../../assets/IMAGE3.jpg";
import img4 from "../../assets/IMAGE4.jpg";
import img5 from "../../assets/IMAGE5.jpg";
import img6 from "../../assets/IMAGE6.jpg";
import img7 from "../../assets/IMAGE7.jpg";
import img8 from "../../assets/IMAGE8.jpg";
import img9 from "../../assets/IMAGE9.jpg";
import img10 from "../../assets/IMAGE10.jpg";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="mt-[120px]">
          <h4 className="17px pb-[39px]">PROJECTS</h4>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <img src={img1} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Village Pt</h3>
            </div>
            <div>
              <img src={img2} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Franklin</h3>
            </div>
            <div>
              <img src={img3} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Henderson</h3>
            </div>
            <div>
              <img src={img4} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Hazelwood</h3>
            </div>
            <div>
              <img src={img5} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Martin St</h3>
            </div>
            <div>
              <img src={img6} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Concord</h3>
            </div>
            <div>
              <img src={img7} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Houston St</h3>
            </div>
            <div>
              <img src={img8} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Hillsboro</h3>
            </div>
            <div>
              <img src={img9} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Willow Ave</h3>
            </div>
            <div>
              <img src={img10} alt="" className="img" />
              <h3 className="size[23px] pt-[18px]">Brentwood</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
