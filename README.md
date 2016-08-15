# Sobre
<p>Projeto baseado em um slider de texto. Ideal para uma seção de avisos aos usuários ou listagem.</p>

## Funcionamento
<p>Ele exibe por padrão o primeiro conteúdo, ao clicar no botão ">" ele passa para o próximo conteúdo, indicando abaixo com marcadores o número total e o conteúdo atual.</p>

## Instalação
<p>Para inseri-lo em seu projeto, basta copiar o arquivo <code>script.js</code> que está dentro da pasta <code>js</code> para seu local de preferência e, copiar o script que está no arquivo <code>index.html</code> para o local desejado.</p>
<p>Para integra-lo com banco de dados, basta colocar as tag <slider> dentro de um laço de repetição, exemplo:</p>

```
<section id="slider">
	<?php
	$sql = "SELECT conteudo FROM notificacoes";
	$resultado = pg_query($conect, $sql);
	while($dado = pg_fetch_array($resultado))
	{
	  echo '<slider>'.$dado['conteudo'].'</slider>';
	?>
	<article id="conteudo"></article>
	<span id="balls"></span>
	<main><button id="anterior" disabled="disabled"><</button><button id="proximo">></button></main>
</section>
```

## Modificações futuras
+ Estilização;
+ Adaptação para imagens;
+ Avançar slider automaticamente;
+ Animação com Jquery.
