#dom-selector
**This element is compatible with Polymer 0.5 and lower only.**  
Polymer element that binds its children to one attribute of its own.

#### Installation

```
bower install feego/dom-selector
```

#### Usage

```html
<!-- childrenElements will contain an array -->
<dom-selector bindChildren="{{childrenElements}}">
    <div id="divOne"></div>
    <div id="divTwo"></div>
</dom-selector>

<!-- childrenElements will contain the div#divOne DOM object -->
<dom-selector bindChildren="{{childrenElements}}">
    <div id="divOne"></div>
</dom-selector>
```

#### Compile ES2015 source files

```
npm install babel-loader
webpack ./harmony/src/dom-selector.js ./harmony/build/build.js --module-bind "js=babel?stage=0"
```

#### License

The MIT License (MIT)

Copyright (c) 2015 GlazedSolutions
