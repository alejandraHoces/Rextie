import React from 'react';
import UserInfo from './userInfo.js';
import NavigationOptionsList from './navigationOptionsList.js';
import { Link } from 'react-router-dom';

const data = {
  personalInfo: { title: 'Cuenta Personal', otherInfo: [['DNI:', 78451235], ['Ponte', 'Ana']] },
  // userOptions: [
  //   ['boton-de-reproduccion.png', 'Nueva Operación'],
  //   ['usuario-hombre.png', 'Información Personal'],
  //   ['pago-con-tarjetas-de-credito.png', 'Cuentas Bancarias Registradas'],
  //   ['historial-de-navegacion-simbolo-de-interfaz-de-un-reloj-con-una-flecha.png', 'Historial de Operaciones'],
  //   ['pago-con-tarjetas-de-credito.png', 'Cuentas Bancarias de Rextie'],
  //   ['logout.png', 'Salir']
  // ]
  // userOptions: ['Nueva Operación', 'Información Personal', 'Cuentas Bancarias Registradas', 'Historial de Operaciones', 'Cuentas Bancarias de Rextie', 'Salir'],
  // icons: ['boton-de-reproduccion.png', 'usuario-hombre.png', 'pago-con-tarjetas-de-credito.png', ,'historial-de-navegacion-simbolo-de-interfaz-de-un-reloj-con-una-flecha.png', 'logout.png']
  menuOptions : [
    { route: '/', icon: 'boton-de-reproduccion.png', text: 'Nueva Operación' },
    { route: '', icon: 'usuario-hombre.png', text: 'Información Personal' },
    { route: '', icon: 'pago-con-tarjetas-de-credito.png', text: 'Cuentas Bancarias Registradas' },
    { route: '/historial', icon: 'historial-de-navegacion-simbolo-de-interfaz-de-un-reloj-con-una-flecha.png', text: 'Historial de Operaciones' },
    { route: '/bank-rextie', icon: 'pago-con-tarjetas-de-credito.png', text: 'Cuentas Bancarias de Rextie' },
    { route: '', icon: 'logout.png', text: 'salir' },
  ]
}

const Aside = () => (
  <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-3">
    <div className="aside">
      <UserInfo title={data.personalInfo.title} otherInfo={data.personalInfo.otherInfo} />
      <NavigationOptionsList menuOptions = {data.menuOptions}/>
      {/* <ul>
        <li><Link to='/'>Nueva Operación</Link></li>
        <li><Link to='/historial'>Historial de Operaciones</Link></li>
        <li><Link to='/bank-rextie'>Cuentas Bancarias de Rextie</Link></li>
      </ul> */}
    </div>
  </div>
)

export default Aside;

// icons={data.icons}