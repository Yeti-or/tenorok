# tenorok

Tenorok is a building block of [bem_entity](https://github.com/bem-contrib/bem-entity)

Valid tenoroks: 
```js
{ block: 'Awesome' }
{ block: 'Awesome', elem: 'BEM' }
{ elem: 'Super' }
{ block: 'Awesome', modName: 'Batman' }
{ modName: 'Batman' }
{ modName: 'Batman', modVal: 'Robin' }
```

Usage:
```es6
import Tenorok from '../lib';
const tenorok = new Tenorok({elem:'Tenorok', modName: 'Is', modVal: 'Awesome'});

console.log(tenorok.toString()); // '&__Tenorok_Is_Awesome'
```
