(self["webpackChunkvue_material_admin"]=self["webpackChunkvue_material_admin"]||[]).push([[681],{9724:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return _t}});var i=s(634),a=s(9953),o=function(){var t=this,e=t._self._c;return e(i.Z,{attrs:{id:"layout"}},[e("Header",{ref:"header"}),e(a.Z,[e("router-view")],1),e("Footer")],1)},r=[],l=s(1544),n=s(8386),c=s(4987);function h(t,e=[]){return(0,c.Z)((0,n.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,s=e.length;t<s;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var d=s(8574),u=s(1050),p=(0,c.Z)(l.Z,h("footer",["height","inset"]),d.Z).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...l.Z.options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...l.Z.options.computed.styles.call(this),height:isNaN(t)?t:(0,u.kb)(t),left:(0,u.kb)(this.computedLeft),right:(0,u.kb)(this.computedRight),bottom:(0,u.kb)(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),m=s(5294),v=function(){var t=this,e=t._self._c;return e(p,{attrs:{id:"footer",color:"var(--colorFooter)",height:"auto",absolute:""}},[e(m.Z,{staticClass:"divcol align",staticStyle:{"max-width":"90%"},attrs:{"no-gutters":""}},[e("section",{staticClass:"space",staticStyle:{width:"100%"}},[e("aside",{staticClass:"contright divrow"},[e("div",{staticClass:"divcol"},[e("div",{staticClass:"divrow",staticStyle:{cursor:"pointer"}},[e("a",{staticClass:"divpadd paddleftdel marginright",attrs:{href:"https://www.instagram.com/laraalcantara/",target:"_blank"}},[e("img",{staticStyle:{width:"clamp(2em, 2vw, 3em)"},attrs:{src:s(673)}})]),e("a",{staticClass:"divpadd paddleftdel marginright",attrs:{href:"mailto:nftauction@dvconsultores.com",target:"_blank"}},[e("img",{staticStyle:{width:"clamp(2em, 2vw, 3em)"},attrs:{src:s(6343)}})]),e("a",{staticClass:"divpadd paddleftdel marginright",attrs:{href:"https://t.me/GlobalDVchat",target:"_blank"}},[e("img",{staticStyle:{width:"clamp(2em, 2vw, 3em)"},attrs:{src:s(4588)}})])])])])]),e("span",{staticClass:"tcenter h7-em colorFooter"},[t._v(" ©2023 LARA ALCANTARA, All Rights Reserved. ")])])],1)},g=[],f=s(1001),b={},y=(0,f.Z)(b,v,g,!1,null,null,null),w=y.exports,_=(s(7658),s(6703)),S=s(6596),k=l.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...l.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,u.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,S.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,u.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(_.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,u.kb)(this.computedContentHeight)}},(0,u.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,u.kb)(this.extensionHeight)}},(0,u.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],s=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,s,e)}});function Z(t,e,s){const{self:i=!1}=e.modifiers||{},a=e.value,o="object"===typeof a&&a.options||{passive:!0},r="function"===typeof a||"handleEvent"in a?a:a.handler,l=i?t:e.arg?document.querySelector(e.arg):window;l&&(l.addEventListener("scroll",r,o),t._onScroll=Object(t._onScroll),t._onScroll[s.context._uid]={handler:r,options:o,target:i?void 0:l})}function x(t,e,s){var i;if(!(null===(i=t._onScroll)||void 0===i?void 0:i[s.context._uid]))return;const{handler:a,options:o,target:r=t}=t._onScroll[s.context._uid];r.removeEventListener("scroll",a,o),delete t._onScroll[s.context._uid]}const C={inserted:Z,unbind:x};var A=C,$=s(144),B=$.ZP.extend({name:"scrollable",directives:{Scroll:C},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,S.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),D=s(6470);const P=(0,c.Z)(k,B,d.Z,D.Z,h("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var R=P.extend({name:"v-app-bar",directives:{Scroll:A},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return B.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...k.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return k.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=k.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:k.options.computed.isCollapsed.call(this)},isProminent(){return k.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...k.options.computed.styles.call(this),fontSize:(0,u.kb)(this.computedFontSize,"rem"),marginTop:(0,u.kb)(this.computedMarginTop),transform:`translateY(${(0,u.kb)(this.computedTransform)})`,left:(0,u.kb)(this.computedLeft),right:(0,u.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=k.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=k.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),T=s(8053),O=s(6625),M=s(5223),z=s(4437),E=s(6035),F=s(8560),H=s(6904),L=s(2327),V=s(5830),I=s(4284),U=s(9758),q=s(2673),N=s(4392),W=s(7181),j=s(4590),X=s(5234),Y=s(2506),K=function(){var t=this,e=t._self._c;return e("section",[e(R,{attrs:{id:"headerApp",color:"var(--fondo)",height:"100px",fixed:""}},[e(m.Z,[e(z.Z,{staticClass:"divrow space align paddbottomdel",attrs:{cols:"12",md:"11"}},[e("aside",{staticClass:"contleft divrow acenter"},[e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"contmiddle h6-em center padd",staticStyle:{color:"rgb(77, 75, 75)"}},[t._v("DUBERY")])])],1),e(z.Z,{staticClass:"divrow jend padd eliminarmobile"},[e(z.Z,{staticClass:"contmiddle center padd"},t._l(t.dataHeader,(function(s,i){return e("a",{key:i,staticClass:"h9-em openMenuCollections",attrs:{href:s.link}},[t._v(" "+t._s(s.title)+" ")])})),0)],1),e(m.Z,{attrs:{justify:"center"}},[e(F.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog_login,callback:function(e){t.dialog_login=e},expression:"dialog_login"}},[e(N.Z,{attrs:{"z-index":"5",color:"black",value:t.overlay}},[e(W.Z,{attrs:{indeterminate:"",size:"64"}}),t._v(" Loading... ")],1),e(O.Z,[e(M.EB,[e("span",{staticClass:"text-h5"},[t._v("Login")])]),e(M.ZB,[e(H.Z,{ref:"form",staticClass:"mt-8",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(E.Z,[e(m.Z,[e(z.Z,{attrs:{cols:"12"}},[e(Y.Z,{attrs:{label:"Email*",rules:t.emailRules,required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),e(z.Z,{attrs:{cols:"12"}},[e(Y.Z,{attrs:{label:"Password*",type:"password",rules:t.passwdRules,required:""},model:{value:t.user.passwd,callback:function(e){t.$set(t.user,"passwd",e)},expression:"user.passwd"}})],1),e(z.Z,{attrs:{cols:"12"}},[e("a",{staticStyle:{color:"aqua"},on:{click:t.openDialogRecoveryPasswd}},[e("div",{staticStyle:{"text-align":"center"}},[t._v("Forgot my Password")])])])],1)],1),e("small",[t._v("*indicates required field")]),e(T.Z,{staticClass:"b1 h8-em mt-2",attrs:{disabled:!t.valid,loading:t.loading,block:"",color:"#D8D8D8",type:"submit"},on:{click:t.postLogin},scopedSlots:t._u([{key:"loader",fn:function(){return[e("span",{staticClass:"custom-loader"},[e(L.Z,{attrs:{light:""}},[t._v("mdi-cached")])],1)]},proxy:!0}])},[t._v("Login ")])],1)],1),e(M.h7,[e(X.Z),e(T.Z,{staticClass:"b1 h8-em",attrs:{color:"#D8D8D8"},on:{click:t.closeDialogs}},[t._v(" Close ")]),e(T.Z,{staticClass:"b1 h8-em",attrs:{color:"green"},on:{click:t.signUp}},[t._v(" Sign Up ")])],1)],1)],1)],1),e(m.Z,{attrs:{justify:"center"}},[e(F.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog_recovery,callback:function(e){t.dialog_recovery=e},expression:"dialog_recovery"}},[e(N.Z,{attrs:{"z-index":"5",color:"black",value:t.overlay}},[e(W.Z,{attrs:{indeterminate:"",size:"64"}}),t._v(" Loading... ")],1),e(O.Z,[e(M.EB,[e("span",{staticClass:"text-h5"},[t._v("Recovery Password")])]),e(M.ZB,[e(H.Z,{ref:"formRecovery",staticClass:"mt-8",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(E.Z,[e(m.Z,[e(z.Z,{attrs:{cols:"12"}},[e(Y.Z,{attrs:{label:"Email*",rules:t.emailRules,required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)],1)],1),e("small",[t._v("*indicates required field")]),e(T.Z,{staticClass:"b1 h8-em mt-2",attrs:{disabled:!t.valid,loading:t.loading,block:"",color:"#D8D8D8",type:"submit"},on:{click:function(e){return t.postSendCode(t.user.email)}},scopedSlots:t._u([{key:"loader",fn:function(){return[e("span",{staticClass:"custom-loader"},[e(L.Z,{attrs:{light:""}},[t._v("mdi-cached")])],1)]},proxy:!0}])},[t._v("Send Code ")])],1)],1),e(M.h7,[e(X.Z),e(T.Z,{staticClass:"b1 h8-em",attrs:{color:"#D8D8D8"},on:{click:t.closeDialogs}},[t._v(" Close ")])],1)],1)],1)],1),e(m.Z,{attrs:{justify:"center"}},[e(F.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog_sendcode,callback:function(e){t.dialog_sendcode=e},expression:"dialog_sendcode"}},[e(N.Z,{attrs:{"z-index":"5",color:"black",value:t.overlay}},[e(W.Z,{attrs:{indeterminate:"",size:"64"}}),t._v(" Loading... ")],1),e(O.Z,[e(M.EB,[e("span",{staticClass:"text-h5"},[t._v("Verify code")])]),e(M.ZB,[e(H.Z,{ref:"formVerifyCode",staticClass:"mt-8",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(E.Z,[e(m.Z,[e(z.Z,{attrs:{cols:"12"}},[e(Y.Z,{attrs:{label:"Code*",rules:t.passwdRules,required:""},model:{value:t.user.code,callback:function(e){t.$set(t.user,"code",e)},expression:"user.code"}})],1)],1)],1),e("small",[t._v("*indicates required field")]),e(T.Z,{staticClass:"b1 h8-em mt-2",attrs:{disabled:!t.valid,loading:t.loading,block:"",color:"#D8D8D8",type:"submit"},on:{click:t.postVerifyCode},scopedSlots:t._u([{key:"loader",fn:function(){return[e("span",{staticClass:"custom-loader"},[e(L.Z,{attrs:{light:""}},[t._v("mdi-cached")])],1)]},proxy:!0}])},[t._v("Verify Code ")])],1)],1),e(M.h7,[e(X.Z),e(T.Z,{staticClass:"b1 h8-em",attrs:{color:"#D8D8D8"},on:{click:t.closeDialogs}},[t._v(" Close ")]),e(T.Z,{staticClass:"b1 h8-em",attrs:{color:"green"},on:{click:t.openDialogRecoveryPasswd}},[t._v(" Resend Code ")])],1)],1)],1)],1),e(m.Z,{attrs:{justify:"center"}},[e(F.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog_changePasswd,callback:function(e){t.dialog_changePasswd=e},expression:"dialog_changePasswd"}},[e(N.Z,{attrs:{"z-index":"5",color:"black",value:t.overlay}},[e(W.Z,{attrs:{indeterminate:"",size:"64"}}),t._v(" Loading... ")],1),e(O.Z,[e(M.EB,[e("span",{staticClass:"text-h5"},[t._v("Reset Password")])]),e(M.ZB,[e(H.Z,{ref:"formChangePasswd",staticClass:"mt-8",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(E.Z,[e(m.Z,[e(z.Z,{attrs:{cols:"12"}},[e(Y.Z,{attrs:{label:"Password*",type:"password",rules:t.passwdRules,required:""},model:{value:t.user.passwd,callback:function(e){t.$set(t.user,"passwd",e)},expression:"user.passwd"}})],1),e(z.Z,{attrs:{cols:"12"}},[e(Y.Z,{attrs:{label:"Verify Password*",type:"password",rules:t.passwdRules,required:""},model:{value:t.user.passwdconfirm,callback:function(e){t.$set(t.user,"passwdconfirm",e)},expression:"user.passwdconfirm"}})],1)],1)],1),e("small",[t._v("*indicates required field")]),e(T.Z,{staticClass:"b1 h8-em mt-2",attrs:{disabled:!t.valid&&t.user.passwd===t.user.passwdconfirm,loading:t.loading,block:"",color:"#D8D8D8",type:"submit"},on:{click:t.postChangePasswd},scopedSlots:t._u([{key:"loader",fn:function(){return[e("span",{staticClass:"custom-loader"},[e(L.Z,{attrs:{light:""}},[t._v("mdi-cached")])],1)]},proxy:!0}])},[t._v("Submit ")])],1)],1),e(M.h7,[e(X.Z),e(T.Z,{staticClass:"b1 h8-em",attrs:{color:"#D8D8D8"},on:{click:t.closeDialogs}},[t._v(" Close ")]),e(T.Z,{staticClass:"b1 h8-em",attrs:{color:"green"},on:{click:t.openDialogRecoveryPasswd}},[t._v(" Resend Code ")])],1)],1)],1)],1),e(m.Z,{attrs:{justify:"center"}},[e(F.Z,{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog_register,callback:function(e){t.dialog_register=e},expression:"dialog_register"}},[e(N.Z,{attrs:{"z-index":"5",color:"black",value:t.overlay}},[e(W.Z,{attrs:{indeterminate:"",size:"64"}}),t._v(" Loading... ")],1),e(O.Z,[e(M.EB,[e("span",{staticClass:"text-h5"},[t._v("Sign Up Form")])]),e(M.ZB,[e(H.Z,{ref:"form1",staticClass:"mt-8",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(E.Z,[e(m.Z,[e(z.Z,{attrs:{cols:"12",sm:"12",md:"12"}},[e(Y.Z,{attrs:{label:"First name*",rules:t.passwdRules,required:""},model:{value:t.user.first_name,callback:function(e){t.$set(t.user,"first_name",e)},expression:"user.first_name"}})],1),e(z.Z,{attrs:{cols:"12",sm:"12",md:"12"}},[e(Y.Z,{attrs:{label:"Last name*",rules:t.passwdRules,required:""},model:{value:t.user.last_name,callback:function(e){t.$set(t.user,"last_name",e)},expression:"user.last_name"}})],1),e(z.Z,{attrs:{cols:"12"}},[e(Y.Z,{attrs:{label:"Email*",rules:t.emailRules,required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),e(z.Z,{attrs:{cols:"12"}},[e(Y.Z,{attrs:{label:"Password*",type:"password",rules:t.passwdRules,required:""},model:{value:t.user.passwd,callback:function(e){t.$set(t.user,"passwd",e)},expression:"user.passwd"}})],1),e(z.Z,{attrs:{cols:"12"}},[e(Y.Z,{attrs:{label:"Phone Number*",rules:t.passwdRules,required:""},model:{value:t.user.number,callback:function(e){t.$set(t.user,"number",e)},expression:"user.number"}})],1),e(T.Z,{staticClass:"b1 h8-em mt-2",attrs:{disabled:!t.valid,loading:t.loading,block:"",color:"#D8D8D8"},on:{click:t.postRegister},scopedSlots:t._u([{key:"loader",fn:function(){return[e("span",{staticClass:"custom-loader"},[e(L.Z,{attrs:{light:""}},[t._v("mdi-cached")])],1)]},proxy:!0}])},[t._v("Register ")])],1)],1),e("small",[t._v("*indicates required field")])],1)],1),e(M.h7,[e(X.Z),e(T.Z,{staticClass:"b1 h8-em",attrs:{color:"#D8D8D8"},on:{click:t.closeDialogs}},[t._v(" Close ")])],1)],1)],1)],1),e(j.Z,{attrs:{color:t.color,top:!0},scopedSlots:t._u([{key:"action",fn:function({attrs:s}){return[e(T.Z,t._b({staticClass:"b1 h8-em",attrs:{color:"#D8D8D8"},on:{click:function(e){t.snackbar=!1}}},"v-btn",s,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[e("b",{staticClass:"text-h6"},[t._v(t._s(t.text))])]),t.token?e("aside",{staticClass:"contright"},[e(q.Z,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:i}){return[e(T.Z,t._g(t._b({},"v-btn",i,!1),s),[t._v(" "+t._s(t.username)+" ")])]}}],null,!1,2664210148)},[e(V.Z,t._l([{id:0,action:"Logout"}],(function(s){return e(I.Z,{key:s.id,on:{click:function(e){return t.logOut()}}},[e(U.V9,[t._v(t._s(s.action))])],1)})),1)],1)],1):e("aside",{staticClass:"contright"},[e(T.Z,{staticClass:"walletButton",attrs:{color:"#656565"},on:{click:function(e){t.dialog_login=!0}}},[t._v(" Login ")])],1)],1)],1)],1),e("MenuHeader",{ref:"menu"})],1)},G=[],J=s(8914),Q=s(2524),tt=s(4587),et=s(9660),st=s(3276),it=s(9042),at=s(9495),ot=s(3134);const rt=(0,c.Z)(h("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),J.Z,Q.Z,tt.Z,et.Z,d.Z,st.Z);var lt=rt.extend({name:"v-navigation-drawer",directives:{ClickOutside:it.Z,Resize:at.Z,Touch:ot.Z},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&tt.Z.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:(0,u.kb)(this.height),top:this.isBottom?"auto":(0,u.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,u.kb)(this.computedMaxHeight)})`:void 0,transform:`${t}(${(0,u.kb)(this.computedTransform,"%")})`,width:(0,u.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(_.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=(0,u.z9)(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,u.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),nt=function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"menuHeader"}},[e(lt,{attrs:{fixed:"",height:"100%",temporary:"",right:"","overlay-opacity":t.overlay_opacity,"overlay-color":t.overlay_color,color:"#656565"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(V.Z,[t._l(t.dataDrawerA,(function(s,i){return e(I.Z,{key:s.title,attrs:{href:s.to,link:""}},[e(U.km,[e("div",{key:i,staticClass:"center"},[e("a",{staticClass:"h8-em",staticStyle:{color:"#FFFFFF !important"},attrs:{href:s.to}},[t._v(t._s(s.title))])])])],1)})),t._l(t.dataDrawerB,(function(s,i){return e(I.Z,{key:i,class:{openSubmenuADrawer:s.openA,openSubmenuBDrawer:s.openB},on:{mousedown:function(e){return t.changeArrow(s)},mouseleave:function(e){return t.changeArrowFocusOut(s)}}},[e(U.km,[e("div",{staticClass:"center"},[e("a",{staticClass:"h8-em",staticStyle:{color:"#FFFFFF !important"}},[t._v(t._s(s.title))]),s.open?e(L.Z,{attrs:{small:"",color:"#FFFFFF !important"}},[t._v("mdi-chevron-down")]):e(L.Z,{attrs:{small:"",color:"#FFFFFF !important"}},[t._v("mdi-chevron-up")])],1)])],1)}))],2)],1),e(q.Z,{attrs:{bottom:"",transition:"scroll-y-transition","offset-y":"","z-index":"10","max-width":"244px",activator:".openSubmenuADrawer"}},[e(V.Z,{attrs:{color:"#656565"}},t._l(t.dataSubmenuA,(function(s,i){return e(I.Z,{key:i,attrs:{href:s.to}},[e(U.V9,{staticClass:"center"},[e("a",{staticClass:"h8-em",staticStyle:{color:"#FFFFFF !important"},attrs:{href:s.to}},[t._v(" "+t._s(s.title)+" ")])])],1)})),1)],1)],1)},ct=[],ht={name:"HeaderMenu",i18n:s(8818),created(){const t=localStorage.getItem("theme");this.OverlayMethod(t)},data(){return{dialog:!1,overlay_opacity:"0.2",overlay_color:"white",drawer:!1,dataDrawerA:[{title:"Home",to:"#/"},{title:"Staking",to:"#/staking"},{title:"Community",to:"#"},{title:"About",to:"#"},{title:"Contact",to:"#"}],dataDrawerB:[{title:"Languaje",open:!0,openA:!0}],dataSubmenuA:[{title:"English",to:"#"},{title:"Spanish",to:"#"}]}},methods:{OverlayMethod(t){"dark"==t&&(this.overlay_opacity="0.5",this.overlay_color="black"),"light"==t&&(this.overlay_opacity="0.2",this.overlay_color="white")},ShowDrawer(){this.drawer=!this.drawer},changeArrow(t){t.open=!t.open},changeArrowFocusOut(t){!1===t.open&&(t.open=!t.open)}}},dt=ht,ut=(0,f.Z)(dt,nt,ct,!1,null,null,null),pt=ut.exports,mt={name:"Header",components:{MenuHeader:pt},i18n:s(8818),created(){this.element=document.getElementById("theme");const t="light";t&&this.CambiarTheme(t),"light"==t&&(this.themeButton=!0),"dark"==t&&(this.themeButton=!1)},data(){return{username:null,themeButton:!1,dataHeader:[],dialog_login:!1,dialog_register:!1,dialog_recovery:!1,dialog_sendcode:!1,dialog_changePasswd:!1,valid:!0,loading:!1,text:"",color:"success",recover_email:null,user:{passwd:"",first_name:"",last_name:"",email:"",number:"",code:"",passwdconfirm:""},snackbar:!1,overlay:!1,passwdRules:[t=>!!t||"Required"],emailRules:[t=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"],interval:null,token:null}},mounted(){this.addToken(localStorage.getItem("Authorization")),this.verifyStatus(),this.interval=setInterval((()=>{this.verifyStatus()}),1e4)},methods:{verifyStatus(){this.username=localStorage.getItem("Username"),this.token=localStorage.getItem("Authorization")},ShowDrawer(){this.$refs.menu.ShowDrawer()},CambiarTheme(t){this.$store.dispatch("CambiarTheme",{theme:t,element:this.element}),this.themeButton=!this.themeButton},CambiarTheme2(t){this.$refs.menu.OverlayMethod(t)},addToken(t){t&&(this.username=localStorage.getItem("Username"),this.axios.defaults.headers.common.Authorization="token "+t)},finalizePost(t,e){this.text=t,this.color=e,this.dialog_login=!1,this.snackbar=!0,this.overlay=!1,this.closeDialogs(),this.$refs.form.reset(),this.verifyStatus()},postLogin(){this.$refs.form.validate()&&(this.overlay=!0,this.axios.post("api/login/",{email:this.user.email,password:this.user.passwd}).then((t=>{localStorage.setItem("Authorization",t.data.token),localStorage.setItem("Username",t.data.username),this.addToken(localStorage.getItem("Authorization")),this.finalizePost("Welcome: "+this.user.email,"success")})).catch((t=>{this.finalizePost(t.response.data,"error")})))},postSendCode(t){this.overlay=!0,t&&this.axios.post("api/recovery-password/",{email:t}).then((e=>{console.log(e),this.recover_email=t,this.overlay=!0,this.closeDialogs(),this.overlay=!1,this.dialog_sendcode=!0,this.snackbar=!0,this.text="We have sent a recovery message to your email.",this.color="success",this.$refs.formRecovery.reset()})).catch((t=>{this.snackbar=!0,this.text=t.response.data,this.color="error",this.overlay=!1}))},postVerifyCode(){this.overlay=!0,this.$refs.formVerifyCode.validate()&&this.axios.post("api/verify-tk-recover/",{email:this.recover_email,token:this.user.code}).then((()=>{this.overlay=!0,this.closeDialogs(),this.overlay=!1,this.dialog_changePasswd=!0,this.$refs.formVerifyCode.reset()})).catch((t=>{this.user.code=null,this.snackbar=!0,this.text=t.response.data,this.color="error",this.overlay=!1}))},postChangePasswd(){this.overlay=!0,this.$refs.formChangePasswd.validate()&&this.axios.post("api/change-password/",{email:this.recover_email,password:this.user.passwd}).then((()=>{this.overlay=!0,this.closeDialogs(),this.overlay=!1,this.snackbar=!0,this.text="Password changed successfully.",this.color="success",this.$refs.formChangePasswd.reset()})).catch((t=>{this.user.passwd=null,this.user.passwdconfirm=null,this.snackbar=!0,this.text=t.response.data,this.color="error",this.overlay=!1}))},postRegister(){this.overlay=!0,this.$refs.form1.validate()&&(this.overlay=!0,this.axios.post("api/user/",this.user).then((t=>{localStorage.setItem("Authorization",t.data.token),localStorage.setItem("Username",t.data.username),this.addToken(localStorage.getItem("Authorization")),this.finalizePost("Welcome, successfully registered: "+this.user.email,"success")})).catch((t=>{this.finalizePost(t.response.data,"error"),this.overlay=!1})))},signUp(){this.dialog_login=!1,this.dialog_register=!0},logOut(){clearInterval(this.interval),localStorage.removeItem("Authorization"),localStorage.removeItem("Username"),this.axios.defaults.headers.common.Authorization=null,this.verifyStatus(),location.reload()},closeDialogs(){this.dialog_login=!1,this.dialog_register=!1,this.dialog_recovery=!1,this.dialog_sendcode=!1,this.dialog_changePasswd=!1},openDialogRecoveryPasswd(){this.recover_email?(this.dialog_login=!1,this.dialog_register=!1,this.dialog_recovery=!1,this.dialog_sendcode=!0,this.dialog_changePasswd=!1,this.postSendCode(this.recover_email)):(this.dialog_login=!1,this.dialog_register=!1,this.dialog_recovery=!0,this.dialog_sendcode=!1,this.dialog_changePasswd=!1)},requestRecovery(){this.axios.post("api/recovery-email/",this.user.email).then((()=>{this.snackbar=!0,this.text="We have sent a recovery message to your email.",this.color="success"})).catch((()=>{this.finalizePost("An error has occured.","error")}))}}},vt=mt,gt=(0,f.Z)(vt,K,G,!1,null,null,null),ft=gt.exports,bt={name:"Layout",components:{Footer:w,Header:ft}},yt=bt,wt=(0,f.Z)(yt,o,r,!1,null,null,null),_t=wt.exports},634:function(t,e,s){"use strict";s.d(e,{Z:function(){return o}});var i=s(3276),a=s(4987),o=(0,a.Z)(i.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://v2.vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},9953:function(t,e,s){"use strict";s.d(e,{Z:function(){return a}});var i=s(8574),a=i.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:s,footer:i,insetFooter:a,bottom:o,left:r}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${s}px`,paddingBottom:`${i+a+o}px`,paddingLeft:`${r}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},8818:function(t){t.exports={messages:{ES:{savePhrase:"Este registro genera una frase de 12 palabras que debe guardar en un lugar seguro"},US:{savePhrase:"This record generates a 12-word phrase that you must keep in a safe place"}}}},6343:function(t,e,s){"use strict";t.exports=s.p+"img/gmail.cd85119b.svg"},673:function(t,e,s){"use strict";t.exports=s.p+"img/instagram.3536e689.svg"},4588:function(t,e,s){"use strict";t.exports=s.p+"img/telegram.1ac6881c.svg"}}]);
//# sourceMappingURL=681.400abe27.js.map