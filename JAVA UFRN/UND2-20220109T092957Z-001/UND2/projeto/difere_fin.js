

function dif_fin(tesq,tdir,tsup,tconv,hconv,lado,k,quanti,tem,table)
	{
		var alfa=1; //m^2/s
		var Fo=0.25 //criterio de estabilidade
		var quant=quanti-1; //quantidade de nós começa em 0
		var deltax=lado/(quanti);//o delta x da malha, sabendo que a malha e quadrada
		var Bi=hconv*deltax/k; //numero de biot
	
		
		var deltatem=Fo*Math.pow(deltax,2)/alfa;//a variação do tempo de cada interação
		var tam= Math.trunc(tem/deltatem);
	  var T=new Array(quanti+1);		
		var RT=new Array(tam);

		
		for(var i=0; i<quanti+1;i++){
			T[i]=new Array(quanti+1);
		}
		for(var i=0; i<tam;i++){
			RT[i]=new Array(Math.pow(quant,2)+quant);
		}
		//condições iniciais
		for(var i=0; i<(Math.pow(quant,2)+quant);i++){
			RT[0][i]=tsup;
		}
		////////////////////////////
		var t=0;  //para as condições de contorno
		for(var i=1; i<tam;i++){
			
			for(var j=0; j< Math.pow(quant,2)+quant;j++){
				//para a primerira linha
				if(j<quant-1 && j!=0 && j<=Math.pow(quant,2)-1){
					RT[i][j]=Fo*(RT[i-1][j+1]+RT[i-1][j-1]+RT[i-1][j+quant]+tsup)+(1-4*Fo)*RT[i-1][j];
				}
				if(j==0){  //primeiro elemento da primeira linha
					RT[i][j]=Fo*(RT[i-1][j+1]+tesq+RT[i-1][j+quant]+tsup)+(1-4*Fo)*RT[i-1][j];
				}
				if(j==quant-1){ //ultimo elemento da primeira linha
					RT[i][j]=Fo*(tdir+RT[i-1][j-1]+RT[i-1][j+quant]+tsup)+(1-4*Fo)*RT[i-1][j];
				}
				//para o corpo
				if(j>quant-1 && j<=Math.pow(quant,2)-1 && ((j+1)%quant)!=0){
					RT[i][j]=Fo*(RT[i-1][j+1]+RT[i-1][j-1]+RT[i-1][j+quant]+RT[i-1][j-quant])+(1-4*Fo)*RT[i-1][j];
				}
				if(j>quant-1 && (j%quant)==0 && j<Math.pow(quant,2)){  //primeira coluna do corpo
					RT[i][j]=Fo*(RT[i-1][j+1]+tesq+RT[i-1][j+quant]+RT[i-1][j-quant])+(1-4*Fo)*RT[i-1][j];
				}
				if(j>quant-1 && ((j+1)%quant)==0 && j<Math.pow(quant,2)){ //ultima coluna do corpo
					RT[i][j]=Fo*(tdir+RT[i-1][j-1]+RT[i-1][j+quant]+RT[i-1][j-quant])+(1-4*Fo)*RT[i-1][j];
				}
				//ultima linha de convecção
				if(j!=(Math.pow(quant,2)) && j!=(Math.pow(quant,2)+quant-1) && j>=(Math.pow(quant,2))){
					RT[i][j]=Fo*(2*RT[i-1][j-quant]+RT[i-1][j+1]+RT[i-1][j-1]+2*Bi*tconv)+(1-4*Fo-2*Bi*Fo)*RT[i-1][j];
				}
				if(j==(Math.pow(quant,2)) && j>=Math.pow(quant,2)){  //primeiro elemento da convecção
					RT[i][j]=Fo*(2*RT[i-1][j-quant]+RT[i-1][j+1]+tesq+2*Bi*tconv)+(1-4*Fo-2*Bi*Fo)*RT[i-1][j];
				}
				if(j==(Math.pow(quant,2)+quant-1) ){  //ultimo elemento da convecção
					RT[i][j]=Fo*(2*RT[i-1][j-quant]+tdir+RT[i-1][j-1]+2*Bi*tconv)+(1-4*Fo-2*Bi*Fo)*RT[i-1][j];
				}
			}
			//matriz resultado
			
			
		}
		for (var z=0;z<=quant+1;z++) {       //condição de contorno
				for (var j=0;j<=quant+1;j++){
					if(z>0 && j==0){
						T[z][j]=tesq;
					}
					if(z==0){
						T[z][j]=tsup;
					}
					if(z>0 && j==quant+1){
						T[z][j]=tdir;
					}
				}				
			}
			//colocar resultados
			var w=0;
			for(var z=1; z<=quant+1;z++){
				for(var j=1; j<=quant;j++){
					T[z][j]=RT[tam-1][w];
					w=w+1;
				}
			}

    printMtable(T,table);
	}	