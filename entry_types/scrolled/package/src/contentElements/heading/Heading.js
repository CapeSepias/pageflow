import React from 'react';
import classNames from 'classnames';

import {Text} from 'pageflow-scrolled/frontend';

import styles from './Heading.module.css';

export function Heading({configuration}) {
  return (
    <h1 className={classNames(styles.root, {[styles.first]: configuration.first})}>
      <Text scaleCategory={configuration.first ? 'h1' : 'h2'} inline={true}>
        {configuration.children}
      </Text>
    </h1>
  );
}
