import React from 'react';
import { importAll, shuffle } from '../functions.js';
import '../scss/Picture.scss';
import defaultPicture from '../media/homepage.jpg';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.createImageArray = this.createImageArray.bind(this);
    this.loadImagesToState = this.loadImagesToState.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.state = {
      count: 0,
      images: (importAll(require.context('../media/homepage', true, /\.(png|jpe?g|svg)$/)))
    };
  }

  // create a shuffled array of images
  createImageArray = () => {
    // shuffle array of images;
    var shuffledArr = shuffle(this.state.images);
    // update state
    this.loadImagesToState(shuffledArr);
  }

  loadImagesToState = (arr) => {
    // set state of component with shuffled images array
    this.setState((currState) => {
      return {
        images: arr
      }
    });
  }

  nextImage = () => {
    // if count is less than total # of images
    if (this.state.count < this.state.images.length - 1) {
      // move to the next image
      this.setState((state) => ({
        count: ++state.count
      }));
    // otherwise, reset the count
    } else if (this.state.count === 21) {
      // shuffle array of images
      this.setState((state) => ({
        count: 0
      }));
    }
  }

  // when component mounts create the image array
  componentDidMount() {
    this.createImageArray();
  }

  render() {
    return (
      <>
      <img id="picture"
        src={
          this.state.count === 0 ?
          defaultPicture :
          this.state.images[this.state.count]
        }
        onClick={this.nextImage}
      />
      </>
    );
  }
}

export default Picture;
