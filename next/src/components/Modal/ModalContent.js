import React from 'react'

import Image from '../../lib/image'

import styles from './modal.module.scss'

const ModalContent = ({ content }) => {
  const { logo, title } = content

  return (
    <div>
      {logo && <Image className={styles.modalContentLogo} source={logo} />}
      <h2>{title}</h2>
    </div>
  );
};

export default ModalContent;