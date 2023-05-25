import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
// import { ToastContainer, toast } from 'react-toastify';
import { ProgressBar } from 'react-loader-spinner';
// import Modal from './Modal/Modal';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
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
