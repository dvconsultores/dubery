"use strict";(self["webpackChunkvue_material_admin"]=self["webpackChunkvue_material_admin"]||[]).push([[699],{1699:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var i=s(6262),a=s(2327),n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"componentSpace",attrs:{id:"newCollections"}},[e("aside",{staticClass:"divrow acenter divwrapmobile jendmobile parent"},[e("h2",{staticClass:"h3 align center p"},[t._v("Contáctenos")]),e("div",{staticClass:"contright center"},[e("a",{staticClass:"h7",attrs:{href:"#/"}},[t._v("More")]),e(i.Z,{staticClass:"right",attrs:{icon:""}},[e(a.Z,{staticStyle:{color:"#FFFFFF !important"},attrs:{medium:""}},[t._v("mdi-chevron-right")])],1)],1)]),t._m(0)])},r=[function(){var t=this,e=t._self._c;return e("aside",{staticClass:"acerca"},[e("section",[e("span",[e("p",{staticClass:"text-h5",staticStyle:{"text-align":"justify"}},[t._v(" ¡Gracias por elegir Lentes Dubery! ")])]),e("span",[e("p",{staticClass:"text-h5",staticStyle:{"text-align":"justify"}},[t._v(" ¿Tienes alguna pregunta sobre nuestros productos o servicios? ¿Quieres realizar un pedido o solicitar información adicional? Estamos aquí para ayudarte. ")])]),e("span",[e("p",{staticClass:"text-h5",staticStyle:{"text-align":"justify"}},[t._v(" Puedes ponerte en contacto con nuestro equipo de atención al cliente de las siguientes maneras: ")])]),e("span",[e("p",{staticClass:"text-h5",staticStyle:{"text-align":"justify"}},[t._v(" Número de teléfono: Escríbenos al "),e("a",{staticStyle:{color:"darkgreen !important"},attrs:{href:"https://wa.me/584144186688"}},[e("b",[t._v("Whatsapp")])]),t._v(" estaremos encantados de atenderte en horario laboral. ")])]),e("span",[e("p",{staticClass:"text-h5",staticStyle:{"text-align":"justify"}},[t._v(" Correo electrónico: Envíanos un mensaje a "),e("a",{staticStyle:{color:"darkgreen !important"},attrs:{href:"mailto:adominguez@dvconsultores.com"}},[e("b",[t._v("Correo")])]),t._v(" y te responderemos lo antes posible. ")])])])])}],o={name:"Acerca De",data(){return{dialog:!1,image:"",text:"",dataNewCollections:[{collection:[{title:"Model A",img:"https://bafkreiec67ylmi2fits4izxlcjhbyejaytuv73jgbyklaezwlc5e3w7k6e.ipfs.nftstorage.link/",usd:"20",localfiat:"252.45",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus. Donec ultrices tincidunt arcu non sodales. Pulvinar sapien et ligula ullamcorper malesuada. Quisque sagittis purus sit amet volutpat. Leo vel fringilla est ullamcorper eget nulla. Enim facilisis gravida neque convallis a cras semper. Maecenas pharetra convallis posuere morbi. Lobortis feugiat vivamus at augue eget arcu dictum. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor."}]}]}},methods:{close(){this.dialog=!1},open(t){this.image=t.img,this.text=t.text,this.dialog=!0}}},l=o,c=s(1001),u=(0,c.Z)(l,n,r,!1,null,null,null),d=u.exports},2327:function(t,e,s){s.d(e,{Z:function(){return m}});s(7658);var i,a=s(4609),n=s(8914),r=s(281),o=s(3276),l=s(1050),c=s(144),u=s(4987);function d(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function h(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const p=(0,u.Z)(a.Z,n.Z,r.Z,o.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,l.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,l.XP)(t).find((e=>t[e]));return e&&i[e]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const s=[],i=this.getDefaultData();let a="material-icons";const n=t.indexOf("-"),r=n<=-1;r?s.push(t):(a=t.slice(0,n),d(a)&&(a="")),i.class[a]=!0,i.class[t]=!r;const o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,s)},renderSvgIcon(t,e){const s={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(s.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const s={class:{"v-icon__component":!0}},i=this.getSize();i&&(s.style={fontSize:i,height:i,width:i}),this.applyColors(s);const a=t.component;return s.props=t.props,s.nativeOn=s.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(a,s)])}},render(t){const e=this.getIcon();return"string"===typeof e?h(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var m=c.ZP.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:s}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,i?[i]:s)}})}}]);
//# sourceMappingURL=699.08f03cc8.js.map