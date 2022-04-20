function somamatriz(x,y,z)
	{
		for(var i=0; i<x.length;i++){
			for(var j=0; j<x.length;j++){
			z[i]=x[i]+y[i]
			}
		}
	}
function subtraçãomatriz(x,y,z)
	{
		for(var i=0; i<x.length;i++){
			for(var j=0; j<x.length;j++){
			z[i]=x[i]-y[i]
			}
		}
	}
function mult_escalar_matriz(x,y,z)
	{
		for(var i=0; i<x.length;i++){
			for(var j=0; j<x.length;j++){
			z[i]=x[i]*y
			}
		}
	}

function gerarmatriz(x,max,min){
		for(var i=0; i<x.length;i++){
			for(var j=0; j<x.length;j++){
			x[i][j]=Math.floor(Math.random() * (max - min) ) + min;;
			}
		}
	}
function multiplicarmatriz(x,y,z){
	var q;
		if(x[0].length==y.length){
			for(var t=0; t<x.length;t++){
				for(var i=0; i<y[0].length;i++){
					q=0;
					for(var j=0; j<x[i].length;j++){
						q=x[i][j]*y[j][i]+q
					}
					z[i][t]=q;
				}
			}
		}else{
			alert(" Não pode fazer a multiplicação");
		}
		
	}
function imprimirmatriz(x){
		document.writeln("<table border =1>")
		for(var i=0; i<x.length;i++){
			document.writeln("<tr>");
			for(var j=0; j<x[i].length;j++){
			document.writeln("<td>"+x[i][j]+"</td>");
			}
			document.writeln("</tr>");
		}
		document.writeln("<br>");
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
function media_linha(x,med){
	
		for(var i=0; i<x.length;i++){
			med[i]=0;
			for(var j=0; j<x.length;j++){
				med[i]=x[i][j]+med[i];
			}
			med[i]=med[i]/x.length;
		}
		
	}

	function variancia_linha(x,med,vari){
	
		for(var i=0; i<x.length;i++){
			vari[i]=0;
			for(var j=0; j<x.length;j++){
				vari[i]=Math.pow(x[i][j]-med[i],2)+vari[i];
			}
			vari[i]=vari[i]/(x.length-1);
		}
		
	}
	function DP(vari,DP1){
	
		for(var i=0; i<DP1.length;i++){
				DP1[i]=Math.pow(vari[i],0.5);
		}
		
	}
	function maiorDP(DP1){
	var x=DP1[0];
	var y=1;
		for(var i=0; i<DP1.length;i++){
			if ( x<DP1[i] ){
				x=DP1[i];
				y=i+1
			}
		}
		return y;	
	}
function questão2(n){
		var som=0;
			for(var i=0; i<n.length-1;i++){
				som=som+n[i][0]*n[i+1][1];
			}
		return som
	}