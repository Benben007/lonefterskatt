//forex
var express = require('express');
var mustacheExpress = require('mustache-express');

var app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
 
app.get('/', function (req, res) {

	number1=req.query['number1']
	//number2=req.query['number2']
	//number3=req.query['number3']
	
	var p1=null
	
	function calculate(p1){
		arbetsgivaravgift=p1*0.3142  
		kommunalskatt=p1*0.2187		
		jobbavdrag=-1877			
		landstingsskatt=p1*0.1148	
		statligskatt=0				
		kyrkoavgift=p1*0.0077					
		behallning=p1-kommunalskatt-jobbavdrag-landstingsskatt-statligskatt-kyrkoavgift
		totalskatt=100-(behallning/p1*100)
		var data1=[]
		data1.push(['Arbetsgivaravgift', p1*0.3142 ],['Kommunalskatt', p1*0.2187], ['Jobbavdrag', -1877], ['Landstingsskatt', p1*0.1148], ['Statligskatt', 0], ['Kyrkoavgift', p1*0.0077], ['Behållning', p1-kommunalskatt-jobbavdrag-landstingsskatt-statligskatt-kyrkoavgift] )
		dataAsString1 = JSON.stringify(data1)
		console.log(data1)
		var data2=[]
		data2.push(['Arbetsgivaravgift', p1*0.3142 ],['Kommun', p1*0.2187-1877], ['Landstingsskatt', p1*0.1148], ['Statligskatt', 0], ['Kyrkoavgift', p1*0.0077], ['Behållning', p1-kommunalskatt-jobbavdrag-landstingsskatt-statligskatt-kyrkoavgift] )
		dataAsString2 = JSON.stringify(data2)
		/*g=(p1*p3/p2)-p1;
		g2=g*100/p1;
		g3=g2/0.7;
		g=g.toFixed(0);
		g2=g2.toFixed(2);
		g3=Math.max(g2,g3).toFixed(2);
		g4=p1;
		g5=p2;
		g6=p3; */

	}
	
	calculate(number1);
	
  res.render ('lonefterskatt.html',{
  		arbetsgivaravgift:arbetsgivaravgift.toFixed(0),
		kommunalskatt:kommunalskatt.toFixed(0),
		jobbavdrag:jobbavdrag.toFixed(0),
		landstingsskatt:landstingsskatt.toFixed(0),
		statligskatt:statligskatt.toFixed(0),
		kyrkoavgift:kyrkoavgift.toFixed(0),
		behallning:behallning.toFixed(0),
		totalskatt:totalskatt.toFixed(1),
		data1:dataAsString1,
		data2:dataAsString2
  	/*g:g,
  	g2:g2,
  	g3:g3,
  	g4:g4,
  	g5:g5,
  	g6:g6*/
  });


});



app.use(express.static('public'));
 
app.set('port', ( process.env.PORT || 3000 ));
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });

//app.listen(3000);

//console.log('running port 3000')