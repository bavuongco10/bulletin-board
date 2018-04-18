import React, { Fragment } from 'react';
import random from 'lodash/random';
import withSizes from 'react-sizes';

const randomBetween = (x, y, unit) => `${random(x, y)}${unit}`;

const WithTransform  = ({ children, top, left, transform }) => (
  <Fragment>
    {children({ top, left, transform })}
  </Fragment>
);

const mapSizesToProps = ({ width, height }) => ({
  top: randomBetween(0, height - 150, 'px'),
  left: randomBetween(0, width - 150, 'px'),
  transform: `rotate(${randomBetween(-25, 25, 'deg')})`
});


export default withSizes(mapSizesToProps)(WithTransform);