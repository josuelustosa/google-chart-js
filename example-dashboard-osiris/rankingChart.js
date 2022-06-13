function rankingChart() {
  var data = new google.visualization.arrayToDataTable([
    ["Componente", "Posição"],
    ["Comp001", 5],
    ["Comp002", 4],
    ["Comp003", 3],
    ["Comp004", 2],
    ["Comp005", 1],
  ]);

  var options = {
    width: 800,
    height: 400,
    legend: { position: "none" },
    chart: {
      title: "Chess opening moves",
      subtitle: "popularity by percentage",
    },
    axes: {
      x: {
        0: { side: "top", label: "White to move" }, // Top x-axis.
      },
    },
    bar: { groupWidth: "90%" },
  };

  var chart = new google.charts.Bar(document.getElementById("testRanking"));

  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
