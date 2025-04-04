---
icon: edit
date: 2025-03-20 19:30:00.00 -3
tag:
  - threads
category:
  - aula
order: 21
---



# Threads
- Threads são linhas de execuções que realizam tarefas simultâneas (caso tenhamos mais de 1 processador) ou de forma a compartilhar o processamento. 
- Cada thread é como um programa individual que tem total poder sobre a CPU.
- Java suporta explicitamente como parte da linguagem.
- Com o uso de Threads é possível dividir o programa em dois ou mais processos que podem rodar de forma paralela.
- Multithreading implica em duas ou mais tarefas rodando de forma concorrente (aparentemente em paralelo) dentro de um mesmo programa.
- Alguns programas necessitam fazer várias tarefas que requerem recursos computacionais diversos. Se estas tarefas podem ser feitas independentemente, então é possível usar threads para que o programa não fique limitado a performance dos recursos lentos (I/O).

<figure>

```plantuml

@startgantt
[T1] lasts 5 days
[T2] lasts 3 days
[T2] starts at [T1]'s end
[T3] lasts 5 days
[T3] starts at [T2]'s end


[T1.1] as [T4] lasts 6 days
[T4] displays on same row as [T1]
[T4] starts at [T3]'s end

[T3.1] as [T5] lasts 4 days
[T5] displays on same row as [T3]
[T5] starts at [T4]'s end

	
[T2.1] as [T6] lasts 3 days
[T6] displays on same row as [T2]
[T6] starts at [T5]'s end

@endgantt
```

<figcaption>Exemplo de uso de tempo do processador pelas Threads.</figcaption>
</figure>

<br>

<figure>

```plantuml
@startuml
state nascimento
state pronta
state executando
state bloqueada
state esperando
state dormindo
state morta #brown

nascimento --> pronta : start()
pronta --> executando: run()
executando --> esperando : wait()
executando --> dormindo : sleep()
executando --> morta : fim do run()
executando --> bloqueada : I/O
bloqueada --> pronta : fim I/O
esperando --> pronta : notify()
dormindo --> pronta : fim tempo 

@enduml
```

<figcaption>Diagrama de estado de uma Thread.</figcaption>
</figure>

- Existem duas formas para criar um thread: 
    - Estendendo a classe `Thread`
    - Implementando a interface `Runnable`. 
- Nos dois casos é necessário sobrescrever o método `run()` que é o " main()" do thread. 
- O método run deve conter a execução que irá rodar pelo tempo de vida do thread. Quando o método terminar, o thread morre. 

- Para iniciar o thread é necessário chamar o método `start()` . 
- É a maquina virtual quem controla a execução e o ciclo de vida do thread. 

## Herdando a classe Thread

@[code](./code/threads/MinhaThread.java)


## Implementando a interface Runnable

@[code](./code/threads/MeuRunnable.java)


## Executando Threads

@[code](./code/threads/App.java)


- Estendendo a classe Thread significa que a subclasse não pode estender qualquer outra classe, enquanto que a classe que implementa a interface Runnable tem essa opção.


## Estados de uma Thread

- Nova Thread
    - Quando uma Thread é criada mas não foi chamado o start()
- Rodando
    - Quando o método start() é chamado em uma nova thread ela altera o seu estado para em execução é chamando o método run()
- Não Execução
    - Uma thread interrompe sua execução quando um quatro seguintes eventos ocorrem:
        - Quando o método sleep() é chamado e ele dorme por um período de tempo especificado
        - Quando o método suspend() é invocado
        - Quando o método wait() é chamado e a thread espera para a notificação de um recurso livre ou aguarda a conclusão de outra thread ou espera para adquirir um bloqueio de um objeto.
        - A thread está bloqueado em I / O e aguarda a sua conclusão

### Acessando informações da Threads
Thread.currentThread() pode retornar uma saída como Thread [threadA, 5, main]
- Sendo
    - nome da Thread
    - prioridade da thread 
    - nome do grupo a que pertence
### Prioridade de Execução
- Nas threads a prioridade pode ser setada a qualquer momento
    - setPriority()
    - getPriority()
- Thread 
    - MIN_PRIORITY (0)
    - NORM_PRIORITY (5)
    - MAX_PRIORITY (10)

