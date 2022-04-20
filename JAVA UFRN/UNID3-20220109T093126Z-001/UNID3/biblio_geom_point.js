//minha bibliteca de formas com pontos
//quadrado
function square()
{
	//atributos
    var diag= 0;
	//metodos
	this.get_diag=function(){
		return diag;	
	}
	this.set_diag=function(p){
		diag= p[0].dist2p(p[1]);
	}
	this.get_lado=function(){
		return Math.sqrt(Math.pow(diag,2)/2);
	}
	this.area_quadrado=function(){
		return Math.pow(diag,2)/2;
	}
	this.perimetro_quadrado=function(){
		return 4*Math.sqrt(Math.pow(diag,2)/2);	
	}
}
//circulo
function sphere()
{
	//atributos
	var r= 0;
	//metodos
	this.get_raio=function(){
		return r;		
	}
	this.set_raio=function(p){
		r=p[0].dist2p(p[1]);
	}
	this.area_sphere=function(){
		return Math.PI*Math.pow(r,2);
	}
	this.perimetro_sphere=function(){
		return 2*Math.PI*r;	
	}
}

//retangulo
function retangulo()
{
	//atributos
    var ladox= 0;
	var ladoy= 0;
	//metodos
	this.get_ladox=function(){
		return ladox;	
	}
	this.get_ladoy=function(){
		return ladoy;	
	}
	this.diag_ret=function(){
		return Math.sqrt(Math.pow(ladox,2)*Math.pow(ladoy,2));
	}
	this.set_lado=function(p){
		ladox=Math.abs(p[0].get_x()-p[1].get_x());
		ladoy=Math.abs(p[0].get_y()-p[1].get_y());
	}
	this.area_retangulo=function(){
		return ladox*ladoy;
	}
	this.perimetro_retangulo=function(){
		return 2*ladox+ladoy*2;	
	}
}
//triangulo 
function triangle()
{
	//atributos
	var a= 0;
	var b= 0;
	var c= 0;
	//metodos
	this.get_a=function(){
		return a;		
	}
	this.get_b=function(){
		return b;		
	}
	this.get_c=function(){
		return c;		
	}
	this.distT=function(p){	
		a=p[0].dist2p(p[1]);
		b=p[1].dist2p(p[2]);
		c=p[2].dist2p(p[0])
	}
	this.area_triangulo=function(){
		var s= (a+b+c)/2;
		return Math.sqrt(s*(s-a)*(s-b)*(s-c))
	}
	this.perimetro_triangulo=function(){
		return a+b+c;	
	}
}