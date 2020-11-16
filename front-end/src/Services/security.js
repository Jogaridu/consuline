const CHAVE_ADMIN = "@admin";

export const signin = (admin) => {
    localStorage.setItem(CHAVE_ADMIN, JSON.stringify(admin));
}

export const signOut = () => {
    localStorage.clear();
}

export const isSignIn = () => {
    const admin = JSON.parse(localStorage.getItem(CHAVE_ADMIN));

    return admin ? true : false;
}

export const getMedico = () => {
    const { medico } = JSON.parse(localStorage.getItem(CHAVE_ADMIN));

    return medico;
}