var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/bar-chart/js/jsonData.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        console.log(data)
        date = data.date_population.map(function(elem){
            return elem.date;
        })
        population = data.date_population.map(function(elem){
            return elem.population;
        })
        //console.log(population)

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['r','t','h','q','t','c'],
                datasets: [{
                    label : 'votes',
                    data : [12,3,1,4,7,8],
                backgroundColor:[
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                ],
                borderColor:[
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                ],
                borderWidth:1,
            }]
                
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}

//This is JsonData.json
//{"date_population": [
 	//	{
// 		  "date": "1941",
// 		  "population": 406760
// 		},{
// 		  "date": "1951",
// 		  "population": 778977
// 		},{
// 		  "date": "1961",
// 		  "population": 1207000
// 		}
// 	]
// }

