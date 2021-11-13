export const state = {
  todoList: [],
};

export const mutations = {
  PUSH(state, todo) {
    state.todoList.push({
      ...todo,
    });
  },
  DELETE(state, notificationsToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationsToRemove.id,
    );
  },
};

export const actions = {
  add({ commit }, todo) {
    commit('PUSH', todo);
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove);
  },
};
