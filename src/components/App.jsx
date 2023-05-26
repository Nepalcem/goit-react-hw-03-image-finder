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
  };

  getFormInput = ({ input }) => {
    this.setState({ formInput: input });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.formInput !== this.state.formInput) {
      try {
        const imagesArr = await fetchImagesWithQuery(this.state.formInput);
        this.setState({ images: imagesArr });
        console.log(this.state.images);
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.getFormInput}></SearchBar>
        <ImageGallery></ImageGallery>
        <LoadMoreBtn></LoadMoreBtn>
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
          barColor="#51E5FF"
        />
        {/* <Modal></Modal> */}
      </div>
    );
  }
}
