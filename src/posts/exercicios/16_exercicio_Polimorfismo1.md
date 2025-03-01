---
icon: dumbbell
date: 2025-02-20 19:00:00.00 -3
tag:
  - heranca
  - polimorfismo
category:
  - exercicio
  - entrega
order: 16
---

# Exercício Polimorfismo

adapitado de [^Takenami]

1. Criar uma classe abstrata chamada `Operacao` com o atributo `valor` do tipo `double` e um método abstrato chamado `operar()` que retornará um valor do tipo `double`.
1. Crie uma classe `Debito` e outra `Credito` que herda as caraterísticas de `Operacao.` O construtor de `Debito` e `Credito` deve receber o valor da operação e atribuir este valor a variável definida em `Operacao` (superclasse). Estas classes (`Debito` e `Credito`) devem ter um método `operar()` que deve ser programado de acordo com sua finalidade: `operar()` da classe `Debito` retorna o valor negativo pois a operação deve ser um debito enquanto a o método `operar()` de `Credito` retorna o valor positivo.
1. Criar a classe `Conta` com o atributo `saldo` do tipo `double` que inicia com 0. Esta classe possui um método `executarOperacao(Operacao opr)` que recebe um parâmetro do tipo `Operacao` que vai operar o saldo da conta correte (se for debito diminui, se for credito soma). Esta classe também possui o método `getSaldo()` que retorna o saldo do saldo atual.
1. Crie a classe `Correntista` com os seguintes atributos: `nome` (do tipo String) e `conta` (do tipo `Conta`). O construtor de `Correntista` deve receber seu nome. A classe deve ter 2 métodos: `public String getNome()` e `public Conta getConta().` Estes métodos retornam o nome e a conta respectivamente.
1. Crie a classe `Banco` como descrito no código abaixo:
    ```java
    public class Banco {
        private List<Correntista> correntistas;

        public Banco() {
            this.correntistas = new ArrayList();
        }

        public void addCorrentista(String nome){
            //...
        }

        public Correntista getCorrentista(String nome) {
            //...
        }

        public void debitar(String nomeCorrentista, double valor) {
            Debito d = new Debito(valor);
            getCorrentista(nomeCorrentista).getConta().executarOperacao(d);
        }

        public void creditar(String nomeCorrentista, double valor) {
            Credito c = new Credito(valor);
            getCorrentista(nomeCorrentista).getConta().executarOperacao(c);
        }

        public double getSaldo(String nomeCorrentista) {
            return getCorrentista(nomeCorrentista).getConta().getSaldo();
        }

        public void transferir(String nomeCorrentistaOrigem, String nomeCorrentistaDestino, double valor) {
            debitar(nomeCorrentistaOrigem, valor);
            creditar(nomeCorrentistaDestino, valor);
        }
    }
    ```

    ::: details 
   

   @[code](../code/exercicioPolimorfismo/Operacao.java)
   @[code](../code/exercicioPolimorfismo/Credito.java)
   @[code](../code/exercicioPolimorfismo/Debito.java)
   @[code](../code/exercicioPolimorfismo/Conta.java)
   @[code](../code/exercicioPolimorfismo/Correntista.java)
   @[code](../code/exercicioPolimorfismo/Banco.java)
   @[code](../code/exercicioPolimorfismo/TestaConta.java)


   ::: 
  
2. Modifique o método `transferir` da classe `Banco` para utilizar uma classe `Transferir` que herde de `Operacao`:

## Entrega

[Link](https://classroom.github.com/a/snELaLUD)


<!-- @include: ../../../includes/bib.md -->