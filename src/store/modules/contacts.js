export default {
    state: {
        users: [
            {
                id: 1,
                name: 'Admin',
                password: '12345',
                isActive: false,
        }
        ]
    },
    getters: {
        checkAuth(state) {
            const filter = state.users.find(user => {
                if (user.isActive) {
                   
                    return user.isActive;
                }
            });
           if (filter) {
            return filter.isActive;
            }
            return false;
            
        },
        getUser(state) {
                const filter = state.users.find(user => {
                if (user.isActive) {
                   
                    return user.name;
                }
            });
            if (filter) {
            return filter.name;
            }
            return '';
            
        }
    },
    actions: {},
    mutations: {

        checkUser(state, obj) {

            state.users.filter(user => {
                if (user.name === obj.name && user.password === obj.password) {
                
                    user.isActive = true;
                  
                    return user;
                }
             })
        }
    },
    
}