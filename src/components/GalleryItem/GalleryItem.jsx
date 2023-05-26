import React from 'react';
import { ImageGalleryItemStyled } from './GalleryItem.styled';

export default function GalleryItem({ webformatURL, largeImageURL }) {
  return (
    <ImageGalleryItemStyled>
      <img src={webformatURL} alt="" />
    </ImageGalleryItemStyled>
  );
}
