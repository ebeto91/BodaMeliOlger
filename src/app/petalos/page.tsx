'use client'

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import bodaImage from '../../../public/assets/images/pp1.webp';
import { Italianno, Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'], style: ['normal'] });
export default function CardPageClient() {

    return (
        <>
        <div className={styles.container}>
       
            <article className={styles.card__article}>
                 <Image src={bodaImage} alt="Fondo boda"  className={styles.card__img} />
                  <div className={styles.card__data}>
                    <span className={styles.card_description}>Test</span>
                    <h2 className={styles.card__title}>desc</h2>
                  </div>
            </article>

              <article className={styles.card__article}>
                  <p style={{position:'absolute'}} className={`${montserrat.className} ${styles.pCeremoniaRecepcion}`}>Recepción</p>
                 <Image src={bodaImage} alt="Fondo boda"  className={styles.card__img} />
                  <div className={styles.card__data}>
                     <Image src="/assets/icons/champagne.png" alt="Recepción" fill className={styles.iconsCustom} />
                    
          <p className={`${montserrat.className} ${styles.pCeremoniaRecepcion}`}>1:00pm</p>
          <p className={`${montserrat.className} ${styles.pCeremoniaRecepcion}`}>Iglesia de San Rafael Oreamuno</p>
                  </div>
            </article>

        </div>
        </>
    )

}