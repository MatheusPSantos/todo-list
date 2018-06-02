<template>
  <section class="todoapp">
    <header class="header">
      <h1>Tarefas</h1>
      <input-task @newTask="addTask"></input-task>
      <task-list v-bind:todo-list="tasks"></task-list>
    </header>
  </section>
</template>

<script>
import InputTask from './components/InputTask'
import TaskList from './components/TaskList'

let tasks = []
let task = new Task()
task.completed = false
task.title = 'Tarefa'
tasks.push(task)
tasks.push(task)
tasks.push(task)

export default {
  name: 'App',
  components: {
    InputTask,
    TaskList
  },
  data () {
    return {
      tasks: tasks
    }
  },
  mounted: {
    addTask (task) {
      this.tasks.push(task)
    }
  }
}
</script>

<style>
.todoapp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todoapp h1 {
  font-weight: 100;
  font-size: 32pt;
}
</style>
