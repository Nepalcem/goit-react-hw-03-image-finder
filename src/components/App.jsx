import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import { ProgressBar } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImagesWithQuery } from './services/api';

export default class App extends Component {
  state = {
    formInput: null,
    images: [],
    loading: false,
    pageId: 1,
  };

  getFormInput = ({ input }) => {
    this.setState({ formInput: input });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.formInput !== this.state.formInput) {
      this.setState({ loading: true, images: [] });
      try {
        const imagesArr = await fetchImagesWithQuery(this.state.formInput);

        if (imagesArr.length === 0) {
          this.setState({ loading: false });
          return toast.info('Sorry no images werefound per your request..');
        }
        this.setState(prevState => ({
          images: imagesArr,
          loading: false,
          pageId: 2,
        }));
      } catch (error) {
        toast.error(error);
      }
    }
  }

  loadMore = async () => {
    const { pageId, formInput } = this.state;
    this.setState({ loading: true });
    try {
      const imagesArr = await fetchImagesWithQuery(formInput, pageId);

      this.setState(prevState => ({
        images: [...prevState.images, ...imagesArr],
        loading: false,
        pageId: prevState.pageId + 1,
      }));
    } catch (error) {
      toast.error(error);
    }
  };

  render() {
    const { images, loading } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.getFormInput}></SearchBar>

        {images.length > 0 && <ImageGallery imagesArr={images}></ImageGallery>}
        {loading && (
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
        {images.length >= 12 && (
          <LoadMoreBtn onloadMore={this.loadMore}></LoadMoreBtn>
        )}
        <ToastContainer autoClose={4000} theme="colored" />
      </div>
    );
  }
}
