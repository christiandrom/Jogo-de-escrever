var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function(){
   var conteudoInput = campo.val();

   var qtdPalavras = conteudoInput.split(/\S+/).length -1;
   $("#contador-palavras").text(qtdPalavras);

   var qtdCaracteres = conteudoInput.length;
   $("#contador-caracteres").text(qtdCaracteres);
})

var tempoFrase = $("#tempo-frase").text();
campo.on("focus",function(){
   setInterval(function(){
      tempoFrase--;
     $("#tempo-frase").text(tempoFrase);
     if(tempoFrase < 0){
      campo.attr("disabled", true)
     }
     
   },1000);
});

