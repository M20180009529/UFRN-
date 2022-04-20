//minha bibliteca de classes
//triangulo equilatero
function triangle(0)
{
	//atributos
	var b= 0;
	//metodos
	this.get_base=function(){
		return b;		
	}
	this.set_base=function(newBase){
		b=newBase;
	}
	this.area_triangulo=function(){
		return Math.pow(b,2)*Math.pow(3,1/2)/4;
	}
	this.perimetro_triangulo=function(){
		return 3*b;	
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