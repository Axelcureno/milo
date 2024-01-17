// Wed, 17 Jan 2024 01:24:57 GMT
import{LitElement as s,html as i,css as r}from"/libs/deps/lit-all.min.js";var e=class extends s{static properties={src:{},size:{type:String,attribute:!0,reflect:!0}};constructor(){super(),this.size="m"}render(){let t=this.closest("merch-card").querySelector('div[slot="body-xs"]').querySelector('a[href$="#mnemonic-link"]');return t&&(t.href=t.href.replace("#mnemonic-link","")),t?i`<a href="${t.href||"#"}">
                  <img src="${this.src}" alt="${this.alt}" loading="lazy" />
                  />
              </a>`:i` <img src="${this.src}" alt="${this.alt}" loading="lazy" />`}static styles=r`
        :host {
            --img-width: 32px;
            --img-height: 32px;
            display: contents;
        }

        :host([size='s']) {
            --img-width: 24px;
            --img-height: 24px;
        }

        :host([size='l']) {
            --img-width: 40px;
            --img-height: 40px;
        }

        img {
            width: var(--img-width);
            height: var(--img-height);
        }
    `};customElements.define("merch-icon",e);export{e as default};
//# sourceMappingURL=merch-icon.js.map
