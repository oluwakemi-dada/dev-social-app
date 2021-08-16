import React from 'react';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-color: #17a2b8;
`;

const Spinner = () => {
  return (
    <div className='sweet-loading'>
      <BeatLoader color={'#17a2b8'} loading={true} css={override} size={10} />
    </div>
  );
};

export default Spinner;
