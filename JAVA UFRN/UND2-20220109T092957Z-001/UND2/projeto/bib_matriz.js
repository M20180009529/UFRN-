function lerMatriz(m)
{
    for ( var i = 0; i < m.length; i++ ) 
    {
		for ( var k = 0; k < m[i].length; k++ ) 
		{
			m[i][k] = +prompt("Digite o elemento ['+i+']['+k+']");		
		}	
	}	

}

function printMatriz(m)
{
	document.write("<table border = 1>");
	for ( var i = 0; i < m.length; i++ ) 
	 {document.write('<tr>');
		for ( var k = 0; k < m[i].length; k++ ) 
		{
			document.write("<td width = 50>"+ m[i][k] + "</td>");
		}
		document.write('</tr>');
	}
	document.write("</table>");	
}


function lerMtable(m,form)
{
	var c = 0;
	for ( var i = 0; i < m.length; i++ ) 
    {
		for ( var k = 0; k < m[i].length; k++ ) 
		{
			m[i][k]=document.forms[form].elements[c + k].value
	
		}
		c = c + m[i].length;
	}	
}

function printMtable(m,table)
{
	for ( var i = 0; i < m.length; i++ ) 
    {
		for ( var k = 0; k < m[i].length; k++ ) 
		{
			document.getElementById(table).rows[i].cells[k].innerHTML = m[i][k];		
		}
		
	}	
}


function alteraMatriz(m,cte)
{
  for ( var i = 0; i < m.length; i++ ) 
    {
		for ( var k = 0; k < m[i].length; k++ ) 
		{
			m[i][k]= (+m[i][k]) * cte
		}
		
	}	
}

function somaMatriz(ma,mb,mc)
{
  for ( var i = 0; i < ma.length; i++ ) 
    {
		for ( var k = 0; k < ma[i].length; k++ ) 
		{
			mc[i][k]= (+ma[i][k]) + (+mb[i][k])
		}
		
	}	
}

function subtraiMatriz(ma,mb,mc)
{
   for ( var i = 0; i < ma.length; i++ ) 
    {
		for ( var k = 0; k < ma[i].length; k++ ) 
		{
			mc[i][k]= (+ma[i][k]) - (+mb[i][k])
		}
		
	}
}

function multiplicaMatriz(ma,mb,mc)
{
   for ( var i = 0; i < ma.length; i++ ) 
    {
		for ( var k = 0; k < ma[i].length; k++ ) 
		{
		   soma = 0;
		   for ( var j = 0; j < ma[i].length; j++ ) 
		   {
			soma += (+ma[i][j]) * (+mb[j][k])
		   }
		   mc[i][k] = soma;
		}
		
	}
}

function multiplicaVM(ma,va,vr)
{
   for ( var i = 0; i < ma.length; i++ ) 
    {
		for ( var k = 0; k < ma[i].length; k++ ) 
		{
		   soma = 0;
		   for ( var j = 0; j < ma[i].length; j++ ) 
		   {
			soma += (+ma[i][j]) * (+va[j])
		   }
		   vr[i] = soma;
		}
		
	}
}