import Vue from "vue";
/*import app from './components/app.vue';

Vue.config.debug = true;//开启错误提示

new Vue(app);*/

new Vue({
  el: '#app',
  data: {
  	newTodo: '',
    todos:[
    	{ text: 'Add some todos' },
    ],
    msg: 'message......',
    html2: '<h2>HH</h2>',
    id: 'ids',
    ok: true,
    number: 10,
    message: ['1', '2', '3'],
    greeting: true,
    osChina: 'www.oschina.com'
  },
  methods:{
  	addTodo: function() {
  		var text = this.newTodo;
  		if (text) {
  			this.todos.push({ text });
  			this.newTodo = '';
  		}
  	},
  	removeTodo: function(index) {
  		this.todos.splice(index, 1);
  	},
    doSomething: function() {
      alert('tests...');
    }
  }
})

new Vue({
  el: '#example',
  data: {
    a: 1
  },
  computed: {
    b: function(){
      return parseInt(this.a) + 1
    }
  }
})