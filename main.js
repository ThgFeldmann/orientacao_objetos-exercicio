function Pessoa(nome, idade) { // classe principal
    this.nome = nome;
    this.idade = idade;
}

function Funcionario(nome, idade, cargo, salario) { // classe herdeira 1
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome, idade); 
}

function Identidade(nome, idade, anoNascimento, cpf) { // classe herdeira 2
    this.anoNascimento = anoNascimento;
    this.cpf = cpf;
    
    Pessoa.call(this, nome, idade);
}

// instâncias
const pessoa1 = new Pessoa("Carlos", "23");
const funcionario1 = new Funcionario("Carlos", "23", "designer", 5000);
const identidade1 = new Identidade("Carlos", "23", "2001", "41958217142");


// console.log
console.log(pessoa1);
console.log(funcionario1);
console.log(identidade1);

// verificação das instâncias
console.log(pessoa1 instanceof Pessoa);
console.log(funcionario1 instanceof Funcionario);
console.log(identidade1 instanceof Identidade);