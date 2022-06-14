function drawJsonChart() {
  // BAR CHART WITH JSON
  var dadosJson = $.ajax({
    url: "dados.json",
    dataType: "json",
    async: false
  }).responseText;

  var table = new google.visualization.DataTable(dadosJson);

  var chart = new google.visualization.BarChart(
    document.getElementById("myBarChartWithJson")
  );

  chart.draw(table);
}
