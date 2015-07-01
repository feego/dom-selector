/**
 *
 * Registration of polymer dom-selector custom element.
 * ECMAScript 6 - using BabelJS traspiler.
 */
Polymer('dom-selector', {
	attached() {
        this.bindChildren = (this.children.length == 1) ? this.children[0] : this.children
    }
})