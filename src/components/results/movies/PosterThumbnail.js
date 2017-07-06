/**
 * @file Poster Thumbnail component
 * @description This component is responsible for the display of the poster image
 * @author Andrew James
 * @version 0.1
 */

//----------------------------------------------//
// This is not really a useful component        //
// but keeping incase I decide to do something  //
// else with it in the future                   //
//----------------------------------------------//
import React, {PropTypes} from 'react';

const PosterThumbnail = ({src, alt}) => {
  return (
  <img src={src} alt={alt} />
  );
};

PosterThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default PosterThumbnail;
