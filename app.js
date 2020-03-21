const app = new Vue({
  el: '#app',
  data: {
    title: 'This gives me a new Vue',
    newTodo: '',
    todos: [],
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = '';
    },
    removeTodo(target) {
      this.todos = this.todos.filter(todo => todo !== target);
    },
    allDone() {
      this.todos = this.todos.map(todo => ({ ...todo, done: true }));
    },
  },
});
