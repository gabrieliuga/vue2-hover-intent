Hover intent directive for VueJs V2

Usage:
npm install vue2-hover-intent --save-dev

app.js:
 - import HoverIntent from 'vue2-hover-intent';
 - Vue.directive('hover-intent', HoverIntent);
 
 
component.vue:
 - &lt;a v-hover-intent="functionToCall.bind(null, arg1)"&gt; // defaults to 200 milliseconds 
 - &lt;a v-hover-intent:500="functionToCall.bind(null, arg1)"&gt;
 - &lt;a v-hover-intent="functionToCall"&gt; // no arguments needed for the function
