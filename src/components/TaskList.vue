<template>
<ul class="todo-list">
  <li class="todo" v-for="todo in sortedTasks" :key="todo">
    <div class="view">
      <input type="checkbox" class="toggle" v-on:click="completeTask(todo)">
      <label v-if="todo.completed" class="todo-completed">{{ todo.title }}</label>
      <label v-else>{{ todo.title }}</label>
    </div>
  </li>
</ul>
</template>

<script>
export default {
  props: ['todoList'],
  computed: {
    sortedTasks: function () {
      let sorted = this.todoList
      return sorted.sort(function (a, b) {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
      })
    },
  },
  methods: {
    completeTask (task) {
      task.completed = !task.completed
    }
  }
}
</script>

<style>
.todo-list {
  list-style: none;
  margin-left: 460px
}

.todo {
  width: 300px;
  height: auto;
  margin: 10px 0 0 0;
  padding: 10px 0 10px 0;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 2px 2px 4px rgba(0,0,0,.3);
  text-align: center;
  position: relative;
  color: rgba(0,0,0,.7);
}
.todo-completed {
  text-decoration: line-through;
}
.view {
  text-align: left;
}
.toggle {
  margin: 0 20px 0 10px;
}
</style>
