const INITIAL_STATE = {
    users: [
        {
            name: "Usama",
            email: "usama@gmail.com"
        }
        ,
        {
            name: "Umer",
            email: "umer@gmail.com"
        }
        ,
        {
            name: "Ali",
            email: "ali@gmail.com"
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users,action.data],
            })
        default:
            return state;
    }

}
