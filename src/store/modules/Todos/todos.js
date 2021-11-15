// export const state = {
//   todoList: [],
// };

// export const mutations = {
//   PUSH(state, todo) {
//     state.todoList.push({
//       ...todo,
//     });
//   },
//   DELETE(state, notificationsToRemove) {
//     state.notifications = state.notifications.filter(
//       notification => notification.id !== notificationsToRemove.id,
//     );
//   },
// };

// export const actions = {
//   add({ commit }, todo) {
//     commit('PUSH', todo);
//   },
//   remove({ commit }, notificationToRemove) {
//     commit('DELETE', notificationToRemove);
//   },
// }

// import  UPDATE_TODOLIST  from "./mutation-types";

export default {
  state: {
    todoList: [
      {
        id: 1,
        title: 'Go workout',
        completed: false,
        editable: false,
      },
      {
        id: 2,
        title: 'Do laundry',
        completed: false,
        editable: false,
      },
      {
        id: 3,
        title: 'Cook food',
        completed: false,
        editable: false,
      },
      {
        id: 4,
        title: 'Clean up room',
        completed: false,
        editable: false,
      },
      {
        id: 5,
        title: 'Finish work',
        completed: false,
        editable: false,
      },
    ],
  },
  getters: {
    //если необходимо вызвать в компоненте массив обьектов
    GET(state) {
      return state.todoList;
    },
    //если мы хотим найти такой же текст
    getTodoByTitle: state => title => {
      return state.todos.find(
        todo => todo.title.toLowerCase() === title.toLowerCase(),
      );
    },
  },
  actions: {
    createTodo(ctx, newTodoObj) {
      ctx.commit('UPDATE_TODOLIST', newTodoObj);
    },
    removeTodo({ commit }, todoId) {
      commit('DELETE_TODO', todoId);
    },
  },
  mutations: {
    UPDATE_TODOLIST(state, todo) {
      const checkTodo = state.todoList.filter(
        todoItem => todoItem.title !== todo.title,
      );

      if (checkTodo) {
        state.todoList = [...state.todoList, todo];
        console.log(state.todoList);
      }
    },
    DELETE_TODO(state, todoId) {
      state.todoList = state.todoList.filter(todo => todo.id !== todoId);
    },
    editTodo(state, newTodoObj) {
      state.todoList.filter(todo => {
        if (todo.id === newTodoObj.id) {
          todo.title = newTodoObj.title;
          // return todo;
        }
      });
    },
  },
};
