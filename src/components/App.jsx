import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
// import { ToastContainer, toast } from 'react-toastify';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <ImageGallery></ImageGallery>
        <LoadMoreBtn></LoadMoreBtn>
      </div>
    );
  }
}
