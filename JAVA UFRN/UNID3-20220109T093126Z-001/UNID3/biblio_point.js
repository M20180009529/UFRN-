function Point()
{
	//atributos
	var _x= 0;
	var _y= 0;
	//metodos
	this.get_x=function(){
		return _x;		
	}
	this.get_y=function(){
		return _y;		
	}
	this.set_x=function(new1){
		_x=new1;
	}
	this.set_y=function(new1){
		_y=new1;
	}
	//metodos auxiliares
	this.get_cood=function(){
		return "cordenadas : ["+_x+","+_y+"]";		
	}
	this.set_coord=function(new1,new2){
		_x=new1;
		_y=new2;
	}
	this.novoPonto=function(dx,dy){
		var novo=new Point()
		novo.set_coord(_x+dx,_y+dy);
		return novo
	}
	this.dist2p=function(y){	
		return Math.sqrt(Math.pow(_x-y.get_x(),2)+Math.pow(_y-y.get_y(),2))
	}
}

