function enviar() {
      var nome=document.getElementById("nome");

      if (nome.value !="") {
        alert("Obrigado "+nome.value+" ! Mas esta área está indisponível.");
      } else {
        alert("Por gentileza, coloque seus dados");
      }
}
