
import { database } from "./firebase.js";

import {
    ref,
    push,
    set,
    onValue,
    update,
    remove
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const pessoas = ref(database, "pessoas");

// Cadastrar pessoa
export function criarPessoa(nome, idade, profissao) {
    const novaPessoa = push(pessoas);

    return set(novaPessoa, {
        id: novaPessoa.key,
        nome: nome,
        idade: idade,
        profissao: profissao
    });
}

// Buscar pessoas
export function buscarPessoas(callback) {
    onValue(pessoas, (snapshot) => {
        const dados = snapshot.val();

        const lista = dados ? Object.values(dados) : [];

        callback(lista);
    });
}

// Editar pessoa
export function editarPessoa(id, nome, idade, profissao) {
    const pessoa = ref(database, `pessoas/${id}`);

    return update(pessoa, {
        nome: nome,
        idade: idade,
        profissao: profissao
    });
}

// Excluir pessoa
export function excluirPessoa(id) {
    const pessoa = ref(database, `pessoas/${id}`);

    return remove(pessoa);
}
