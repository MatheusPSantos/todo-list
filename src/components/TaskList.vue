<template>
<ul class="todo-list">
    <li class="todo" v-for="todo in todoList" :key="todo">
        <div class="view">
            <label>{{ todo.title }}</label>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    props: ['todoList']
}
</script>
