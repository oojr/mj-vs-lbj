
      google.load("visualization", "1", {packages:["corechart"]});

      //Load Regular Season Graphs
      google.setOnLoadCallback(drawPtsChart);
      google.setOnLoadCallback(drawShotChart);
      google.setOnLoadCallback(drawRbsChart);
      google.setOnLoadCallback(drawAstsChart);
      google.setOnLoadCallback(drawBlksChart);
      google.setOnLoadCallback(drawStlsChart);

      //Load Postseasons Graphs
      google.setOnLoadCallback(drawPostPtsChart);
      google.setOnLoadCallback(drawPostShotChart);
      google.setOnLoadCallback(drawPostRbsChart);
      google.setOnLoadCallback(drawPostAstsChart);
      google.setOnLoadCallback(drawPostBlksChart);
      google.setOnLoadCallback(drawPostStlsChart);

      function drawPtsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          28.2,     20.9],
          ['2',          22.7,     27.2],
          ['3',           37.1,    31.4],
          ['4',          35,     27.3],
          ['5',          32.5,     30],
          ['6',          33.6,     28.4],
          ['7',          31.5,     29.7],
          ['8',          30.1,     26.7],
          ['9',          32.6,     27.1],

        ]);

        var options = {
          chartArea:{left:40,top:10},
          hAxis:{title:"Season"},
          vAxis:{title:"Points"},
          width: 500,
          height: 300   
        };

        var chart = new google.visualization.LineChart(document.getElementById('pt-chart'));
        chart.draw(data, options);
      }

      function drawShotChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          .515,     .417],
          ['2',          .457,     .472],
          ['3',          .482,     .480],
          ['4',          .535,     .476],
          ['5',          .538,     .484],
          ['6',          .526,     .489],
          ['7',          .539,     .503],
          ['8',          .519,     .510],
          ['9',          .495,     .531],

        ]);

        var options = {
          chartArea:{left:75,top:10},
          hAxis:{title:"Season"},
          vAxis:{title:"Shooting %"},
          width: 500,
          height: 300   
        };

        var chart = new google.visualization.LineChart(document.getElementById('shot-chart'));
        chart.draw(data, options);
      }


      function drawRbsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          6.5,     5.5],
          ['2',          3.6,     7.4],
          ['3',           5.2,    7],
          ['4',          5.5,     6.7],
          ['5',          8.0,     7.9],
          ['6',          6.9,     7.6],
          ['7',          6,     7.3],
          ['8',          6.4,     7.5],
          ['9',          6.7,     7.9],

        ]);

        var options = {
          
          chartArea:{left:55,top:10},
          hAxis:{title:"Season"},
          vAxis:{title:"Rebounds"},
          width: 500,
          height: 300
        };

        var chart = new google.visualization.LineChart(document.getElementById('rb-chart'));
        chart.draw(data, options);
      }
        function drawAstsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          5.9,     5.9],
          ['2',          2.9,     7.2],
          ['3',           4.6,    6.6],
          ['4',          5.9,     6],
          ['5',          8.0,     7.2],
          ['6',          6.3,     7.2],
          ['7',          5.5,       8.6],
          ['8',          6.1,     7],
          ['9',          5.5,     6.2],

        ]);

        var options = {
          
          chartArea:{left:55,top:10},
          hAxis:{title:"Season"},
          vAxis:{title:"Assists"},
          width: 500,
          height: 300
        };

        var chart = new google.visualization.LineChart(document.getElementById('ast-chart'));
        chart.draw(data, options);
      }
      function drawBlksChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          0.8,     0.7],
          ['2',          1.2,     0.7],
          ['3',           1.5,    0.8],
          ['4',          1.6,     0.7],
          ['5',          0.8,     1.1],
          ['6',          0.7,     1.1],
          ['7',          1,       1],
          ['8',          0.9,     0.6],
          ['9',          0.8,     0.8],

        ]);

        var options = {
          
          chartArea:{left:55,top:10},
          hAxis:{title:"Season"},
          vAxis:{title:"Blocks"},
          width: 500,
          height: 300
        };

        var chart = new google.visualization.LineChart(document.getElementById('blk-chart'));
        chart.draw(data, options);
      }
     function drawStlsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          2.4,     1.6],
          ['2',          2.1,     2.2],
          ['3',          2.9,     1.6],
          ['4',          3.2,     1.6],
          ['5',          2.9,     1.8],
          ['6',          2.8,     1.7],
          ['7',          2.7,     1.6],
          ['8',          2.3,     2.1],
          ['9',          2.8,     1.5],

        ]);

        var options = {
          
          chartArea:{left:60,top:10},
          hAxis:{title:"Season"},
          vAxis:{title:"Steals"},
          width: 500,
          height: 300
        };

        var chart = new google.visualization.LineChart(document.getElementById('stl-chart'));
        chart.draw(data, options);
      }

      function drawPostPtsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          29.3,     30.8],
          ['2',          43.7,     25.1],
          ['3',          35.7,     28.2],
          ['4',          36.3,     35.3],
          ['5',          34.8,     29.1],
          ['6',          36.7,     23.7],
          ['7',          31.1,     30.3],
         
        ]);

        var options = {
          chartArea:{left:40,top:10},
          hAxis:{title:"Postseason"},
          vAxis:{title:"Points"},
          width: 500,
          height: 300   
        };

        var chart = new google.visualization.LineChart(document.getElementById('post-pt-chart'));
        chart.draw(data, options);
      }

      function drawPostShotChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          .436,     .476],
          ['2',          .505,     .416],
          ['3',          .417,     .411],
          ['4',          .531,     .510],
          ['5',          .510,     .502],
          ['6',          .514,     .466],
          ['7',          .524,     .500],

        ]);

        var options = {
          chartArea:{left:75,top:10},
          hAxis:{title:"Postseason"},
          vAxis:{title:"Shooting %"},
          width: 500,
          height: 300   
        };

        var chart = new google.visualization.LineChart(document.getElementById('post-shot-chart'));
        chart.draw(data, options);
      }
      function drawPostRbsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          5.8,     8.1],
          ['2',          6.3,     8.1],
          ['3',          7.0,     7.8],
          ['4',          7.1,     9.1],
          ['5',          7.0,     9.3],
          ['6',          7.2,     8.4],
          ['7',          6.4,     9.7],
         

        ]);

        var options = {
          
          chartArea:{left:55,top:10},
          hAxis:{title:"Postseason"},
          vAxis:{title:"Rebounds"},
          width: 500,
          height: 300
        };

        var chart = new google.visualization.LineChart(document.getElementById('post-rb-chart'));
        chart.draw(data, options);
      }
      function drawPostAstsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          8.5,     5.8],
          ['2',          5.7,     8.0],
          ['3',          6.0,     7.6],
          ['4',          4.7,     7.3],
          ['5',          7.6,     7.6],
          ['6',          6.8,     5.9],
          ['7',          8.4,     5.6],
         

        ]);

        var options = {
          
          chartArea:{left:55,top:10},
          hAxis:{title:"Postseason"},
          vAxis:{title:"Assists"},
          width: 500,
          height: 300
        };

        var chart = new google.visualization.LineChart(document.getElementById('post-ast-chart'));
        chart.draw(data, options);
      }

       function drawPostBlksChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          1.0,     0.7],
          ['2',          1.3,     0.5],
          ['3',          2.3,     1.3],
          ['4',          1.1,     0.9],
          ['5',          0.8,     1.8],
          ['6',          0.9,     1.2],
          ['7',          1.4,     0.7]
          

        ]);

        var options = {
          
          chartArea:{left:55,top:10},
          hAxis:{title:"Postseason"},
          vAxis:{title:"Blocks"},
          width: 500,
          height: 300
        };

        var chart = new google.visualization.LineChart(document.getElementById('post-blk-chart'));
        chart.draw(data, options);
      }
     function drawPostStlsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Season', 'Jordan', 'James'],
          ['1',          2.8,     1.4],
          ['2',          2.3,     1.7],
          ['3',          2.0,     1.8],
          ['4',          2.4,     1.6],
          ['5',          2.5,     1.7],
          ['6',          2.8,     1.7],
          ['7',          2.4,     1.9]

        ]);

        var options = {
          
          chartArea:{left:60,top:10},
          hAxis:{title:"Postseason"},
          vAxis:{title:"Steals"},
          width: 500,
          height: 300
        };

        var chart = new google.visualization.LineChart(document.getElementById('post-stl-chart'));
        chart.draw(data, options);
      }

    