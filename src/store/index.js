// // import { createApp } from 'vue'
// import { createStore } from 'vuex'

// // Create a new store instance.
// export default createStore({
//   state () {
//     return {
//         contacts: [],
//         todoList: [ {
//           id: 1,
//           title: 'Go workout',
//           completed: false,
//           editable: false,
//         },
//         {
//           id: 2,
//           title: 'Do laundry',
//           completed: false,
//           editable: false,
//         },
//         {
//           id: 3,
//           title: 'Cook food',
//           completed: false,
//           editable: false,
//         },
//         {
//           id: 4,
//           title: 'Clean up room',
//           completed: false,
//           editable: false,
//         },
//         {
//           id: 5,
//           title: 'Finish work',
//           completed: false,
//           editable: false,
//         },
//       ],

//     }
//   },
//   mutations: {
//     // increment (state) {
//     //   state.count++
//     // }
//   }
// })

import { createStore } from 'vuex';
import todos from './modules/Todos/todos';

export default createStore({
  // state: {
  //   // todoList: [
  //   //   {
  //   //     id: 1,
  //   //     title: 'Go workout',
  //   //     completed: false,
  //   //     editable: false,
  //   //   },
  //   //   {
  //   //     id: 2,
  //   //     title: 'Do laundry',
  //   //     completed: false,
  //   //     editable: false,
  //   //   },
  //   //   {
  //   //     id: 3,
  //   //     title: 'Cook food',
  //   //     completed: false,
  //   //     editable: false,
  //   //   },
  //   //   {
  //   //     id: 4,
  //   //     title: 'Clean up room',
  //   //     completed: false,
  //   //     editable: false,
  //   //   },
  //   //   {
  //   //     id: 5,
  //   //     title: 'Finish work',
  //   //     completed: false,
  //   //     editable: false,
  //   //   },
  //   // ],
  // },
  // mutations: {
  //   // updateTodoList(state, todo) {
  //   //   console.log(this.state.todoList, `todo store`);
  //   //   const checkTodo = this.state.todoList.filter(
  //   //     todoItem => todoItem.title !== todo.title,
  //   //   );
  //   //   console.log(todo, `todo store`);
  //   //   if (checkTodo) {
  //   //     this.state.todoList = [...this.state.todoList, todo];
  //   //     console.log(this.state.todoList);
  //   //   }
  //   // },
  //   // deleteTodo(state, todoId) {
  //   //   this.state.todoList = this.state.todoList.filter(
  //   //     todo => todo.id !== todoId,
  //   //   );
  //   // },
  //   // editTodo(state, newTodoObj) {
  //   //   this.state.todoList.filter(todo => {
  //   //     if (todo.id === newTodoObj.id) {
  //   //       todo.title = newTodoObj.title;
  //   //       return todo;
  //   //     }
  //   //   });
  //   // },
  // },
  // actions: {
  //   // add({ commit }, todo) {
  //   //   commit('PUSH', todo);
  //   // },
  //   // remove({ commit }, notificationToRemove) {
  //   //   commit('DELETE', notificationToRemove);
  //   // },
  // },
  modules: { todos },
});
