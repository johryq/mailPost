import mitt from 'mitt'

type ApplicationEvents = {
  isShowWritePage: boolean
}

export default defineNuxtPlugin(() => {
  const emitter = mitt<ApplicationEvents>()
  return {
    provide: {
      emits: emitter.emit,
      on: emitter.on
    }
  }
})