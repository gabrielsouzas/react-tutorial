import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'))

// Criação de um elemento React sem JSX
// const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')

// Criação de um elemento React com JSX
// const heading = <h1 className="site-heading">Hello, React</h1>

/*
Explicação breve de como funciona o JSX:

* className é usado ao invés de class para adicionar classes CSS, porque class é uma palavra reservada do JavaScript.
* Propriedades e métodos JSX são camelCase, por exemplo, onclick se transforma em onClick.
* As tags de fechamento automático devem terminar em uma barra - e.g. <img />

Expressões JavasScript podem ser usadas dentro de JSX:

const name = 'Tania'
const heading = <h1>Hello, {name}</h1>

*/

