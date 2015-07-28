$(document).ready(function(){

  $("#calcula-nota").on("click", onClick)

  function onClick () {
    var primeiroBimestre = parseInt($("#1bim").val());
    var segundoBimestre = parseInt($("#2bim").val());
    var terceiroBimestre = parseInt($("#3bim").val());
    var quartoBimestre = parseInt($("#4bim").val());

    if(isNaN(primeiroBimestre) || isNaN(segundoBimestre) || isNaN(terceiroBimestre) || isNaN(quartoBimestre)){
      $("span#resultado").html("Erro: Preencha todos os campos");
    } else {
      var primeiroSemestre = (primeiroBimestre + segundoBimestre)/2
      var segundoSemestre = (terceiroBimestre + quartoBimestre)/2
      var mediaFinal = (primeiroSemestre + segundoSemestre)/2
      $("span#resultado").html(mediaFinal)
    }

  }




});
