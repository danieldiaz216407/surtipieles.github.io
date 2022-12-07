document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "573133206224";

  const cliente = document.querySelector("#cliente").value;
  const metros = document.querySelector("#metros").value;
  const direccion = document.querySelector("#direccion").value;

  const servicio = document.querySelector("#servicio").value;
    
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_MI NEGOCIO_*%0A
		*Pedido*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
    *metros*%0A
		${metros}%0A
		*Direccion*%0A
		${direccion}%0A
		*¿producto?*%0A
		${servicio}`;
    

  if (cliente === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
