(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"09df":function(t,e,i){"use strict";var r=i("6d1c"),n=i.n(r);n.a},"44bf":function(t,e,i){"use strict";var r=i("2638"),n=i.n(r),a=i("d282"),s=i("a142"),o=i("ea8e"),l=i("ad06"),c=Object(a["a"])("image"),u=c[0],h=c[1];e["a"]=u({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(s["b"])(this.width)&&(t.width=Object(o["a"])(this.width)),Object(s["b"])(this.height)&&(t.height=Object(o["a"])(this.height)),Object(s["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(o["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:h("loading")},[this.slots("loading")||t(l["a"],{attrs:{name:this.loadingIcon},class:h("loading-icon")})]):this.error&&this.showError?t("div",{class:h("error")},[this.slots("error")||t(l["a"],{attrs:{name:this.errorIcon},class:h("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:h("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",n()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",n()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:h({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},"6d1c":function(t,e,i){},7744:function(t,e,i){"use strict";var r=i("c31d"),n=i("2638"),a=i.n(n),s=i("d282"),o=i("a142"),l=i("ba31"),c=i("48f4"),u=i("dfaf"),h=i("ad06"),d=Object(s["a"])("cell"),f=d[0],g=d[1];function v(t,e,i,r){var n=e.icon,s=e.size,u=e.title,d=e.label,f=e.value,v=e.isLink,m=i.title||Object(o["b"])(u);function b(){var r=i.label||Object(o["b"])(d);if(r)return t("div",{class:[g("label"),e.labelClass]},[i.label?i.label():d])}function p(){if(m)return t("div",{class:[g("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[u]),b()])}function y(){var r=i.default||Object(o["b"])(f);if(r)return t("div",{class:[g("value",{alone:!m}),e.valueClass]},[i.default?i.default():t("span",[f])])}function j(){return i.icon?i.icon():n?t(h["a"],{class:g("left-icon"),attrs:{name:n,classPrefix:e.iconPrefix}}):void 0}function w(){var r=i["right-icon"];if(r)return r();if(v){var n=e.arrowDirection;return t(h["a"],{class:g("right-icon"),attrs:{name:n?"arrow-"+n:"arrow"}})}}function k(t){Object(l["a"])(r,"click",t),Object(c["a"])(r)}var O=v||e.clickable,$={clickable:O,center:e.center,required:e.required,borderless:!e.border};return s&&($[s]=s),t("div",a()([{class:g($),attrs:{role:O?"button":null,tabindex:O?0:null},on:{click:k}},Object(l["b"])(r)]),[j(),p(),y(),w(),null==i.extra?void 0:i.extra()])}v.props=Object(r["a"])(Object(r["a"])({},u["a"]),c["c"]),e["a"]=f(v)},a55b:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("van-row",{attrs:{type:"flex",justify:"center"}},[i("van-image",{staticStyle:{margin:"10px 0px"},attrs:{round:"",width:"3rem",height:"3rem",src:"https://img.yzcdn.cn/vant/cat.jpeg"}})],1),i("van-cell-group",[i("van-field",{attrs:{required:"",clearable:"",label:"用户名","right-icon":"question-o",placeholder:"请输入用户名"},on:{"click-right-icon":function(e){return t.$toast("question")}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),i("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("van-cell-group",[i("van-field",{attrs:{center:"",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码"},model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}},[i("van-button",{attrs:{slot:"button",size:"small",type:"primary"},slot:"button"},[t._v("发送验证码")])],1)],1),i("van-button",{attrs:{color:"linear-gradient(to right, #4bb0ff, #6149f6)",size:"large"},on:{click:t.handleLogin}},[t._v("登录")])],1)},n=[],a=(i("b0c0"),i("ac1f"),i("5319"),i("ade3")),s=i("44bf"),o=i("2638"),l=i.n(o),c=i("c31d"),u=i("1325");function h(t,e,i){var r=t.indexOf(e);return-1===r?t:"-"===e&&0!==r?t.slice(0,r):t.slice(0,r+1)+t.slice(r).replace(i,"")}function d(t,e){t=e?h(t,".",/\./g):t.split(".")[0],t=h(t,"-",/-/g);var i=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(i,"")}var f=i("a142");function g(){return!f["f"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var v=i("a8c1"),m=g();function b(){m&&Object(v["d"])(Object(v["a"])())}var p=i("d282"),y=i("ea8e"),j=i("ad06"),w=i("7744"),k=i("dfaf"),O=Object(p["a"])("field"),$=O[0],x=O[1],S=$({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:Object(c["a"])(Object(c["a"])({},k["a"]),{},{name:String,rules:Array,disabled:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null}}),data:function(){return{focused:!1,validateMessage:""}},watch:{value:function(){this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(f["b"])(this.value)&&!this.readonly},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateMessage)||void 0},listeners:function(){return Object(c["a"])(Object(c["a"])({},this.$listeners),{},{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:Object(y["a"])(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(i){var r=e.validator(t,e);if(Object(f["e"])(r))return r.then(i);i(r)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var i=e.message;return Object(f["c"])(i)?i(t,e):i},runRules:function(t){var e=this;return t.reduce((function(t,i){return t.then((function(){if(!e.validateMessage){var t=e.formValue;if(i.formatter&&(t=i.formatter(t,i)),e.runSyncRule(t,i))return i.validator?e.runValidator(t,i).then((function(r){!1===r&&(e.validateMessage=e.getRuleMessage(t,i))})):void 0;e.validateMessage=e.getRuleMessage(t,i)}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(i){t||i(),e.runRules(t).then((function(){e.validateMessage?i({name:e.name,message:e.validateMessage}):i()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,i=this.rules.filter((function(i){return i.trigger?i.trigger===t:e}));this.validate(i)}},resetValidation:function(){this.validateMessage&&(this.validateMessage="")},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,r=this.maxlength;if(Object(f["b"])(r)&&i.length>r&&(i=i.slice(0,r),t.value=i),"number"===this.type||"digit"===this.type){var n=i,a="number"===this.type;i=d(i,a),i!==n&&(t.value=i)}if(this.formatter){var s=i;i=this.formatter(i),i!==s&&(t.value=i)}return i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),this.validateWithTrigger("onBlur"),b()},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(u["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var e=13;if(t.keyCode===e){var i=this.getProp("submitOnEnter");i||"textarea"===this.type||Object(u["c"])(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(f["d"])(this.autosize)){var i=this.autosize,r=i.maxHeight,n=i.minHeight;r&&(e=Math.min(e,r)),n&&(e=Math.max(e,n))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.slots("input"),r=this.getProp("inputAlign");if(i)return t("div",{class:x("control",[r,"custom"]),on:{click:this.onClickInput}},[i]);var n={ref:"input",class:x("control",r),domProps:{value:this.value},attrs:Object(c["a"])(Object(c["a"])({},this.$attrs),{},{name:this.name,disabled:this.disabled,readonly:this.readonly,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",l()([{},n]));var a,s=e;return"number"===e&&(s="text",a="decimal"),"digit"===e&&(s="tel",a="numeric"),t("input",l()([{attrs:{type:s,inputmode:a}},n]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:x("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(j["a"],{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:x("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(j["a"],{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=this.value.length,i=e>=this.maxlength;return t("div",{class:x("word-limit")},[t("span",{class:x("word-num",{full:i})},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var i=this.getProp("errorMessageAlign");return t("div",{class:x("error-message",i)},[e])}}},getProp:function(t){return Object(f["b"])(this[t])?this[t]:this.vanForm&&Object(f["b"])(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],i=this.slots,r=this.getProp("labelAlign"),n={icon:this.genLeftIcon},a=this.genLabel();a&&(n.title=function(){return a});var s=this.slots("extra");return s&&(n.extra=function(){return s}),e(w["a"],{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:x("value"),titleClass:[x("label",r),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:n,class:x((t={error:this.showError},t["label-"+r]=r,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:x("body")},[this.genInput(),this.showClear&&e(j["a"],{attrs:{name:"clear"},class:x("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:x("button")},[i("button")])]),this.genWordLimit(),this.genMessage()])}}),L=i("ba31"),C=i("b1d2"),I=Object(p["a"])("cell-group"),z=I[0],E=I[1];function M(t,e,i,r){var n,a=t("div",l()([{class:[E(),(n={},n[C["c"]]=e.border,n)]},Object(L["b"])(r,!0)]),[null==i.default?void 0:i.default()]);return e.title||i.title?t("div",[t("div",{class:E("title")},[i.title?i.title():e.title]),a]):a}M.props={title:String,border:{type:Boolean,default:!0}};var F,B=z(M),P=(i("96cf"),i("1da1")),R={props:{},data:function(){return{username:null,password:null,sms:null}},computed:{},created:function(){},mounted:function(){},watch:{},methods:{handleLogin:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i={username:t.username,password:t.password,sms:t.sms},e.next=4,t.$store.dispatch("user/login",i);case 4:r=t,t.$toast({message:"登录成功",position:"middle",duration:1500,onClose:function(){r.$router.replace("/")}}),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},components:(F={},Object(a["a"])(F,w["a"].name,w["a"]),Object(a["a"])(F,B.name,B),Object(a["a"])(F,S.name,S),Object(a["a"])(F,s["a"].name,s["a"]),F)},A=R,q=(i("09df"),i("2877")),W=Object(q["a"])(A,r,n,!1,null,"612a2aca",null);e["default"]=W.exports},dfaf:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var r={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}}}]);