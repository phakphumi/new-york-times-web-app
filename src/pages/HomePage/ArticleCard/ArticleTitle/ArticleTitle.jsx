import { node } from 'prop-types';
import React from 'react';

import styles from './ArticleTitle.module.scss';

function ArticleTitle({ children }) {
  return (
    <div className={styles.title}>
      {children}
    </div>
  );
}

ArticleTitle.propTypes = {
  children: node.isRequired,
};

export default ArticleTitle;
