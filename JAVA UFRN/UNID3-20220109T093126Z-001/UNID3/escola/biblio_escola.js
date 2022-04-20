//minha bibliteca de escola
//Pessoa
function pessoa()
{
	//atributos
    var Nome= 'a';
	var Endereco= 'a';
	var Nasc= 'a';
	//metodos
	this.get_Nome=function(){
		return Nome;	
	}
	this.get_Endereco=function(){
		return Endereco;	
	}
	this.get_Nasc=function(){
		return Nasc;	
	}
	this.IncluirDadosPessoais=function(newe){
		Nome=newe;
	}
	this.AtualizarEndereco=function(newe){
		Endereco=newe;
	}
	this.LerDadosPessoais=function(newe){
		Nome=newe;
	}

}
//Professor
function professor()
{
	//atributos
    var Nome= 'a';
	var Endereco= 'a';
	var Grau= 'a';
	var Disciplinas= 'a';
	var Area= 'a';
	var Nasc= 'a';
	var NumDisc= 'a';
	//metodos
	this.get_Nome=function(){
		return Nome;	
	}
	this.get_Endereco=function(){
		return Endereco;	
	}
	this.get_Grau=function(){
		return Grau;	
	}
	this.get_Disciplinas=function(){
		return Disciplinas;	
	}
	this.get_Area=function(){
		return Area;	
	}
	this.get_Nasc=function(){
		return Nasc;	
	}
	this.get_NumDisc=function(){
		return NumDisc;	
	}
	this.IncluirDadosPessoais=function(newe){
		Nome=newe;
	}
	this.AtualizarEndereco=function(newe){
		Endereco=newe;
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
