import React from 'react';
import '@testing-library/jest-dom/extend-expect'

import {renderInEntry} from 'support';

import {Image} from 'frontend/Image';

describe('Image', () => {
  it('renders nothing by default', () => {
    const {queryByRole} =
      renderInEntry(<Image id={100} />, {
        seed: {}
      });

    expect(queryByRole('img')).toBeNull();
  });

  it('uses large variant of image given by id as background', () => {
    const {getByRole} =
      renderInEntry(<Image id={100} />, {
        seed: {
          imageFileUrlTemplates: {
            large: ':id_partition/image.jpg'
          },
          imageFiles: [
            {id: 1, permaId: 100}
          ]
        }
      });

    expect(getByRole('img')).toHaveStyle('background-image: url("000/000/001/image.jpg")');
  });

  it('uses centered background position by default', () => {
    const {getByRole} =
      renderInEntry(<Image id={100} />, {
        seed: {
          imageFiles: [
            {permaId: 100}
          ]
        }
      });

    expect(getByRole('img')).toHaveStyle('background-position: 50% 50%');
  });

  it('uses focus from image configuration for background position', () => {
    const {getByRole} =
      renderInEntry(<Image id={100} />, {
        seed: {
          imageFiles: [
            {permaId: 100, configuration: {focusX: 20, focusY: 60}}
          ]
        }
      });

    expect(getByRole('img')).toHaveStyle('background-position: 20% 60%');
  });
});
