import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,o as n}from"./iframe-sCeAGIkY.js";var r;function i(){return(i=e((()=>{t(),r=({backgroundColor:e,fillColor:t,colorTheme:r,label:i,onClick:a})=>n`
  <div style="background-color: var(${e})">
    <button
      type="button"
      class=${[`ilw-button`,`ilw-theme-${t}-${r}`].join(` `)}
      @click=${a}
    >
      ${i}
    </button>
  </div>
  `})))()}var a,o,s,c,l,u;function d(){return(d=e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Button`,tags:[`autodocs`],render:e=>r(e),argTypes:{backgroundColor:{control:{type:`select`},options:[`--il-orange`,`--il-blue`,`--il-white`]},fillColor:{control:{type:`select`},options:[`orange`,`blue`]},colorTheme:{control:{type:`select`},options:[`outline`,`solid`,`inverse`]}},args:{onClick:a()}},s={args:{label:`Orange Button`,backgroundColor:`--il-white`,fillColor:`orange`,colorTheme:`outline`}},c={args:{label:`Secondary Button`,backgroundColor:`--il-white`,colorTheme:`solid`,fillColor:`blue`}},l={args:{label:`Tertiary Button`,backgroundColor:`--il-blue`,fillColor:`blue`,colorTheme:`inverse`}},u=[`Primary`,`Secondary`,`Tertiary`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Orange Button',
    backgroundColor: '--il-white',
    fillColor: 'orange',
    colorTheme: 'outline'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    backgroundColor: '--il-white',
    colorTheme: 'solid',
    fillColor: 'blue'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tertiary Button',
    backgroundColor: '--il-blue',
    fillColor: 'blue',
    colorTheme: 'inverse'
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as Primary,c as Secondary,l as Tertiary,u as __namedExportsOrder,o as default};