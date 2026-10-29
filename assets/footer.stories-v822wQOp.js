import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{a as n,f as r,i,l as a,n as o,o as s,r as c,s as l}from"./iframe-B6ZPA86g.js";import{n as u,r as d,t as f}from"./state-CvXktEa2.js";function p(){return(p=e((()=>{a(),l(),i()})))()}var m;function h(){return(h=e((()=>{m=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n)})))()}function g(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return m(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter(e=>e.matches(i))}})}}function _(){return(_=e((()=>{h()})))()}function v(){return(v=e((()=>{u(),f(),_()})))()}var y,b,x;function S(){return(S=e((()=>{y={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},b=e=>(...t)=>({_$litDirective$:e,values:t}),x=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}var C;function w(){return(w=e((()=>{l(),S(),C=b(class extends x{constructor(e){if(super(e),e.type!==y.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let n=!!t[e];n===this.st.has(e)||this.nt?.has(e)||(n?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return n}})})))()}function T(){return(T=e((()=>{w()})))()}function E(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var D,O,k;function A(){return(A=e((()=>{p(),v(),T(),D=`@layer base;:host{display:block}.footer{display:block;container-type:inline-size}.section-container{padding-top:1.875rem;padding-bottom:1.875rem;padding-left:var(--ilw-footer-padding-left);padding-right:var(--ilw-footer-padding-right)}.site.section-container{background-color:var(--il-storm-lighter-4);color:var(--il-blue);border-top:.5rem solid var(--il-blue);padding-bottom:2.125rem}.site.section,.campus.section,.legal.section{margin:0 var(--ilw-margin--side,0)}.section-grid{grid-gap:27px;grid-template-columns:auto;grid-template-areas:"site-name""contact""actions""content";grid-auto-rows:auto auto auto auto;display:grid}.section-grid--no-action{grid-template-areas:"site-name""contact""content";grid-auto-rows:auto auto auto}.section-grid .contact{grid-area:contact}.section-grid .site-name{grid-area:site-name}.section-grid .actions{grid-area:actions;justify-self:start}.section-grid .content{grid-area:content}.campus.section-container{background-color:var(--il-blue);color:#fff;border-top:.5rem solid var(--il-orange)}.campus .logo{margin:0;padding:.75rem .25rem 3.75rem;position:relative}.campus .logo a{width:9.4375rem;height:1.5625rem;display:block;position:relative}.campus .logo a:hover{outline:2px dotted}.campus .logo a:focus svg .illinois,.campus .logo a:focus svg .outline{fill:var(--il-blue)}.campus .logo svg{width:100%;height:100%;display:block;position:relative}.campus svg .illinois{fill:#fff}.campus svg .block-i .fill{fill:var(--il-orange)}.campus svg .block-i .outline{fill:#fff}.campus .sections{grid-gap:2rem 1.25rem;grid-template-columns:1fr;display:grid}@container (width>=650px){.campus .sections{grid-template-columns:1fr 1fr}}@container (width>=1200px){.campus .sections{grid-template-columns:1fr 1fr 1fr}}.campus h3{font:600 1.5rem/1.5 var(--il-font-sans);margin:0 0 .5rem;padding:0}.campus ul{margin:0;padding:0;list-style:none}.campus li{margin:0;padding:.5rem 0;list-style:none}.campus a{color:#fff;font:400 1.125rem/1.5rem var(--il-font-sans);text-decoration:none}.campus a:hover,.campus a:focus{text-decoration:underline}.campus a:hover{color:var(--il-orange)}.campus a:focus{fill:var(--ilw-link--focus-color);background-color:var(--ilw-link--focus-background-color);outline:var(--ilw-link--focus-outline);color:var(--il-blue)}.legal.section-container{background-color:var(--il-blue);color:#fff;border-top:.5rem solid var(--il-industrial-darker-2)}.legal a{color:#fff;font:400 1rem/1 var(--il-font-sans);padding:.3125rem;text-decoration:underline;display:block}.legal a:hover{outline:2px dotted}.legal a:focus{fill:var(--ilw-link--focus-color);background-color:var(--ilw-link--focus-background-color);outline:var(--ilw-link--focus-outline);color:var(--il-blue)}.cookies-button-and-links{flex-direction:column;justify-content:flex-start;align-items:center;gap:1.875rem;display:flex}@container (width>=600px){.cookies-button-and-links{flex-direction:row}}@container (width>=960px){.section-grid{grid-template-columns:1fr 2fr;grid-template-areas:"site-name actions""contact content";grid-auto-rows:auto auto}.section-grid--no-action .content{grid-area:1/2/4/2}.section-grid .actions{justify-self:end}button[slot=cookies-button],a[slot=cookies-button],.ot-sdk-show-settings{background-color:var(--il-industrial-darker-2);color:#fff;font:700 1.188rem / 1.25rem var(--il-font-sans);text-align:center;letter-spacing:.01em;cursor:pointer;border:2px solid #fff;border-radius:.25em;margin:6px 0;padding:12px 20px;text-decoration:none;transition:background-color .3s;display:inline-block}:is(button[slot=cookies-button],a[slot=cookies-button],.ot-sdk-show-settings):visited{background-color:var(--ilw-button--background-color);color:var(--ilw-button--foreground-color);border:2px solid var(--ilw-button--border-color);outline:0}:is(button[slot=cookies-button],a[slot=cookies-button],.ot-sdk-show-settings):hover{color:var(--il-blue);background-color:#fff;outline:0;text-decoration:underline}:is(button[slot=cookies-button],a[slot=cookies-button],.ot-sdk-show-settings):focus{background-color:var(--ilw-link--focus-background-color);color:var(--ilw-link--focus-color);border-color:var(--ilw-link--focus-color);outline:var(--ilw-link--focus-outline);text-decoration:underline}:is(button[slot=cookies-button],a[slot=cookies-button],.ot-sdk-show-settings):active{background-color:var(--ilw-button--active-background-color);color:var(--ilw-button--active-color);border-color:var(--ilw-button--active-border-color);outline:solid var(--ilw-button--active-border-color) 2px}}`,O=s`<svg role="img" viewBox="0 0 151 26" xmlns="http://www.w3.org/2000/svg">
    <title>Illinois</title>
    <g class="block-i">
      <path class="outline" d="M17.89,6.96V0H0v6.96h3.98v11.93H0v6.96h17.89v-6.96h-3.98V6.96H17.89z M13.91,19.88h2.98v4.97H0.99v-4.97
h2.98c0.55,0,0.99-0.45,0.99-0.99V6.96c0-0.55-0.45-0.99-0.99-0.99H0.99V0.99h15.9v4.97h-2.98c-0.55,0-0.99,0.44-0.99,0.99
v11.93C12.92,19.43,13.36,19.88,13.91,19.88"/>
      <path class="fill" d="M13.91,5.96h2.98V0.99H0.99v4.97h2.98c0.55,0,0.99,0.44,0.99,0.99v11.93c0,0.55-0.45,0.99-0.99,0.99H0.99
v4.97h15.9v-4.97h-2.98c-0.55,0-0.99-0.45-0.99-0.99V6.96C12.92,6.41,13.36,5.96,13.91,5.96"/>
    </g>
    <g class="illinois">
      <path d="M31.89,22.43V3.52h4.16v18.91H31.89z"/>
      <path d="M40.99,22.43V3.52h4.16v15.13h9.43v3.78H40.99z"/>
      <path d="M57.62,22.43V3.52h4.16v15.13h9.43v3.78H57.62z"/>
      <path d="M74.35,22.43V3.52h4.16v18.91H74.35z"/>
      <path d="M96.71,22.43l-9.16-12.02v12.02h-4.11V3.52h3.84l8.86,11.64V3.52h4.11v18.91H96.71z"/>
      <path d="M114.21,22.76c-5.83,0-10.02-4.35-10.02-9.72v-0.05c0-5.38,4.24-9.78,10.08-9.78
c5.83,0,10.02,4.35,10.02,9.72v0.05C124.28,18.35,120.04,22.76,114.21,22.76z M119.93,12.98c0-3.24-2.38-5.94-5.73-5.94
c-3.35,0-5.67,2.65-5.67,5.89v0.05c0,3.24,2.38,5.94,5.73,5.94c3.35,0,5.67-2.65,5.67-5.89V12.98z"/>
      <path d="M128.31,22.43V3.52h4.16v18.91H128.31z"/>
      <path d="M144.06,22.7c-2.86,0-5.75-1-8.02-3.03l2.46-2.94c1.7,1.4,3.48,2.3,5.65,2.3c1.7,0,2.73-0.68,2.73-1.78
v-0.05c0-1.05-0.65-1.59-3.81-2.4c-3.81-0.97-6.27-2.03-6.27-5.78V8.95c0-3.43,2.76-5.7,6.62-5.7c2.76,0,5.11,0.86,7.02,2.4
l-2.16,3.13c-1.67-1.16-3.32-1.86-4.92-1.86c-1.59,0-2.43,0.73-2.43,1.65v0.05c0,1.24,0.81,1.65,4.08,2.49
c3.84,1,6,2.38,6,5.67v0.05C151,20.59,148.14,22.7,144.06,22.7z"/>
    </g>
  </svg>`,k=class extends c{static get styles(){return r(D)}constructor(){super(),this.TagName=`ilw-footer`,this._defaultSource=`Illinois_App`,this._sectionClasses={"section-grid--no-action":!1},this.source=this._defaultSource,this._data=void 0}connectedCallback(){super.connectedCallback(),this.loadData(),this._utm=this.generateUtm()}async loadData(){let e=await fetch(`https://api.brand.illinois.edu/footer`);this._data=await e.json()}renderCampusSections(){if(this._data!==void 0)return s`<div class="sections">${this._data.illinois.sections.map(e=>s`<div class="section">
          <h3>${e.label}</h3>
          ${this.renderCampusLinks(e.links)}
        </div>`)}</div>`}renderCampusLinks(e){return s`<ul>${e.map(e=>s`<li><a href="${e.href}?${this._utm}">${e.label}</a></li>`)}</ul>`}renderCampusFooter(){return s`
        <div class="campus section-container">
          <div class="campus section">
            <h2 class="logo">
              <a href="https://illinois.edu/?${this._utm}" aria-label="University of Illinois at Urbana-Champaign">${O}</a>
            </h2>
            ${this.renderCampusSections()}
          </div>
        </div>`}renderLegalFooter(){if(this._data!==void 0)return s`
        <div class="legal section-container">
          <div class="legal section">
            <div class="cookies-button-and-links">
              <slot name="cookies-button"></slot>
              <a href="${this._data.illinois.privacy.href}?${this._utm}">${this._data.illinois.privacy.label}</a>
              <a href="${this._data.illinois.copyright.href}?${this._utm}">${this._data.illinois.copyright.label}</a>
              <slot name="legal-link"></slot>
              <a href="${this._data.illinois.accessibility.href}?${this._utm}">${this._data.illinois.accessibility.label}</a>
            </div>
          </div>
        </div>`}renderSiteFooter(){return s`
        <div class="site section-container">
          <div class="site section section-grid ${C(this._sectionClasses)}">
            <div class="site-name">
              <slot name="site-name"></slot>
            </div>
            
            <div class="contact">
              <div class="social">
                <slot name="social"></slot>
              </div>
              <div class="address">
                <slot name="address"></slot>
              </div>
              <div class="primary-unit">
                <slot name="primary-unit"></slot>
              </div>
            </div>
            <div class="actions">
              <slot name="actions"></slot>
            </div>
            <div class="content">
              <slot></slot>
            </div>
          </div>
        </div>`}render(){return s`
        <footer class="footer">
          ${this.renderSiteFooter()}
          ${this.renderCampusFooter()}
          ${this.renderLegalFooter()}
        </footer>
      `}firstUpdated(e){(this._actions===void 0||this._actions.length<=0)&&(this._sectionClasses[`section-grid--no-action`]=!0),(this._cookiesButton===void 0||this._cookiesButton.length===0)&&(console.warn(`No cookie banner found. Assigning standard Illinois cookie banner.`),this.generateCookieBanner()),this.checkSocialDataService(this._social)}checkSocialDataService(e){e===void 0||e.length===0||e.some(e=>e.innerHTML.includes(`data-service`))&&console.warn(`ilw-footer: Use of the 'data-service' attribute in social media icons is deprecated.
See https://github.com/web-illinois/ilw-footer/blob/main/README.md for update instructions.`)}generateCookieBanner(){let e=document.createElement(`button`);e.id=`ot-sdk-btn`,e.classList.add(`ot-sdk-show-settings`,`ilw-button`),e.setAttribute(`slot`,`cookies-button`),e.innerText=`About Cookies`;let t=document.getElementsByTagName(this.TagName);if(!t||t.length===0){console.error(`footer component not found`);return}t[0].appendChild(e);let n=document.createElement(`script`);n.innerText=`function OptanonWrapper() {}`,document.head.appendChild(n);let r=document.createElement(`script`);r.src=`https://onetrust.techservices.illinois.edu/scripttemplates/otSDKStub.js`,r.id=`cookie-js`,r.setAttribute(`data-domain-script`,`uiuc`),document.head.appendChild(r)}generateUtm(){return`utm_source=${this.source}&utm_medium=web&utm_campaign=Footer`}},E([d({attribute:!0,reflect:!0})],k.prototype,`source`,void 0),E([d({attribute:!1})],k.prototype,`_data`,void 0),E([d({attribute:!1})],k.prototype,`_utm`,void 0),E([g({slot:`actions`})],k.prototype,`_actions`,void 0),E([g({slot:`cookies-button`})],k.prototype,`_cookiesButton`,void 0),E([g({slot:`social`})],k.prototype,`_social`,void 0),E([d({attribute:!1})],k.prototype,`_sectionClasses`,void 0),customElements.get(`ilw-footer`)||customElements.define(`ilw-footer`,k)})))()}var j;function M(){return(M=e((()=>{o(),A(),j=({primaryUnit:e,primaryUnitLink:t,siteName:n,siteNameLink:r,cta:i=!0,ctaSlotName1:a,ctaSlotLink1:o,ctaSlotName2:c,ctaSlotLink2:l,ctaSlotName3:u,ctaSlotLink3:d})=>s`
  <ilw-footer id="example-footer--docs">
    <a href="${t}" slot="primary-unit">
      ${e}
    </a>

    <a href="${r}" slot="site-name">
      ${n}
    </a>

    ${i?s`
          <div slot="actions" >
            
                <a href="${o}">${a}</a>
              
                <a href="${l}">${c}</a>
              
                <a href="${d}">${u}</a>
      
          </div>
        `:null}


  
    
    <address slot="address">
      <p>5678 West Example Street<br>
        MC-0000<br>
        Champaign, IL 61820</p>
      <p>Email: <a href="mailto:address@example.com">address@example.com</a></p>
      <p>Phone: <a href="tel:+12175551234" aria-label="Example Site Office">(217) 555-1234</a></p>
    </address>
 
    <div>
       
					<nav class="ilw-footer-menu" aria-labelledby="menu-1">
					<h2 id="menu-1">Connect</h2>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Request More Info</a></li>
              <li><a href="#">Schedule a Visit</a></li>
              <li><a href="#">Directory</a></li>
            </ul>
					</nav>
          <nav class="ilw-footer-menu" aria-labelledby="menu-2">
					<h2 id="menu-2">Resources</h2>
            <ul>
              <li><a href="#">Faculty and Staff Resources</a></li>
              <li><a href="#">Current Students</a></li>
              <li><a href="#">Mental Health and Wellness</a></li>
              <li><a href="#">Canvas</a></li>
            </ul>
					</nav>
							
    </div>



  </ilw-footer>
`})))()}var N=t({Default:()=>F,__namedExportsOrder:()=>I,default:()=>P}),P,F,I;function L(){return(L=e((()=>{M(),P={title:`Required Elements/Footer`,render:e=>j(e),args:{primaryUnit:`Sample Parent Unit`,primaryUnitLink:`https://stratcom.illinois.edu/`,siteName:`Sample Site Name`,siteNameLink:`https://brand.illinois.edu/`,search:!0,cta:!0,ctaSlotName1:`Apply`,ctaSlotLink1:`/apply`,ctaSlotName2:`Visit`,ctaSlotLink2:`/visit`,ctaSlotName3:`Give`,ctaSlotLink3:`/give`}},F={},I=[`Default`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{}`,...F.parameters?.docs?.source}}}})))()}export{N as n,L as r,F as t};