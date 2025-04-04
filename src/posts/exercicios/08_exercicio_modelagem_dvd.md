---
icon: dumbbell
date: 2024-11-28 17:43:00.00 -3
tag:
  - java
category:
  - exercicio
  - entrega
order: 8
---

# Exercício: Modelagem DVD

[^Takenami]


1. Utilizando os conhecimentos de O.O. construa um programa utilizando as informações abaixo. As características de um DVD devem ser definidas de acordo com as informações a seguir. Ao ser criado o DVD inicialmente está desligado. Seu volume pode alterar de 1 a 5 sendo que o nível inicial é 2. É possível inserir um filme no DVD. O filme possui as seguintes caraterísticas: nome, categoria e duração. 

    As seguintes operações podem ser realizadas pelo DVD:
    - ligar e desligar;
    - aumentar e diminuir volume;
    - inserir filme;
    - remover filme;
    - play e stop.

    O programa deve obedecer as seguintes regras:
    - Só é possível fazer qualquer uma destas operações se o DVD estiver ligado;
    - Só é possível dar play no DVD se existir algum filme inserido;
    - Só é possível dar stop se o DVD estiver em play;
    - Ao dar play deve aparecer o nome e a duração do filme que está sendo exibido.

## Link

[link para entrega da tarefa](https://classroom.github.com/a/0k094RKC)

<div style="display:none">
  ::: details 

  <figure>

  ```plantuml
  @startuml
  class DVD{
      + boolean ligado
      - int volume
      - Filme filme
      - boolean emPlay
  }
  class Filme{
    - String nome;
    - String categoria;
    - double duracao;
  }
  DVD --> Filme
  @enduml

  ```
  </figure>


  @[code](../code/modelagemDVD/DVD.java)

  @[code](../code/modelagemDVD/Filme.java)

  @[code](../code/modelagemDVD/Mesa.java)

  :::

</div> 


<!-- @include: ../../../includes/bib.md -->
