/*  
Sistema de Pontos de Fidelidade
Refatore um programa que calcula pontos de fidelidade com base no valor gasto e adiciona pontos extras para clientes VIPs. */

//Código inicial
let valorGasto = 250;
let clienteVIP = true;
let pontos = valorGasto * 1;
if (clienteVIP) {
  pontos += 50;
}
console.log("Pontos acumulados: " + pontos);

//Refatoração