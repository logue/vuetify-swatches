import{V as g,g as B,d as w,r as _,w as x,c as z,h as N}from"./vue-960a1fd6.js";import{V as k,c as s,_ as O,a as d,b as p,d as R,e as L,f as M,g as P,h as T,i as F,j as h,k as u,l as y,m as E}from"./vuetify-213d3f15.js";import{x as I}from"./codemirror-46bfc695.js";import{v as A}from"./codemirror-lang-49b69d16.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const f of n)if(f.type==="childList")for(const r of f.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const f={};return n.integrity&&(f.integrity=n.integrity),n.referrerpolicy&&(f.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?f.credentials="include":n.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(n){if(n.ep)return;n.ep=!0;const f=t(n);fetch(n.href,f)}})();g.use(k);var D=new k;function G(){const o=B();if(!o)throw new Error("Should be used in setup().");return o.proxy.$vuetify}var U=w({name:"VSwatches",model:{prop:"modelValue",event:"update:modelValue"},props:{modelValue:{type:String,default:"#ffffff"},swatches:{type:Array,default:()=>[[s.shades.black,s.shades.white,s.shades.transparent],[s.red.base,s.pink.base,s.purple.base,s.deepPurple.base,s.indigo.base,s.blue.base,s.lightBlue.base,s.cyan.base],[s.teal.base,s.green.base,s.lightGreen.base,s.lime.base,s.yellow.base,s.amber.base,s.orange.base,s.deepOrange.base],[s.brown.base,s.blueGrey.base,s.grey.base]]},size:{type:String,default:"2rem"},icon:{type:String,default:"mdi-checkbox-marked-circle"},iconSize:{type:String,default:"1rem"},depressed:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},elevation:{type:[Number,String],default:void 0},outlined:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},raised:{type:Boolean,default:!0},rounded:{type:Boolean,default:!1},tile:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,e){const t=_(!1),a=_(o.modelValue),n=f=>{const r=f.target.value;!r||o.modelValue===r||(a.value=r)};return x(()=>a.value,f=>e.emit("update:modelValue",f)),{checkedVisibilty:t,onSwatchClick:n}}});function C(o,e,t,a,n,f,r,V){var l=typeof o=="function"?o.options:o;e&&(l.render=e,l.staticRenderFns=t,l._compiled=!0),a&&(l.functional=!0),f&&(l._scopeId="data-v-"+f);var c;if(r?(c=function(i){i=i||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!i&&typeof __VUE_SSR_CONTEXT__<"u"&&(i=__VUE_SSR_CONTEXT__),n&&n.call(this,i),i&&i._registeredComponents&&i._registeredComponents.add(r)},l._ssrRegister=c):n&&(c=V?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var S=l.render;l.render=function($,b){return c.call(b),S($,b)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,c):[c]}return{exports:o,options:l}}var W=function(){var e=this,t=e._self._c;return e._self._setupProxy,t(O,{staticClass:"v-swatches"},e._l(e.swatches,function(a,n){return t("div",{key:n},e._l(a,function(f){return t(d,{key:f,attrs:{color:f,depressed:e.depressed,disabled:e.disabled,elevation:e.elevation,height:e.size,outlined:e.outlined,plain:e.plain,raised:e.raised,tile:e.tile,value:f,width:e.size,"min-width":"auto"},on:{click:function(r){return e.onSwatchClick(r)}}},[f===e.modelValue?t(p,{attrs:{size:e.iconSize,color:f!=="transparent"?f:void 0}},[e._v(" "+e._s(e.icon)+" ")]):e._e()],1)}),1)}),0)},X=[],q=C(U,W,X,!1,null,null,null,null),m=q.exports;typeof window<"u"&&window.Vue&&window.Vue.use(m);var K=w({components:{CodeMirror:I,VSwatches:m},setup(){const o=G(),e=z({get:()=>o.theme.dark,set:n=>o.theme.dark=n}),t=_("#ffffff"),a=_("#ffffff");return{dark:e,value:t,selected:a,lang:A(),code1:'<v-swatches v-model="color" />',code2:`<template>
  <v-menu class="mb-3" offset-y>
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        :color="selected"
        class="mb-3"
        min-width="auto"
        v-on="on"
      >
        <v-icon
          :color="selected"
          style="filter: invert(100%) grayscale(100%) contrast(100)"
        >
          mdi-menu-down
        </v-icon>
      </v-btn>
    </template>
    <v-swatches v-model="selected" :swatches="palette" />
  </v-menu>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VSwatches from 'vuetify-swatches';

