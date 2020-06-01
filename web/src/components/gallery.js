import React, { Component } from "react"
import Slick from "react-slick"
import Figure from "./figure"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./gallery.scss"

class Gallery extends Component {
  render() {
    const ArrowLeft = ({currentSlide, slideCount, children, ...props}) => {
      return <button {...props} className="sliderArrow prev" aria-label="Previous slide" />
    }

    const ArrowRight = ({currentSlide, slideCount, children, ...props}) => {
      return <button {...props} className="sliderArrow next" aria-label="Next slide" />
    }

    const settings = {
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,
      autoplay: true,
      className: "gallery",
      dots: false,
      fade: true,
      slidesToShow: 1,
      infinite: true,
      swipeToSlide: true,
      focusOnSelect: true
    };

    return (
      <section className="galleryWrapper">
        <Slick {...settings}>
          {this.props.images.map(slide =>
            <Figure key={slide._key} {...slide} />
          )}
        </Slick>
      </section>
    )
  }
}

export default Gallery
