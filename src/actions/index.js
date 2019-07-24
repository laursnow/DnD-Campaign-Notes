const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = () => {
    return {
        type: LOGIN,
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

