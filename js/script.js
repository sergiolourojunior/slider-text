window.onload = function(){
	var slider = document.getElementById("slider");
	var texto = document.getElementsByTagName("slider");

	var div = document.getElementById("conteudo");
	var i = 0;
	var btnProximo = document.getElementById("proximo");
	var btnAnterior = document.getElementById("anterior");

	var balls = document.getElementById("balls");

	function marcador(numero){

		balls.innerHTML = '';

		for(var c=0; c<texto.length; c++)
		{
			if(c===numero)
			{
				balls.innerHTML += '<label class="atual">&bull;</label>';
			}
			else
			{
				balls.innerHTML += '<label>&bull;</label>';
			}
		}

	}

	div.innerHTML = texto[i].innerHTML;
	marcador(i);

	btnProximo.onclick = function()
	{
		i++;
		div.innerHTML = texto[i].innerHTML;

		checarBotoes();
		marcador(i);
	}

	btnAnterior.onclick = function()
	{
		i--;
		div.innerHTML = texto[i].innerHTML;

		checarBotoes();
		marcador(i);
	}

	function checarBotoes(){
		if(i>=(texto.length)-1)
		{
			btnProximo.setAttribute("disabled", "disabled");
		}
		else
		{
			btnProximo.removeAttribute("disabled");
		}

		if(i==0)
		{
			btnAnterior.setAttribute("disabled", "disabled");
		}
		else
		{
			btnAnterior.removeAttribute("disabled");
		}
	}
			
}