function somavetor(x,y,z)
	{
		for(var i=0; i<x.length;i++){
			z[i]=x[i]+y[i]
		}
	}
	
function gerarvetor(x){
		for(var i=0; i<x.length;i++){
			x[i]=Math.ceil(Math.random()*10);
		}
	}
function imprimirvetor(x){
		document.writeln("<table border =1>")
		for(var i=0; i<x.length;i++){
			document.writeln("<tr>");
				document.writeln("<td>"+x[i]+"</td>");
			document.writeln("</tr>");
		}
		document.writeln("<br>");
	}

function somaelementosvetor(x){
		var j
		for(var i=0; i<x.length;i++){
			j=j+x[i];
		}
		return j
	}

