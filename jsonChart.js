function drawJsonChart() {
  // BAR CHART WITH JSON
  var dadosJson = $.ajax({
    url: "https://gist.githubusercontent.com/josuelustosadev/ba5bf23ea7f4852088f25fdaed1975cc/raw/8b2b08ce028299cb980d2ff5ba7d8a039b9f51d3/dados.json",
    dataType: "json",
    async: false,
  }).responseText;

  var table = new google.visualization.DataTable(dadosJson);

  table.sort([
    {
      column: 1, 
      desc: false
    }
  ]);

  var options = {
    title: "Usuários e Poupanças",
    weidht: 920,
    height: 600,
    hAxis: {
      gridlines: {
        color: "transparent",
      },
      format: "currency",
      textPosition: "none"
    },
    annotations: {
      alwaysOutside: true,
    },
    legend: "none",
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("myBarChartWithJson")
  );

  chart.draw(table, options);
}
