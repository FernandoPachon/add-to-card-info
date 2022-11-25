# Add To Cart Info

Este componente utilizo el [Template custom](http://https://github.com/vtex-apps/react-app-template "Template custom") que nos ofrece Vtex U, con esta estructura se han podido crear el componente de Bullets Diagramation

![](https://github.com/FernandoPachon/component-custom-add-to-card-info/blob/main/assets/add-to-cart.png?raw=true)


# Configuración

### 1. Clona este repositorio.

   Puedes utilizar este repositorio como guia para crear tu componente, clonalo y sigue las instrucciones.

### 2. Editar 'manifest.json'.

   En el `manifest.json` cambiaras el `"vendor"` por el de tu Partner.
   
       
   ```json
    
      "vendor": "itgloberspartnercl",
      "name": "add-to-cart-info",
      "version": "0.0.1",
      "title": "Add to cart info",
      "description": "Componente que da informacion en el cart",
     
  ```
  
 *Ten encuenta la version, esta puede cambiar a la fecha de este repositorio ser creado.*
 
 ### 3. Instala directorios
 
 Usando `yarn` en la consola puedes realizar las instalaciones de los directorios necesarios, recuerda instalarlos en la carpeta `react`, si tienes problemas con las dependencias prueva usando el comando `vtex setup` en la consola.
   
### 4. Linkea el componente custom

Antes de poder renderizar el componente en tu store theme debes ejecutar el comando `vtex link`, esto instalara en tu workspace los componentes custom.

`info: Sending locale change event vtex.builder-hub@0.285.4`

*debes ver esto en la consola al final de la ejecucion del `vtex link`*

### 5. Agrega el componente

En el archivo `manifest.json` agregaras el componente correspondiente , recuerda que debes colocar tu partner antesdel `.whatsap-button"`

 ```json
    "itgloberspartnercl.whatsapp-button": "0.x",
    "itgloberspartnercl.bullets-diagramation": "0.x",
    "itgloberspartnercl.add-to-cart-info": "0.x",
    
  ```
 ### 6. Llama tu componente
 
 Este componente tiene como funcion que atravez de un evento nos imprima la lista de compras y dos elecciones: 
 
 *  ### *Paso 1*: *Crea un `modal-trigger`donde se llamara este componente*.
 
 ```json
    "modal-trigger#add-to-cart-info": {
      "children": [
        "modal-layout#add-to-cart-info"
      ],
      "props": {
        "customPixelEventName": "addToCart"
      }
    }
  ```
 *  ### *Paso 2*: *llama el componente* `add-to-cart-info`*dentro del evento*`modal layout`
 ```json
    "modal-layout#add-to-cart-info": {
      "children": [
        "modal-header#add-to-cart-info",
        "add-to-cart-info"
      ]
    },
 ```
 * ### *Paso 3* : *Agrega las propiedades correspondientes*
  ```json
"modal-header#add-to-cart-info":{
      "props":{
        "showCloseButton": true,
        "iconCloseSize": 24
      }
    }
 ```
 *La propiedades del modal podras encontrarlas en* [Modal Layout](http://https://developers.vtex.com/vtex-developer-docs/docs/vtex-modal-layout "Modal Layout").
 
 ### 7. Linkea tu Store Theme
 
 Como ultimo paso, en la consola de tu trabajo base usa el comando  `vtex ls` con el fin de ver que este correctamente instalado tu componente custom, debes poder visualizar tus componentes instalados.
 
  ```json
    Linked Apps in itgloberspartnercl at workspace fernandopachon
    itgloberspartnercl.add-to-cart-info           0.0.1
    itgloberspartnercl.bullets-diagramation       0.0.1
    itgloberspartnercl.custom-department-search   0.0.1
    itgloberspartnercl.store-theme                0.0.1
    itgloberspartnercl.whatsapp-button            0.0.1 
  ```
  Cuando puedas ver tu componente custom, envia un `vtex link` en tu consola.
  
   ### Los estilos de este componente se editan desde el archivo `styles.css` en la carpeta `components` de `react`, ten encuenta que las clases ya estan definidas, puedes encontrarlas facilmente en los archivos TypeScript o desde el brower inspeccionando la ventana.
  
  # Creditos
  ## Fernando Pachon
