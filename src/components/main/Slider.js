import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css'
import SliderForm from '../SliderForm/SliderForm';



class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            isHovered: false, // Состояние для отслеживания наведения на слайдер
        };
    }

    componentDidMount() {
        this.autoSlideInterval = setInterval(this.handleNextClick, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.autoSlideInterval);
    }

    handlePrevClick = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.props.images.length,
        }));
    };

    handleNextClick = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
        }));
    };

    handleSliderMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleSliderMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const { currentIndex, isHovered } = this.state;
        const { images, imageSize } = this.props;

        const imageStyle = {
            width: imageSize.width,
            height: imageSize.height,
        };
        const right = '>'
        const left = '<'
        return (
            <div className='container'>
                <div
                    className="slider-container"
                    onMouseEnter={this.handleSliderMouseEnter}
                    onMouseLeave={this.handleSliderMouseLeave}
                >
                    <Carousel selectedItem={currentIndex} showArrows={false} showThumbs={false}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img className='slide_img' src={image} alt={`Slide ${index}`} style={imageStyle} />
                                <SliderForm/>
                            </div>
                        ))}
                    </Carousel>
                    {isHovered && (
                        <div className="button-container">
                            <button className="prev-button" onClick={this.handlePrevClick}>
                                {left}
                            </button>
                            <button className="next-button" onClick={this.handleNextClick}>
                               {right}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Slider;
