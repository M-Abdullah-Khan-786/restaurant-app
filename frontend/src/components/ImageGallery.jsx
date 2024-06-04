import React from "react";
import gl1 from "../assets/images/gallery/gl1.jpg";
import gl2 from "../assets/images/gallery/gl2.jpg";
import gl3 from "../assets/images/gallery/gl3.jpg";
import gl4 from "../assets/images/gallery/gl4.jpg";
import gl5 from "../assets/images/gallery/gl5.jpg";
import gl6 from "../assets/images/gallery/gl6.jpg";
import gl7 from "../assets/images/gallery/gl7.jpg";
import gl8 from "../assets/images/gallery/gl8.jpg";
import gl9 from "../assets/images/gallery/gl9.jpg";
import gl10 from "../assets/images/gallery/gl10.jpg";
import gl11 from "../assets/images/gallery/gl11.jpg";
import gl12 from "../assets/images/gallery/gl12.jpg";

const ImageGallery = () => {
  return (
    <>
      <div className="container py-5">
        <h2 className="text-center fs-1 mb-5 text-uppercase">Image Gallery</h2>
        <div className="row">
          <div className="col-md-4 px-2">
            <div className="my-3 gallery-img">
              <img src={gl1} className="img-fluid" alt=""/>
            </div>
            <div className="my-3 gallery-img">
              <img src={gl2} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-4 px-2">
            <div className="my-3 gallery-img">
              <img src={gl3} className="img-fluid" alt="" />
            </div>
            <div className="my-3 gallery-img">
              <img src={gl4} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-4 px-2">
            <div className="my-3 gallery-img">
              <img src={gl5} className="img-fluid" alt="" />
            </div>
            <div className="my-3 gallery-img">
              <img src={gl6} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-4 px-2">
            <div className="my-3 gallery-img">
              <img src={gl7} className="img-fluid" alt=""/>
            </div>
            <div className="my-3 gallery-img">
              <img src={gl8} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-4 px-2">
            <div className="my-3 gallery-img">
              <img src={gl9} className="img-fluid" alt="" />
            </div>
            <div className="my-3 gallery-img">
              <img src={gl10} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-4 px-2">
            <div className="my-3 gallery-img">
              <img src={gl11} className="img-fluid" alt="" />
            </div>
            <div className="my-3 gallery-img">
              <img src={gl12} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