### Gerenciando as Threads
- Dormir e acordar
    - A classe thread contém um método estático chamado sleep() que faz a thread em execução no momento pause sua execução e mude para o estado de sono. A thread vai dormir por pelo menos o tempo especificado em seu parâmetro, antes de entrar no estado executável. 
- Waiting and Notifying
    - Esperando e notificando fornecer os meios de comunicação entre as thread que sincroniza sobre o mesmo objeto. 
    - As threads executam os métodos wait() e notify() (ou notifyAll()) no objeto compartilhado para esta finalidade. 
    - O notifyAll (), notify() e wait() são métodos da classe Object. Estes métodos podem ser chamados apenas a partir de dentro de um contexto sincronizado (método sincronizado ou bloco sincronizado), caso contrário, a chamada irá resultar em um IllegalMonitorStateException. 
    - O notifyAll() método acorda todas as threads em espera no recurso. Nesta situação, as threads despertadas competem para o recurso. Uma threads recebe o recurso e os outros vão voltar a esperar.

## Synchronized
- Permite que blocos sensíveis ao acesso simultâneo sejam protegidos de corrupção
- Impede que objetos os utilizem ao mesmo tempo. 
    - Se um recurso crítico está sendo usado, só um thread tem acesso. 
    - É preciso que os outros esperem até que o recurso esteja livre. 
- Métodos sincronizados são métodos que são usados para controlar o acesso a um objeto. 
- Uma thread apenas executa um método sincronizado depois que adquiriu o bloqueio para o objeto do método ou classe. 
- Se o bloqueio já está em poder de outra thread, a thread chamada aguarda. 
- Uma thread abandona o bloqueio simplesmente ao finalizar do método sincronizado, permitindo que a próxima thread esperando por este bloqueio possa prosseguir. 
- Métodos sincronizados são úteis em situações em que os métodos podem manipular o estado de um objeto de formas que podem corromper o estado, se executados simultaneamente. 

```java
//...
public void metodo() {
    synchronized (this) {
    // conteudo do metodo
    }
}
//...

public synchronized void metodo() {
 // conteudo do metodo
}

//...
```

## Exemplo 

@[code](./code/threads/Conta.java)

@[code](./code/threads/ContaSynchronized.java)

@[code](./code/threads/AppConta.java)


## Atomic Classes

- As classes `AtomicInteger`, `AtomicLong`, `AtomicBoolean` e `AtomicReference` são classes que fornecem operações atômicas para tipos primitivos e referências de objetos.

### Como Eliminar o synchronized do Método saca()
Para eliminar a necessidade do modificador `synchronized` no método `saca()` da classe `ContaAtomic`, você precisa garantir que a verificação do saldo e a operação de subtração sejam realizadas de forma atômica. Existem algumas abordagens:

1. Usando `compareAndSet` ou `updateAndGet`
    
    ```java

    public void saca(int valor) {
        // Tenta realizar a operação até conseguir
        boolean sucesso = false;
        while (!sucesso && saldo.get() >= valor) {
            int saldoAtual = saldo.get();
            if (saldoAtual >= valor) {
                try {
                    TimeUnit.MILLISECONDS.sleep(1);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                // Tenta atualizar o saldo apenas se ele ainda for igual ao valor lido
                sucesso = saldo.compareAndSet(saldoAtual, saldoAtual - valor);
            } else {
                // Saldo insuficiente
                break;
            }
        }
    }
    ```

    ```java
    public void saca(int valor) {
        saldo.updateAndGet(saldoAtual -> {
            if (saldoAtual >= valor) {
                try {
                    TimeUnit.MILLISECONDS.sleep(1);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                return saldoAtual - valor;
            }
            return saldoAtual; // Não altera se não tiver saldo suficiente
        });
    }
    ```


1. Usando `getAndUpdate`
    ```java
    public void saca(int valor) {
        saldo.getAndUpdate(saldoAtual -> {
            if (saldoAtual >= valor) {
                try {
                    TimeUnit.MILLISECONDS.sleep(1);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                return saldoAtual - valor;
            }
            return saldoAtual; // Não altera se não tiver saldo suficiente
        });
    }
    ```


