import Vue from 'vue'
import InputTask from '@/components/InputTask'

// usando o mocha descreveremos o teste com o método describe
describe('InputTask.vue', () =>{
    // por meio do método it vamos criar o primeiro caso de teste
    it('should render correct contents', () =>{
        // criar uma variável que guarda a referência do Vue ao estender nosso componente base
        const Constructor = Vue.extend(InputTask)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelectorAll('.new-todo').lenght).toEqual(1)
    })
})