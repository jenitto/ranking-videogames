# Ranking Videogames
Este es un proyecto de ejemplo, no tiene el objetivo de ser una app real.

Proyecto de prueba con React. El objetivo de este proyecto es de entrenamiento, para probar a conectarse a una base de datos en Firebase, lanzar peticiones con Axios a una API pública [RAWG API](https://rawg.io/apidocs), probar la suite de componentes de [Material UI](https://material-ui.com/es/), skeletons, lazy loading de imágenes y el drag and drop de Atlassian.

## Live app
[Live app](https://rank-videogames.netlify.app)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## i18n - Internacionalización

**Generar archivo de diferencias entre español e inglés para traducir**

Para generar las cadenas pendientes de traducir hay que lanzar el siguiente comando, y este nos generará en src/scripts/i18n el archivo valuesToTranslate.json, que será enviado a traducir.
```
npm run i18n-diff
```

**Insertar las cadenas traducidas**

Una vez tengamos el fichero valuesToTranslate.json traducido, lo colocaremos en el mismo sitio donde se ha generado y utilizaremos el siguiente comando para que automáticamente inserte las cadenas traducidas en el fichero de traducciones.
```
npm run i18n-merge
```

Después de este paso es necesario reordenar alfabéticamente utilizando la extensión de vscode "Sort JSON objects":
```
Shift+Ctrl+P: Sort JSON
```
