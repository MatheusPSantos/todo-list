<template>
  <section class="todoapp">
    <header class="header">
      <h1>Tarefas</h1>
      <input-task></input-task>
    </header>
  </section>
</template>

<script>
import InputTask from './components/InputTask'

export default {
  name: 'App',
  components: {
    InputTask
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
