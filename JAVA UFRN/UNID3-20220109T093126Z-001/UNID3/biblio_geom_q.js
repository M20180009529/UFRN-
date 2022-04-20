//minha bibliteca de classes
//triangulo equilatero
function triangle()
{
	//atributos
	var a= 0;
	var b= 0;
	var c= 0;
	//metodos
	this.get_p1=function(){
		return p1;		
	}
	this.get_p2=function(){
		return p2;		
	}
	this.get_p3=function(){
		return p3;		
	}
	this.distA=function(p){	
		a=p[0].dist2p(p[1])
	}
	this.distB=function(p){	
		b= p[1].dist2p(p[2])
	}
	this.distC=function(p){	
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
//circulo
function sphere(0)
{
	//atributos
	var r= 0;
	//metodos
	this.get_raio=function(){
		return r;		
	}
	this.set_raio=function(newRaio){
		r=newRaio;
	}
	this.area_sphere=function(){
		return Math.PI*Math.pow(r,2);
	}
	this.perimetro_sphere=function(){
		return 2*Math.PI*r;	
	}
}
//quadrado
function square()
	//atributos
    var lado= 0;
	//metodos
	this.get_lado=function(){
		return lado;	
	}
	this.set_lado=function(newLado){
		lado=newLado;
	}
	this.area_quadrado=function(){
		return lado*lado;
	}
	this.perimetro_quadrado=function(){
		return 4*lado;	
	}
}
//retangulo
function retangulo()
	//atributos
    var lado1= 0;
	var lado2= 0;
	//metodos
	this.get_lado1=function(){
		return lado1;	
	}
	this.get_lado2=function(){
		return lado2;	
	}
	this.set_lado1=function(newLado){
		lado1=newLado;
	}
	this.set_lado2=function(newLado){
		lado2=newLado;
	}
	this.area_quadrado=function(){
		return lado1*lado2;
	}
	this.perimetro_quadrado=function(){
		return 2*lado1+lado2*2;	
	}
}