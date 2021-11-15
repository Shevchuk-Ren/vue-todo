export default {
    state: {
        users: [
            {
                id: 1,
                name: 'Admin',
                password: '12345'
        }
        ]
    },
    getters: {
        getName(state) {
            return state.users.name;
        }
    },
    actions: {},
    mutations: {},
    
}