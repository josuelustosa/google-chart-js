function drawJsonChart() {
  // BAR CHART WITH JSON
  var dadosJson = $.ajax({
    url: "dados.json",
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
