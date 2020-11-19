const CHAVE_USUARIO = "@usuario";

export const signin = (usuario) => {
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
}

export const signOut = () => {
    localStorage.clear();
}

export const isSignIn = () => {
    const usuario = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

    return usuario ? true : false;
}

export const getProfissional = () => {
    const { profissionalDaSaude } = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

    return profissionalDaSaude;
}