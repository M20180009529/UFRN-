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

function gerarmatriz(x){
		for(var i=0; i<x.length;i++){
			for(var j=0; j<x.length;j++){
			x[i][j]=Math.ceil(Math.random()*10);
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
			for(var j=0; j<x.length;j++){
			document.writeln("<td>"+x[i][j]+"</td>");
			}
			document.writeln("</tr>");
		}
		document.writeln("<br>");
	}
function dif_fin(tesq,tdir,tsup,tconv,hconv,lado,k,quanti,tem,MR)
	{
		var alfa=1.89*10^(-6); //m^2/s
		var Fo=1/4; //criterio de estabilidade
		var Bi=hconv*deltax/k; //numero de biot
		var quant=quanti-1; //quantidade de nós começa em 0
		var deltax=lado/(quanti);//o delta x da malha, sabendo que a malha e quadrada
		var deltatem=Fo*(deltax)^2/alfa;//a variação do tempo de cada interação
		var T=new Array(quanti+1);		
		var RT=new Array(tem/deltatem);
		MR=new Array(tem/deltatem);
		
		for(var i=0; i<quanti+1;i++){
			T[i]=new Array(quanti+1);
		}
		for(var i=0; i<tem/deltatem;i++){
			RT[i]=new Array(quant^2+quant);
		}
		//condições iniciais
		for(var i=0; i<(quant^2+quant);i++){
			RT[0][j]=tsup;
		}
		////////////////////////////
		var t=0;
		for(var i=1; i<tem/deltatem;i++){
			
			for(var j=0; j< quant^2+quant-1;j++){
				//para a primerira linha
				if(j<quant-1 && j!=0 && j<=quant^2-1){
					RT[i][j]=Fo*(RT[i-1][j+1]+RT[i-1][j-1]+RT[i-1][j+quant]+tsup)+(1-4*Fo)*RT[i-1][j];
				}
				if(j==0){  //primeiro elemento da primeira linha
					RT[i][j]=Fo*(RT[i-1][j+1]+tesq+RT[i-1][j+quant]+tsup)+(1-4*Fo)*RT[i-1][j];
				}
				if(j==quant-1){ //ultimo elemento da primeira linha
					RT[i][j]=Fo*(tdir+RT[i-1][j-1]+RT[i-1][j+quant]+tsup)+(1-4*Fo)*RT[i-1][j];
				}
				//para o corpo
				if(j>quant-1 && j<=quant^2-1){
					RT[i][j]=Fo*(RT[i-1][j+1]+RT[i-1][j-1]+RT[i-1][j+quant]+RT[i-1][j-quant])+(1-4*Fo)*RT[i-1][j];
				}
				if(j>quant-1 && (j%quant)==0 && j<quant^2){  //primeira coluna do corpo
					RT[i][j]=Fo*(RT[i-1][j+1]+tesq+RT[i-1][j+quant]+RT[i-1][j-quant])+(1-4*Fo)*RT[i-1][j];
				}
				if(j>quant-1 && (j%quant)==(j-1) && j<quant^2){ //ultima coluna do corpo
					RT[i][j]=Fo*(tdir+RT[i-1][j-1]+RT[i-1][j+quant]+RT[i-1][j-quant])+(1-4*Fo)*RT[i-1][j];
				}
				//ultima linha de convecção
				if(j!=(quant^2) && j!=(quant^2+quant-1) && j>=(quant^2)){
					RT[i][j]=Fo*(2*RT[i-1][j-quant]+RT[i-1][j+1]+RT[i-1][j-1]+2*Bi*tconv)+(1-4*Fo-2*Bi*Fo)*RT[i-1][j];
				}
				if(j==(quant^2) && j>=quant^2){  //primeiro elemento da convecção
					RT[i][j]=Fo*(2*RT[i-1][j-quant]+RT[i-1][j+1]+tesq+2*Bi*tconv)+(1-4*Fo-2*Bi*Fo)*RT[i-1][j];
				}
				if(j==(quant^2+quant-1) && j>=(quant^2)){  //ultimo elemento da convecção
					RT[i][j]=Fo*(2*RT[i-1][j-quant]+tdir+RT[i-1][j-1]+2*Bi*tconv)+(1-4*Fo-2*Bi*Fo)*RT[i-1][j];
				}
			}
			//matriz resultado
			
			for (var z=0;z<quant+2;z++) {       //condição de contorno
				for (var j=0;j<quant+2;j++){
					if(i>0 && j==0){
						T[z][j]=tesq;
					}
					if(i==0){
						T[z][j]=tsup;
					}
					if(i>0 && j==quant+2-1){
						T[z][j]=tdir;
					}
				}				
			}
			for(var ia=1; ia<quant+1;ia++){
				for(var j=1; j<quant+1;j++){
					T[ia][j]=RT[tem/deltatem][t];
					t=t+1;
				}
			}
			MR[t]= T;
			t=t+1;
		}
	}	