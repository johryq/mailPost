// 2
// import { defineAsyncComponent, ref } from 'vue';

// export default defineNuxtPlugin(async nuxtApp => {
//   // Doing something with nuxtApp
//   const QuillEditor = await import('@vueup/vue-quill');
//   const AsyncQuillEditor = defineAsyncComponent(():any => QuillEditor);
//   nuxtApp.vueApp.component('QuillEditor',AsyncQuillEditor)
// })
export default defineNuxtPlugin(() => {}) 

// 1
// const vueQuillPlugin: Plugin = (ctx,inject) => {  
//   ctx.app.use('QuillEditor', QuillEditor);
// };
// export default vueQuillPlugin;

// 3
