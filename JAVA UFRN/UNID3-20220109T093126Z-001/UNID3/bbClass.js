//minha bibliteca de classes

function Person(nome,job)
{
	//atributos
	var name= nome;
	var job= job;
	//metodos
	this.showPerson=function(){
		document.writeln("Nome: " +this.name+" Job: "+ this.job);
		
	}
}
//esfera
function square(l)
	//atributos
    var lado= l;
	//metodos
	this.get_lado=function(){
		return lado;	
	}
	this.set_lado=function(newLado){
		lado=newLado;
	}
	this.area=function(){
		return lado*lado;
	}
	this.perimetro=function(){
		return 4*lado;	
	}
}