import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

//import './bace/01-const-let';
//import './bace/02-object';
//import './bace/03-arrays';
//import './bace/04-funcions';
//import './bace/05-deses-obj';
//import './bace/06-deses-arr';
//import './bace/07-imp-exp';
//import './bace/08-promises';
//import './bace/09-fetch-api';
//import './bace/10-axios';
import './bace/11-async-await';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`