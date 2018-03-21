import React from 'react';
import UserInfo from './userInfo.js';
import NavigationOptionsList from './navigationOptionsList.js';

const data = {
  personalInfo: {title: 'Cuenta Personal', otherInfo: [['DNI:', 78451235], ['Ponte', 'Ana']]},
  userOptions: [
    ['boton-de-reproduccion.png', 'Nueva Operación'], 
    ['usuario-hombre.png', 'Información Personal'], 
    ['pago-con-tarjetas-de-credito.png', 'Cuentas Bancarias Registradas'], 
    ['historial-de-navegacion-simbolo-de-interfaz-de-un-reloj-con-una-flecha.png', 'Historial de Operaciones'], 
    ['pago-con-tarjetas-de-credito.png', 'Cuentas Bancarias de Rextie'],
    ['logout.png', 'Salir']
  ]
  // userOptions: ['Nueva Operación', 'Información Personal', 'Cuentas Bancarias Registradas', 'Historial de Operaciones', 'Cuentas Bancarias de Rextie', 'Salir'],
  // icons: ['boton-de-reproduccion.png', 'usuario-hombre.png', 'pago-con-tarjetas-de-credito.png', ,'historial-de-navegacion-simbolo-de-interfaz-de-un-reloj-con-una-flecha.png', 'logout.png']
}

const Aside = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-3">
          <UserInfo title={data.personalInfo.title} otherInfo={data.personalInfo.otherInfo}/>
          <NavigationOptionsList options={data.userOptions}/>
        </div>
      </div>
    </div>
  ) 
}

export default Aside;

// icons={data.icons}