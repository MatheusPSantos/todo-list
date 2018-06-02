<template>
  <div>
    <input class="new-todo" placeholder="o que precisa ser feito?" v-on:keyup.enter="addTask">
  </div>
</template>

<script>
// importando o modelo de Task do Model
import { Task } from '../models/Task'

export default {
	data () {
		return{
		}        
	},
	methods: {
		addTask($event) {
			let value = $event.target.value;
			let task = new Task() // criando um objeto task
			task.completed = false
			task.title = value
			this.$emit('newTask', task)
			$event.target.value = ''
		}
	}
}
</script>

<style>
	.new-todo {
		border-radius: 3px;
		padding: 2px 10px;
		border: #0a7c99 solid 1px;
		color: #0a7c99;
		box-shadow: 2px 2px rgba(0,0,0,.1);
	}
</style>
