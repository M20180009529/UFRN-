function Point()
{
   // atributos 
   var _x = 0;
   var _y = 0;
   // Metodos
    this.set_x = function(x)
	{
	   _x = x;
	}
	this.get_x = function()
	{
	   return _x;
	}
	
	this.set_y = function(y)
	{
	   _y = y;
	}
	this.get_y = function()
	{
	   return _y;
	}
	
	this.set_coord = function(x,y)
	{
		_x = x;
		_y = y;
	}
	
	this.distance = function(p)
	{
	  var d;
	  d = Math.sqrt(Math.pow((_x - p.get_x()),2) + Math.pow((_y - p.get_y()),2));
	  return d;
	}
	
	this.new_Point = function(dx,dy)
	{
	    novoPonto = new Point();
		novoPonto.set_coord(_x + dx, _y + dy);
		return novoPonto;
	}
	
    this.translate = function(dx,dy)
	{
		_x = _x + dx;
		_y = _y + dy;	

	}
	
	this.scale = function(sx,sy)
	{
		_x = _x * sx;
		_y = _y * sy;	
	}

	this.rotate = function(teta)
	{
		_x = _x * Math.cos(teta) - _y * Math.sin(teta);
		_y = _y * Math.cos(teta) + _x * Math.sin(teta);	
	}

	this.get_estado = function(pos_x,pos_y,color) 
	{
		
		var text ="[" + this.get_x() + ","+ this.get_y() + "]";
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.font = '8pt Arial';
		ctx.fillStyle = color;
		ctx.restore();
		ctx.fillText(text,pos_x,pos_y);
		ctx.fill();
	}
	
	this.draw = function()
	{
		return "sou um Ponto ";
		
	}
	
	this.get_coord = function()
	{
		
		return "Coordenadas : [" + this.get_x() + "," + this.get_y() + "]";
	}
		
}

//Line

function Line()
{
   // atributos 
  
   
   // Metodos
   
    this.draw = function(color,p)
	{
		
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
	    ctx.moveTo(this.get_x(),this.get_y());
		ctx.moveTo(this.get_x() + p[0].get_x(),this.get_y()+ p[0].get_y());
		ctx.lineTo(this.get_x() +p[1].get_x(),this.get_y()+ p[1].get_y());
		ctx.fillStyle = color;
		ctx.stroke();
		ctx.closePath();

	
}
}
Line.prototype = new Point();

// Circle
function Circle()
{
	// atributos
	var _r = 0;
	
	// metodo
	this.set_raio = function(p)
	{
		_r = p[0].distance(p[1]);
	}
	this.get_raio = function()
	{
		return _r;
	}
	
	this.get_area= function()
	{
		return Math.PI * Math.pow(_r,2)	
	}
	this.get_perimeter= function()
	{
		return Math.PI * 2 * _r;	
	}	
	 
	
	this.draw = function(color)
	{
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.arc(this.get_x(),this.get_y(),this.get_raio(),0,2*Math.PI);
		ctx.closePath();
		ctx.fillStyle=color;
		ctx.fill();
	}
	
}
Circle.prototype = new Point();

// Square

function Square()
{
  // atributos
  var _l = 0;
  var _d = 0;
  
  // methods
  this.set_diagonal = function(p)
  {
    _d = p[0].distance(p[1]);
  }
  this.get_diagonal = function()
	  {
		return _d;
	  }
  this.set_lado = function(p)
  {
    _l = _d/Math.sqrt(2);
  }
  
  this.get_lado = function()
	  {
		return _l;
	  }
	this.area = function()
	{

		return Math.pow(_l,2);
	}  
	 
	this.perimeter = function()
	{

		return 4 * _l;
	}   
	  
	  
	  this.draw = function(color)
	{
		

		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.rect(this.get_x(),this.get_y(),_l,_l);
		ctx.closePath();
		ctx.fillStyle=color;
		ctx.fill();
	}
		
}
Square.prototype = new Point();


// Rectangle
function Rectangle()
{
  // atributos
  var _h = 0;
  var _b = 0
  
  // methods
  this.set_altura = function(p)
  {
    _h = Math.abs(p[1].get_y() - p[0].get_y());
  }
	this.get_altura = function()
	  {
		return _h;
	  }
  this.set_base = function(p)
  {
    _b = Math.abs(p[1].get_x() - p[0].get_x());
  }
  this.get_base = function()
	  {
		return _b;
	  }
	  
	this.area = function()
	{

		return _h * _b;
	}  
	 
	this.perimeter = function()
	{

		return 2 * ( _b + _h);
	} 

	this.draw = function(color)
	{
		

		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.rect(this.get_x(),this.get_y(),_h,_b);
		ctx.closePath();
		ctx.fillStyle=color;
		ctx.fill();
	}
		
}
Rectangle.prototype = new Point();

// Triangle
function Triangle()
{
	// atributos
	var _a = 0;
	var _b = 0;
	var _c = 0;
	
	// metodo
	this.set_a = function(p)
	{
		_a = p[0].distance(p[1]);
	}
	this.get_a = function()
	{
		return _a;
	}
	this.set_b = function(p)
	{
		_b = p[1].distance(p[2]);
	}
	this.get_b = function()
	{
		return _b;
	}
	this.set_c = function(p)
	{
		_c = p[2].distance(p[0]);
	}
	this.get_c = function()
	{
		return _c;
	}
	
	this.set_lados = function(p)
	{
		_a = p[0].distance(p[1]);
		_b = p[1].distance(p[2]);
		_c = p[2].distance(p[0]);
	}
	
	
	this.get_area= function()
	{
		var sp = this.get_perimeter()/2;
		return Math.sqrt(sp * (sp - _a) * (sp - _b) * (sp - _c));	
	}
	this.get_perimeter= function()
	{
		return _a + _b + _c;	
	}	
	
	
	this.draw = function(color,p)
	{
		
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(this.get_x(),this.get_y())
		ctx.lineTo(this.get_x() + p[0].get_x(),this.get_y()+ p[0].get_y());
		ctx.lineTo(this.get_x() +p[1].get_x(),this.get_y()+ p[1].get_y());
		ctx.lineTo(this.get_x() +p[2].get_x(),this.get_y()+ p[2].get_y());
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
	}
	


}
Triangle.prototype = new Point();


function Figura()
{

	this.draw = function(img)
	{    
		  var canvas = document.getElementById('myCanvas');
		  var ctx = canvas.getContext('2d');
		  
		  ctx.drawImage(img, this.get_x(),this.get_y());
	}


}
Figura.prototype = new Point();
