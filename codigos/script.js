// Busque os elementos HTML

/* formulario.onsubmit = (event) => {
  event.preventDefault(); // Impede o comportamento padrão de envio do formulário
 */
  // Sua lógica aqui!
/* }; */


console.log(calcularMassa(60, 1.70))


function calcularMassa(peso,altura){
  return Math.round(peso / (altura*altura))
}