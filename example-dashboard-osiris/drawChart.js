function drawChart() {
  // GRÁFICO: QUANTIDADE DE OPERADORES
  const DATA_NUMBER_OPERATORS = google.visualization.arrayToDataTable([
    ["Linha", "Quantidade"],
    ["Linha 01", 10],
    ["Linha 02", 30],
    ["Linha 03", 50],
    ["Linha 04", 70],
    ["Linha 05", 90],
  ]);

  const optionsNumberOperators = {
    title: "Quantidade de Operadores",
    width: 1600,
    height: 400,
    colors: ["#0E459B"],
    legend: { position: 'none' },
  };

  const chartNumberOperators = new google.visualization.ColumnChart(
    document.getElementById("numberOperators")
  );

  chartNumberOperators.draw(DATA_NUMBER_OPERATORS, optionsNumberOperators);

  // GRÁFICO: ERROS DE COMPONENTES
  const DATA_COMPONENTS_ERRORS = google.visualization.arrayToDataTable([
    ["Mês", "Entrada"],
    ["jan", 300],
    ["fev", 400],
    ["mar", 700],
    ["abr", 900],
    ["mai", 500],
    ["jun", 600],
    ["jul", 800],
    ["ago", 600],
    ["set", 600],
    ["out", 700],
    ["nov", 700],
    ["dez", 800],
  ]);

  const optionsComponentsErrors = {
    title: "Erros de Componentes",
    width: 1600,
    height: 400,
    colors: ["#c4342d"],
    legend: "none",
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("componentsErrors")
  );

  chart.draw(DATA_COMPONENTS_ERRORS, optionsComponentsErrors);
}