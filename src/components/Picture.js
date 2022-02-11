import React from 'react';
import { importAll, shuffle } from '../functions.js';
import picture from '../media/homepage.jpg';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.createImageArray = this.createImageArray.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.state = {
      count: 0,
      images: []
    };
  }

  // create then shuffle array of images
  createImageArray = () => {
    // create array with all images from folder
    var imagesArr = importAll(require.context('../media/homepage', true, /\.(png|jpe?g|svg)$/));
    // create shuffled array of images;
    var shuffledArr = shuffle(imagesArr);
    // set state of component with shuffled images array
    this.setState((currState) => {
      return {
        images: shuffledArr
      }
    });
  }

  nextImage = () => {
    if (this.state.count < this.state.images.length - 1) {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }
  }

  // when component mounts run the function
  componentDidMount() {
    this.createImageArray();
  }

  render() {
    return (
      <>
      <img id="homeImage"
        src={this.state.count === 0 ? picture : this.state.images[this.state.count]}
        onClick={this.nextImage}
      />
      </>
    );
  }
}

export default Picture;