export default defineComponent({
  components: {
    VSwatches,
  },
  setup() {
    const selected = ref('#ffffff');
    const palette = [
      [
        '#ffb7b7',
        '#ffdbb7',
        '#ffffb7',
        '#b7ffb7',
        '#b7ffff',
        '#b7b7ff',
        '#ffb7ff',
        '#ffffff',
      ],
      [
        '#ff5555',
        '#ffa555',
        '#ffff55',
        '#55ff55',
        '#55ffff',
        '#5555ff',
        '#ff55ff',
        '#aaaaaa',
      ],
      [
        '#ff0000',
        '#ff7f00',
        '#ffff00',
        '#00ff00',
        '#00ffff',
        '#0000ff',
        '#ff00ff',
        '#555555',
      ],
      [
        '#7f0000',
        '#7f4c00',
        '#7f7f00',
        '#007f00',
        '#007f7f',
        '#00007f',
        '#7f007f',
        '#000000',
      ],
    ];

    return { selected, palette };
  }
})
<\/script>`,palette:[["#ffb7b7","#ffdbb7","#ffffb7","#b7ffb7","#b7ffff","#b7b7ff","#ffb7ff","#ffffff"],["#ff5555","#ffa555","#ffff55","#55ff55","#55ffff","#5555ff","#ff55ff","#aaaaaa"],["#ff0000","#ff7f00","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff","#555555"],["#7f0000","#7f4c00","#7f7f00","#007f00","#007f7f","#00007f","#7f007f","#000000"]]}}}),Y=function(){var e=this,t=e._self._c;return e._self._setupProxy,t(R,[t(L,{attrs:{app:""}},[t(M,[e._v("Vuetify Swatches")]),t(P),t(d,{attrs:{icon:"",href:"https://github.com/logue/vuetify-swatches"}},[t(p,[e._v("mdi-github")])],1),t(d,{attrs:{icon:""},on:{click:function(a){e.dark=!e.dark}}},[t(p,[e._v("mdi-theme-light-dark")])],1)],1),t(T,[t(F,[t("h1",[e._v("Vuetify Swatches Demo")]),t("h2",[e._v("Basic")]),t("p",[e._v(" The default palette contains 22 colors with a MaterialColor base color. If "),t("code",[e._v("transparent")]),e._v(" is specified for the color specification, a red slanted line is entered. ")]),t(h,{staticClass:"mb-3"},[t(u,[t("code-mirror",{attrs:{dark:e.dark,lang:e.lang,basic:"",readonly:""},model:{value:e.code1,callback:function(a){e.code1=a},expression:"code1"}})],1),t(u,[t(m,{staticClass:"mb-3",model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),t(y,{attrs:{label:"Selected Color","min-width":"auto",outlined:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)],1),t("h2",[e._v("With VMenu (Nested Color)")]),t("p",[e._v(" You can display a color palette in a popup in combination with Vuetify's "),t("a",{attrs:{href:"https://v2.vuetifyjs.com/en/components/menus/"}},[e._v(" Menu Component ")]),e._v(" . ")]),t(h,{staticClass:"mb-3"},[t(u,[t("code-mirror",{staticStyle:{"max-height":"5rem"},attrs:{dark:e.dark,lang:e.lang,basic:"",readonly:"",wrap:""},model:{value:e.code2,callback:function(a){e.code2=a},expression:"code2"}})],1),t(u,[t(E,{staticClass:"mb-3",attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:n}){return[t(d,e._g(e._b({staticClass:"mb-3",attrs:{color:e.selected,"min-width":"auto"}},"v-btn",n,!1),a),[t(p,{staticStyle:{filter:"invert(100%) grayscale(100%) contrast(100)"},attrs:{color:e.selected}},[e._v(" mdi-menu-down ")])],1)]}}])},[t(m,{attrs:{swatches:e.palette},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1),t(y,{attrs:{label:"Selected Color",outlined:""},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)],1)],1)],1)],1)},j=[],H=C(K,Y,j,!1,null,null,null,null),J=H.exports;const Q=new g({render:()=>N(J),vuetify:D});Q.$mount("#app");
