'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { Italianno, Montserrat } from 'next/font/google';
import { useState, useLayoutEffect, useEffect } from 'react';
import Appgallery from '../testGallery/page';
import bodaImage from '../../../public/assets/images/pp1.webp';
import WeddingFallingSnowSakura from '../petalos/page';
import { div } from 'framer-motion/client';

const roboto = Italianno({ subsets: ['latin'], weight: ['400'], style: ['normal'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'], style: ['normal'] });

const TARGET_DATE = new Date("2026-01-17T13:30:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const distance = TARGET_DATE - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PageClient() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
  const tick = () => setTimeLeft(getTimeLeft());

  tick(); // inmediato

  const timeout = setTimeout(() => {
    tick();
    setInterval(tick, 1000);
  }, 1000 - (Date.now() % 1000));

  return () => clearTimeout(timeout);
}, []);
 

 

  const openLocation = () => {

     const latitude = 9.869266092187164;
  const longitude = -83.9038852748721;
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isIOS = /iphone|ipad|ipod/.test(ua);

    let url;
    if (isAndroid && window.location.protocol === "https:") {
      url = `geo:${latitude},${longitude}?q=${latitude},${longitude}`;
    } else if (isIOS) {
      url = `http://maps.apple.com/?q=${latitude},${longitude}`;
    } else {
      url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

   const openLocationParty = () => {
    const latParty=9.831112799026867;
    const longParty=-83.84517922887383;
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes("android");
    const isIOS = /iphone|ipad|ipod/.test(ua);



    let url;
    if (isAndroid && window.location.protocol === "https:") {
      url = `geo:${latParty},${longParty}?q=${latParty},${longParty}`;
    } else if (isIOS) {
      url = `http://maps.apple.com/?q=${latParty},${longParty}`;
    } else {
      url = `https://www.google.com/maps/search/?api=1&query=${latParty},${longParty}`;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };


  return (
    <>
      <main className={styles.container}>
        <div className={styles.background}>
          <Image src={bodaImage} alt="Fondo boda" fill className={styles.bgImage} placeholder="blur" priority  />
        </div>

 <p className={`${styles.pNameImage} ${roboto.className}`}>Nuestra boda</p>

 {<div className={styles.contador}>
          <div className={styles.boxContador}>
            <p className={styles.pNumber}>{timeLeft.days}</p>
            <p>Días</p>
          </div>
          <div className={styles.boxContador}>
            <p className={styles.pNumber}>{timeLeft.hours}</p>
            <p>Horas</p>
          </div>
          <div className={styles.boxContador}>
            <p className={styles.pNumber}>{timeLeft.minutes}</p>
            <p>Minutos</p>
          </div>
          <div className={styles.boxContador}>
            <p className={styles.pNumber}>{timeLeft.seconds}</p>
            <p>Segundos</p>
          </div>
        </div> }
        
      </main>

      <div className={`${styles.pInvitacionContainer} ${roboto.className}`}>

<Image src="/assets/icons/Invitación Melissa&Olger-02.png" alt="Iglesia" fill className={styles.iconNames} />


        <p className={`${montserrat.className} ${styles.pInvitationCustom}`}>
        Tenemos el gusto de invitarte a celebrar el día más especial de nuestras vidas.
        </p>
      </div>

      <div className={styles.waves}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fbfaf4" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <div className={styles.detalles}>
        <p className={`${montserrat.className} ${styles.pInformacion}`}>Nuestros Momentos</p>
        <Appgallery />
      </div>


 
 <div className={`${styles.customAlign} ${styles.marginBottomCustom}`}>
<p className={`${montserrat.className} ${styles.pTituloEventos}`}>Eventos</p>
 {/* <div className={styles.contador}>
          <div className={styles.boxContador}>
            <p className={styles.pNumber}>{timeLeft.days}</p>
            <p>Días</p>
          </div>
          <div className={styles.boxContador}>
            <p className={styles.pNumber}>{timeLeft.hours}</p>
            <p>Horas</p>
          </div>
          <div className={styles.boxContador}>
            <p className={styles.pNumber}>{timeLeft.minutes}</p>
            <p>Minutos</p>
          </div>
          <div className={styles.boxContador}>
            <p className={styles.pNumber}>{timeLeft.seconds}</p>
            <p>Segundos</p>
          </div>
        </div> */}
        

<Image src="/assets/icons/Invitación Melissa&Olger-10.png" alt="Iglesia" fill className={styles.iconEvents} />
<Image src="/assets/icons/Invitación Melissa&Olger-03.png" alt="Iglesia" fill className={styles.iconsCustom2} />
<Image src="/assets/icons/Invitación Melissa&Olger-06.png" alt="Iglesia" fill className={styles.iconHora} />

<p  className={`${montserrat.className} ${styles.pCustomEvents}`}><span className={styles.titleCustom}>CEREMONIA RELIGIOSA</span><br></br> Parroquia San Rafael<br></br> Arcángel, Oreamuno</p>


       <a onClick={openLocation}
   rel="noopener noreferrer"
   className={`${styles.btnconfirmacion2}`}>
   Ubicación
</a>

<div className={`${styles.line}`}></div>

<Image src="/assets/icons/Invitación Melissa&Olger-04.png" alt="Iglesia" fill className={styles.iconsCustom2} />
<Image src="/assets/icons/Invitación Melissa&Olger-05.png" alt="Iglesia" fill className={styles.iconHora} />

<p  className={`${montserrat.className} ${styles.pCustomEvents}`}><span className={styles.titleCustom}>RECEPCIÓN</span><br></br> Sala de eventos Los Novios</p>
       <a onClick={openLocationParty}
   rel="noopener noreferrer"
   className={`${styles.btnconfirmacion2}`}>
   Ubicación
</a>
      </div>

      <div className={`${styles.Confirmar}`}>
       <p className={`${montserrat.className}`}>CONFIRMAR ASISTENCIA ANTES DEL 31 DE DICIEMBRE</p>

       <a href="https://forms.gle/LH5XsEA9Xxs58sDu7"
   target="_blank"
   rel="noopener noreferrer"
   className={`${styles.btnconfirmacion}`}>
   Confirmar asistencia
</a>
      </div>

      <div className={`${styles.containerClothing}`}>

        <Image src="/assets/icons/Invitación Melissa&Olger-07.png" alt="Iglesia" fill className={styles.iconsCustom2} />
        <p className={`${styles.containerClothingP}`}>COLORES RESERVADOS PARA NOVIOS</p>

        <div className={`${styles.circulos}`}>
  <div className={`${styles.item}`}>
    <div className={`${styles.circulo } ${styles.blanco}`}></div>
    <span>BLANCO</span>
  </div>

  <div className={`${styles.item}`}>
    <div className={`${styles.circulo} ${styles.azul}`}></div>
    <span>AZUL<br></br>MARINO</span>
  </div>
</div>

 <p className={`${styles.containerClothingP}`}>CÓDIGO DE VESTIMENTA FORMAL</p>

  <p className={`${styles.containerClothingPP}`}>Agradecemos de antemano su apoyo
respetando <br /> el código de vestimenta.</p>

      </div>

     <Image src="/assets/icons/Invitación Melissa&Olger-08.png" alt="Iglesia" fill className={styles.iconMsj} />

     <div className={`${styles.containerLastMsj}`}>
      <Image src="/assets/icons/Invitación Melissa&Olger-09.png" alt="Iglesia" fill className={styles.iconLastMsj} />

      <p className={`${styles.containerLastPP}`}>Lo más importante para nosotros será contar
con su grata presencia en este día tan especial.
Si desean brindarnos un detalle, agradeceremos
su aporte económico el día del evento</p>
     </div>
    </>

  
  );
}
