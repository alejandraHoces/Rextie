# RETO REXTIE  

Rextie es un servicio de cambio de dólares por internet (www.rextie.com) registrado
Como casa de cambio en la Superintendencia de Banca, Seguros y AFP (SBS). Está
dirigido a personas, pequeñas y medianas empresas.  

#### ENUNCIADO:
Proponer un nuevo diseño de la aplicación web (zona privada) que facilite a los
usuarios realizar una cotización y operación de cambio de dólares.  

Dado este contexto:  

**→ ¿Cómo hacer para crear un diseño más intuitivo y que a su vez mejore la experiencia en la web de Rextie?**  

## RESEARCH  

### Actividades de Investigación realizada con los usuarios.  
**Investigación del usuario -  Información Clave**  
- Nuestra parte interesada creó esta aplicación para que las personas puedan realizar el cambio de moneda de manera rápida, sencilla y segura, sin embargo no muchos usuarios logran completar la transacción.  
- Los usuarios no estas familiarizados con el cambio de moneda vía web, ellos prefieren hacerlo de forma presencial porque eso es lo que ellos conocen.  
- Los usuarios necesitan poder realizar su cambio de moneda con una guía constante ya que el servicio es nuevo para ellos.  
- La pantalla de confirmación de datos de la operación y registro de cuenta en la web de Rextie existente no es intuitiva.  

**Prueba de usabilidad con la web actual**

Se realizaron pruebas a 5 personas a las cuales se les pidió que utilicen la web de Rextie y contaran sus experiencias para esta prueba se utilizó la técnica **Thinking Aloud Testing**.  

###### *Definición: En una prueba de pensamiento en voz alta, le pides a los participantes de la prueba que usen el sistema mientras piensan continuamente en voz alta, es decir, simplemente verbalizan sus pensamientos a medida que se mueven a través de la interfaz de usuario.*  

**Se les pidió que realicen las siguientes actividades:**  

- Registrarse e ingresar a la web de Rextie.  
- Realizar una cotización tanto en soles como dólares.  
- Registrar una cuenta bancaria personal y de terceros.  
- Identificar la cuenta a la que realizaran la transferencia.  
- Finalizar la transacción.

**→ Usuario 1: Giancarlos CF.**  
- No entendía la utilidad del boton que realizaba el cambio de moneda.  
- No tenia claro por que le decian que ahorraria dinero con respecto a el cambio de otros bancos.  

**→ Usuario 2: Angela HÑ.**  
- No supo cuando era venta o compra.  
- No entendía donde era el cambio de moneda.  

**→ Usuario 3: Rodrigo HÑ.**  
- No supo que debia hacer la transferencia en otra cuenta.  
- Tuvo que probar un par de veces para saber que quería decir “Quiero” y “Tengo”.  

**→ Usuario 4: Yenni Q.**  
- Tardo en entender cómo hacer una cambio en viceversa dólares - soles.  
- No comprendió que necesitaba dos cuentas bancarias: una cuenta de soles y otra de dólares.  

**→ Usuario 5: Irma ÑV.**  
- No se muestra con claridad la cuenta a la que se tiene que realizar la transferencia del dinero.  
- No comprendia que tenia que realizar el deposito por su cuenta pensaba que se la descontaban automaticamente.  

### Análisis de la arquitectura de la información de la web de Rextie.  
En el siguiente esquema, se analizó la información de la web de Rextie que se muestra al usuario.  
![rectangle 3](https://user-images.githubusercontent.com/31807340/37680825-0b3714e0-2c53-11e8-9ce0-acdbf561ce4b.png)  
[Ver con detalle](https://drive.google.com/drive/my-drive)  

## SINTESIS  

#### Problemas principales  
Según las entrevistas y el análisis del sitemap se encontraron los siguientes problemas a solucionar.  

**1.Vista nueva operación**  
- No se muestra de forma clara cuándo es compra y cuando es venta.  
- No se identifica el botón de cambio de moneda no es clara su utilidad.  

**2.Opcion de registro**  
- No se tiene claro desde el inicio que tiene que registrar cuenta en soles y dólares.  
- El registro de cuentas solo permite hacerlo uno por uno de forma individual.  

**3.Opcion de Selección de cuentas (Origen/Destino)**  
- Al seleccionar cuenta de origen no hay una guía que le indique al usuario que es la cuenta de la que se realizara la transferencia.  
- Al seleccionar la cuenta de destino hay una guía que le indique al usuario que tiene que añadir otra cuenta y de diferente denominación de la que transfirió.  

**4.Notificacion de la operación**  
- Al mostrar el mensaje de últimos pasos de la operación no se muestra con claridad la cuenta a la que se tiene que realizar la transferencia del dinero.  
- Al inicio de la notificación aparece el código de operación eso da a entender al usuario que la operación ha culminado.  

### User Personas  
Creamos un par de "personajes" ficticios para organizar y descubrir patrones en los objetivos, comportamientos y puntos débiles del usuario. Cada uno de ellos representa un tipo de usuario, que podría abordar uno de los problemas que vamos resolver.  

![rextie 16](https://user-images.githubusercontent.com/31807340/38168690-0d4c9bae-351a-11e8-889f-2185d88c678a.png)

## SOLUCIÓN  

### Prototipo de alta fidelidad (Versión 1)  
Con toda la información de la investigación realizada rediseñamos la web de Rextie manteniendo su esencia y haciéndolo mas intuitivo  
[Ver prototipo aquí!](https://marvelapp.com/3bi16f0)  

**Pantalla Inicial**  
Se añadió una vista de bienvenida amigable para el usuario esta se muestra después del registro.  
En la segunda vista se muestra de forma más visible cuando se realiza una operación de compra o venta.

![37799726-98c252d8-2dee-11e8-9307-c1f55b3aaae5](https://user-images.githubusercontent.com/31807340/38168169-b52a1a64-350a-11e8-8327-ccb0499d2b9f.png)  

**Vista confirmación de datos**  
Se añadió el mensaje que especifica que se debe agregar cuentas tanto en dólares como en soles.
![desktop 6](https://user-images.githubusercontent.com/31807340/37800608-71a41206-2df1-11e8-84c0-0eb55982c007.png)  

**Vista añadir terceros**  
Se añadió una alerta que le permite al usuario añadir una cuenta más, así recuerda que debe añadir dos cuentas.
![desktop 7](https://user-images.githubusercontent.com/31807340/37801687-8303770e-2df5-11e8-9124-fde8993d1a8e.png)  

**Vista modal confirmación**  
En la vista de notificación se utilizó un lenguaje amigable para que el usuario pueda comprender con facilidad en que cuenta debe realizar la transferencia de dinero.
![desktop 8](https://user-images.githubusercontent.com/31807340/37802057-e57a4f4c-2df6-11e8-945a-8071d87e2a3f.png)


