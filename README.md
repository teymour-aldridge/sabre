# Sabre
A small CSS framework. 
# Installation
### Loading Sabre from a CDN.
**Production URL**

Use this for production environments.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/teymour-aldridge/sabre@master/styles.min.css">
```
**Development URL (not suited for production environments).**

This link automatically gives you the latest version of Sabre – which may contain bugs.
The file is also not automatically minified, for easier debugging, so it is slower to load.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/teymour-aldridge/sabre/styles.css">
```
### Hosting Sabre yourself.
You can <a href="https://cdn.jsdelivr.net/gh/teymour-aldridge/sabre/sass/styles.min.css" download>download sabre.min.css</a> and host it yourself.

# Project structure
### Code
```
sass/
    base/
        variables.scss # Stores the sass variables.
    colours/
        colours.scss # Basic colour classes 
    
        
    styles.scss # The default styles
    styles.css # The default styles, compiled
```
### Documentation
The `docs` folder is a misnomer, as it doesn't store the documentation. The documentation is stored in a separate repository and available at [https://sabrecss.netlify.com]([https://sabrecss.netlify.com]). 

Instead, the docs folder stores example code which exhibits the functionality of Sabre.

# Contribution
Any contributions are welcome, whether to the scss code, documentation or examples.

# Roadmap
- Write javascript code
    - Interfaces to mithril.js (a javascript client side framework).
    - A JS library to enable interactive functionality.