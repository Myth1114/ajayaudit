import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./gallery.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div
      className="SectionGallery"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="SectionGallery__Card">
        <div className="CardImage">
          <img src="/Images/ajay2.jpg" alt="CardImage" />
        </div>
        <div className="CardContent">
          <h3>Lion's Club Meeting</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            consequatur. Tenetur omnis soluta facere, architecto laborum, vitae
            praesentium in quae assumenda ducimus minima aut quaerat est,
            voluptatum facilis vero magni!
          </p>
        </div>
      </div>
      <div className="SectionGallery__Card">
        <div className="CardImage">
          <img src="Images/1.jpg" alt="CardImage" />
        </div>
        <div className="CardContent">
          <h3>Card Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            consequatur. Tenetur omnis soluta facere, architecto laborum, vitae
            praesentium in quae assumenda ducimus minima aut quaerat est,
            voluptatum facilis vero magni!
          </p>
        </div>
      </div>
      <div className="SectionGallery__Card">
        <div className="CardImage">
          <img src="Images/1.jpg" alt="CardImage" />
        </div>
        <div className="CardContent">
          <h3>Card Title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            consequatur. Tenetur omnis soluta facere, architecto laborum, vitae
            praesentium in quae assumenda ducimus minima aut quaerat est,
            voluptatum facilis vero magni!
          </p>
        </div>
      </div>
      {/* <section class="gallery">
        <figure class="gallery__item gallery__item--1">
          <img src="/Images/1.jpg" alt="Gallery-1" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img src="/Images/1.jpg" alt="Gallery-2" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img src="/Images/1.jpg" alt="Gallery-3" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img src="/Images/1.jpg" alt="Gallery-4" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--5">
          <img src="/Images/1.jpg" alt="Gallery-5" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img src="/Images/1.jpg" alt="Gallery-6" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--7">
          <img src="/Images/1.jpg" alt="Gallery-7" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--8">
          <img src="/Images/1.jpg" alt="Gallery-8" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--9">
          <img src="/Images/1.jpg" alt="Gallery-9" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--10">
          <img src="/Images/1.jpg" alt="Gallery-10" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--11">
          <img src="/Images/1.jpg" alt="Gallery-11" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--12">
          <img src="Images/1.jpg" alt="Gallery-12" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--13">
          <img src="Images/1.jpg" alt="Gallery-13" class="gallery__img" />
        </figure>
        <figure class="gallery__item gallery__item--14">
          <img src="/Images/1.jpg" alt="Gallery-14" class="gallery__img" />
        </figure>
      </section> */}
    </div>
  );
};

export default Gallery;
