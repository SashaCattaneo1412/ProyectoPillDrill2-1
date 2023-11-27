  import React from 'react';
  import { useRouter } from 'next/router';
  import style from '../styles/compartimiento.module.css';
  import Header from '../components/Header.jsx';
  import Image from 'next/image.js';

  function Compartimiento() {
    const router = useRouter();
    const sessionData = router.query.sessionData ? JSON.parse(router.query.sessionData) : null;
    

    console.log(sessionData)

    const compartimento1 = async (e) => {
      e.preventDefault();
      
      
      // Definir compartimento aquí o donde sea necesario
      const compartimento = '1';
      router.push({
        pathname: '/compartimento1',
      
      });

      
     
      try {
        const response = await fetch('http://localhost:5000/compartimento1');
        
        if (response.ok) {
          console.log('Se guardó la información correctamente');
          
        } else {
          console.error('Error en la solicitud');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    
    const compartimento2 = async (e) => {
      e.preventDefault();
      
      // Definir compartimento aquí o donde sea necesario
      const compartimento = '2';
      router.push('/compartimento2');
      try {
        const response = await fetch('http://localhost:5000/compartimento2');
        
        if (response.ok) {
          console.log('Se guardó la información correctamente');
         
        } else {
          console.error('Error en la solicitud');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    
    const compartimento3 = async (e) => {
      e.preventDefault();
      
      // Definir compartimento aquí o donde sea necesario
      const compartimento = '3';
      router.push('/compartimento3');
      try {
        const response = await fetch('http://localhost:5000/compartimento3');
        
        if (response.ok) {
          console.log('Se guardó la información correctamente');
          
        } else {
          console.error('Error en la solicitud');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    const compartimento4 = async (e) => {
      e.preventDefault();
      
      // Definir compartimento aquí o donde sea necesario
      const compartimento = '4';
      router.push('/compartimento4');
      try {
        const response = await fetch('http://localhost:5000/compartimento4');
    
        if (response.ok) {
          console.log('Se guardó la información correctamente');
         
        } else {
          console.error('Error en la solicitud');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    return (
      <form>
        <Header />
        <h1 className={style.title}>Seleccione el compartimiento</h1>
        <div className={style.container}>
          <div className={style.containerimg}>
          <Image style={{ position: 'absolute', top: '-10px', left: '750px' }} width={60} height={60} src="/Image/circulo.png" alt="LOGO" />
      <Image style={{ position: 'absolute', top: '400px', left: '5px' }} width={60} height={60} src="/Image/circulo.png" alt="LOGO" />
       <Image style={{ position: 'absolute', top: '400px', right: '5px' }} width={60} height={60} src="/Image/circulo.png" alt="LOGO" />
       <Image style={{ position: 'absolute', bottom: '-10px', left: '750px' }} width={60} height={60} src="/Image/circulo.png" alt="LOGO" />
            <div className={style.button1} onClick={compartimento1} />
          
            <br />
            
            <div className={style.button2} onClick={compartimento2} />
            </div>
            <br />
        
          <div className={style.containerimg}>
            
          <div className={style.button3} onClick={compartimento3} />
            
            <br />
            <div className={style.button4} onClick={compartimento4} />
            <br />
          </div>
        </div>
      </form>
    );
  }

  export default Compartimiento;