1. Usando `accumulateAndGet`
    ```java
    public void saca(int valor) {
        saldo.accumulateAndGet(valor, (saldoAtual, valorASacar) -> {
            if (saldoAtual >= valorASacar) {
                try {
                    TimeUnit.MILLISECONDS.sleep(1);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                return saldoAtual - valorASacar;
            }
            return saldoAtual; // Não altera se não tiver saldo suficiente
        });
    }

    ```

#### Exemplo conta atomic

@[code](./code/threads/ContaAtomic.java)

@[code](./code/threads/AppContaAtomic.java)

### Explicação
Todas essas abordagens usam operações atômicas do `AtomicInteger` que combinam a verificação e a atualização em uma única operação indivisível, eliminando a necessidade do `synchronized`.

O método `compareAndSet` verifica se o valor atual é igual ao esperado e, se for, atualiza para um novo valor. Tudo isso de forma atômica.

Os métodos `updateAndGet`, `getAndUpdate` e `accumulateAndGet` aplicam uma função ao valor atual e atualizam o valor, também, em uma única operação atômica.

Estas soluções são mais eficientes que usar `synchronized` porque:

- Evitam bloqueios desnecessários
- Permitem maior concorrência
- Usam instruções de hardware otimizadas (CAS - Compare-And-Swap)

### Outro exemplo de uso de Atomic

```java
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class IdGenerator {

    // Contador atômico para IDs numéricos
    // Garante que a geração de IDs seja thread-safe (segura para uso em ambientes multithread) e evita conflitos ao gerar IDs sequenciais.
    private static final AtomicLong contador = new AtomicLong(0);

    /**
     * Gera um novo ID com base no tipo genérico T.
     * Se T for Number, retorna um valor sequencial atômico.
     * Se T for UUID, gera um novo UUID.
     *
     * @param tipoClasse A classe do tipo genérico T.
     * @return Um novo ID do tipo T.
     */
    @SuppressWarnings("unchecked")
    public static <T> T gerarNovoId(Class<T> tipoClasse) {
        if (Number.class.isAssignableFrom(tipoClasse)) {
            // Se T for um subtipo de Number, usa reflexão para criar uma instância
            try {
                // Obtém o construtor que recebe um long como parâmetro
                Constructor<T> construtor = tipoClasse.getConstructor(long.class);
                // Cria uma nova instância usando o valor do contador atômico
                return construtor.newInstance(contador.incrementAndGet());
            } catch (Exception e) {
                throw new RuntimeException("Falha ao gerar ID para o tipo: " + tipoClasse.getSimpleName(), e);
            }
        } else if (tipoClasse == UUID.class) {
            // Se T for UUID, gera um novo UUID
            return (T) UUID.randomUUID();
        }

        throw new IllegalArgumentException("Tipo de ID não suportado: " + tipoClasse.getSimpleName());
    }
}
```


## Virtual threads

[^Coffeeandtips] [^devparalelismo]

O uso de threads trás diversos benefícios, como a capacidade de executar tarefas em segundo plano, permitindo que o programa continue a responder às interações do usuário enquanto outras tarefas são executadas em segundo plano, entre outros. Mas o uso de threads também pode trazer alguns desafios, como a complexidade de gerenciamento de threads, a concorrência e a segurança.

A seguir alguns dos desafios e os problemas mais comuns no uso de Threads tradicionais:

- **Gerenciamento de Threads**: Gerenciar a criação, execução e encerramento de threads é uma tarefa complexa e de responsabilidade do sistema operacional.
- **Gerenciamento de Recursos**: As threads podem consumir recursos do sistema, como memória e CPU, o que pode levar a problemas de desempenho e segurança.
- **Concorrência**: Gerenciar a concorrência entre threads pode ser complexo e pode levar a problemas de segurança e desempenho.
- **Deadlocks**: Deadlocks podem ocorrer quando duas ou mais threads esperam por recursos que são mantidos por outras threads, resultando em um bloqueio indefinido.
- **Escalabilidade Limitada**: A escalabilidade de um sistema pode ser afetada pela quantidade de threads que estão sendo executadas.

Virtual Threads representam uma mudança de paradigma na forma como o Java lida com concorrência. Tradicionalmente, os aplicativos Java dependem de threads em nível de sistema operacional, que são entidades gerenciadas pelo sistema operacional. Cada thread consome recursos significativos de memória, limitando a escalabilidade e impondo overhead (sobrecarga) ao sistema.

