
var demo4 = new CountUp("users", 0, 515, 0, 2.5, options);
demo4.start();
var demo3 = new CountUp("comments", 0, 315, 0, 2.5, options);
demo3.start();
var demo2 = new CountUp("doctors", 0, 120, 0, 2.5, options);
demo2.start();
var demo1 = new CountUp("regs", 0, 320, 0, 2.5, options);
demo1.start();

var ctx = $("#chart");

var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [{
			label: 'visits',
			type: 'bar',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255,99,132,1)',
			borderWidth: 1
		},
		{
			type: 'line',
			label: 'Line Component',
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255,99,132,0.8)',
			fill:false
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true,
					scaleColor:false
				}
			}],
			xAxes : [ {
				gridLines : {
					display : false
				}
			} ]
		},
		scaleShowVerticalLines: false
	}
});
	/*$('#risk-chart').easyPieChart({
		barColor:'rgba(255, 99, 132, 0.9)',
	});*/

	$('#risk-chart, #risk-chart1').percentageLoader({
		valElement: 'p',
		strokeWidth: 8,
		bgColor: '#d9d9d9',
		ringColor: '#d53f3f',
		textColor: '#9a9a9a',
		fontSize: '18px',
		fontWeight: 'normal'
	});
	$('.carousel').carousel()
	/*var chart = c3.generate({
		bindto: '#chart',
		data: {
			x:'x',
			columns: [
			['x', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			['data1', 30, 200, 100, 400, 150, 250],
			['data2', 30, 200, 100, 400, 150, 250]
			], 
			type: 'bar',
			types: {
				data1: 'spline',
				data2: 'bar'
			},
			colors: {
				data1:'#0CB596',
				data2:'#ef6f6c'
			}
		},
		axis: {
			x: {
            type: 'category' // this needed to load string x value
        }
    }
});
var data= 70;
var chart = c3.generate({
	bindto: '#risk-chart',
	data: {
		columns:[
		['data1' , data],
		['data2', 100-data]
		], 
		type: 'donut'
	}
})*/


$("#sparklines1").sparkline([5,6,7,6,6,5,3,4,2,4,6,7], {
	type: 'bar',
	width: '130px',
	lineColor: '#898989',
	spotColor: 'transparent',
	barColor: '#32A56D'
});
$("#sparklines2").sparkline([15,06,17,12,9,15,10,20,12,08,15,17], {
	type: 'bar',
	width: '130px',
	lineColor: '#898989',
	spotColor: 'transparent',
	barColor: '#ef6f6c'
});
$("#sparklines3").sparkline([5,6,7,6,6,5,3,4,2,4,6,7], {
	type: 'bar',
	width: '130px',
	lineColor: '#898989',
	spotColor: 'transparent',
	barColor: '#0CB596'
});
$("#sparklines4").sparkline([5,6,7,6,6,5,3,4,2,4,6,7], {
	type: 'bar',
	width: '130px',
	lineColor: '#898989',
	spotColor: 'transparent',
	barColor: '#FF8218'
});
$("#schedule").fullCalendar({
	height: 450,
		//defaultView: 'agendaWeek',
		events: [
		{
			title:'meet dr.usha',
			start: '2017-01-22T10:00:00',
			end: '2017-01-22T16:00:00',
			//rendering: 'background',
			backgroundColor:'#128bc6'
		},
		{
			title:'visit BP checkup',
			start: '2017-01-31T16:00:00',
			//rendering: 'background',
			backgroundColor:'#ef6f6e'
		}
		]
	});

$('.map').gmap3({
	center:[17.431511, 78.414552],
	zoom:10
})
.marker([
	{position:[17.431511, 78.414552]},
	{position:[17.4140322, 78.5501247]},
	{position:[17.4123397, 78.4963502]}
	]);