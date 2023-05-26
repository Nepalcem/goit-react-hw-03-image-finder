import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
// import { ToastContainer, toast } from 'react-toastify';
import { ProgressBar } from 'react-loader-spinner';
// import Modal from './Modal/Modal';
import { fetchImagesWithQuery } from './services/api';

export default class App extends Component {
  state = {
    formInput: null,
    images: [],
    loading: false,
  };

  getFormInput = ({ input }) => {
    this.setState({ formInput: input });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.formInput !== this.state.formInput) {
      this.setState({ loading: true });
      try {
        const imagesArr = await fetchImagesWithQuery(this.state.formInput);
        this.setState(prevState => ({ images: imagesArr, loading: false }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <div>
        <SearchBar onSubmit={this.getFormInput}></SearchBar>
        {images.length > 0 && <ImageGallery imagesArr={images}></ImageGallery>}
        <LoadMoreBtn></LoadMoreBtn>
        {this.state.loading && (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{
              display: 'block',
              margin: '0 auto',
            }}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#3f51b5"
          />
        )}
        {/* <Modal></Modal> */}
      </div>
    );
  }
}