Virtual Threads, por outro lado, são leves e gerenciadas pela Máquina Virtual Java (JVM) em si. Elas são projetadas para serem altamente eficientes, permitindo a criação de milhares ou até milhões de threads virtuais sem esgotar os recursos do sistema. As Threads Virtuais oferecem um modelo de concorrência mais escalável e responsivo em comparação com as threads tradicionais.


As threads virtuais são criadas usando a classe `Thread` do Java, mas com um parâmetro adicional: o tipo de thread. O tipo de thread pode ser `virtual` ou `platform`. O tipo de thread `virtual` é usado para criar threads virtuais, enquanto o tipo de thread `platform` é usado para criar threads tradicionais.

As threads virtuais são criadas usando o método `start()` da classe `Thread`, da mesma forma que as threads tradicionais. Porém, ao criar uma thread virtual, é necessário especificar o tipo de thread usando o método `ofVirtual()`. Por exemplo:

### Exemplo de uso

```java
Thread.startVirtualThread(() -> {
    // Código da thread            
});
Thread thread = Thread.ofVirtual().start(() -> {
    // Código da thread
}
```

ou passando uma instância de `Runnable`

```java
Runnable runnable = new MinhaRunnable();
Thread thread = Thread.ofVirtual().start(runnable);
```




# Links w3schools

[https://dev.to/cassunde/implementando-paralelismo-com-virtual-threads-no-java-21-3om8](https://dev.to/cassunde/implementando-paralelismo-com-virtual-threads-no-java-21-3om8)

[https://www.coffeeandtips.com/post/explorando-virtual-threads-no-java-21](https://www.coffeeandtips.com/post/explorando-virtual-threads-no-java-21)

<ul>
    <li><a href="https://www.w3schools.blog/thread-life-cycle-in-java">Thread life cycle</a></li>
    <li><a href="https://www.w3schools.blog/way-of-creating-thread-in-java">Way of creating thread</a></li>
    <li><a href="https://www.w3schools.blog/better-way-to-create-a-thread-in-java">Which is a better way to create a
            thread?</a></li>
    <li><a href="https://www.w3schools.blog/methods-of-thread-class">Methods of Thread class</a></li>
    <li><a href="https://www.w3schools.blog/thread-start-vs-run-method">Difference between thread start and run
            method</a></li>
    <li><a href="https://www.w3schools.blog/why-we-call-start-method-in-thread">Why we call start method in thread?</a>
    </li>
    <li><a href="https://www.w3schools.blog/override-start-method-in-thread">Can we override start method?</a></li>
    <li><a href="https://www.w3schools.blog/override-run-method-in-thread">Can we override run method?</a></li>
    <li><a href="https://www.w3schools.blog/start-a-thread-twice">Is it possible to start a thread twice?</a></li>
    <li><a href="https://www.w3schools.blog/thread-scheduling-in-java">Thread scheduling</a></li>
    <li><a href="https://www.w3schools.blog/thread-priority-in-java">Thread priority</a></li>
    <li><a href="https://www.w3schools.blog/naming-a-thread-in-java">Naming a thread</a></li>
    <li><a href="https://www.w3schools.blog/joining-a-thread-in-java">What is join method?</a></li>
    <li><a href="https://www.w3schools.blog/daemon-thread-in-java">Daemon thread</a></li>
    <li><a href="https://www.w3schools.blog/call-run-method-directly">Can we call run method directly?</a></li>
    <li><a href="https://www.w3schools.blog/yield-sleep-thread-methods">What is the difference between sleep and yield
            method?</a></li>
    <li><a href="https://www.w3schools.blog/deadlock-in-java">Deadlock</a></li>
    <li><a href="https://www.w3schools.blog/starvation-in-java">Starvation</a></li>
    <li><a href="https://www.w3schools.blog/inter-thread-communication-in-java">Inter-thread communication</a></li>
    <li><a href="https://www.w3schools.blog/synchronization-in-java">Synchronization</a></li>
    <li><a href="https://www.w3schools.blog/synchronized-method-in-java">Synchronized method</a></li>
    <li><a href="https://www.w3schools.blog/static-synchronization-in-java">Static synchronization</a></li>
    <li><a href="https://www.w3schools.blog/synchronized-block-in-java">Synchronized block</a></li>
</ul>

<!-- @include: ../../includes/bib.md -->
