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
      "name": "whatsapp-button",
      "version": "0.0.1",
      "title": "Whatsapp Button Component",
      "description": "Botón de componente para whatsApp "
     
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
    
  ```
 ### 6. Llama tu componente
 
 Este componente tiene como funcion de tener un estilo similar al de un slider, por lo siguiente donde vas a ubicar el componente crearas las siguientes funciones: 
 
 *  ### *Paso 1*: *Crea una cadena `flex-layout` .
 
 ```json
     "flex-layout.row#section_global--bullet": {
    "children": ["flex-layout.col#section_bullet"]
  }
  ```
 *  ### *Paso 2*: *llamael componente* `list-context.bullet-group`
 ```json
     "flex-layout.col#section_bullet": {
    "children":[
        "list-context.bullet-group"
    ]
  }
 ```
 * ### *Paso 3* : *En el `bullets` añadiras el numero de imagenes que tu proyecto requiera.*
  ```json
"list-context.bullet-group": {
    "title": "Lista de bullets",
    "children": ["slider-layout#bullet-group"],
    "props": {
      "blockClass": "slider_custom--bullet",
      "bullets": [
        {
          "image": "assets/img/logo-bretas-400.jpg",
          "titleBullet": "",
          "link": {
            "url": "/"
          }
        }
       ]
     }
   },
    "slider-layout#bullet-group": {
    "props": {
      "inifinite": true,
      "showPaginationDots": "never",
      "blockClass": "slider_custom--bullet-group",
      "itemPerPage": {
        "desktop": "4",
        "tablet": "4",
        "mobile": "3"
      },
      "autoplay": {
        "timeout": 3000,
        "stopOnHover": true
      },
      "arrowSize": 40
    }
  }
 ```
 *La propiedades del slider podras encontrarlas en* [Slider Layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout "Slider Layout")
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
  
  # Creditos
  ## Fernando Pachon
