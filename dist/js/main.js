document.addEventListener("DOMContentLoaded", async () => {
  const rawOrders = await fetch("http://localhost:5000/api/datakrusn");
  const orders = await rawOrders.json();
  chartsInit(getQuant(orders.data));
});
const chartsInit = (data) => {
  var myChart = echarts.init(document.getElementById("main"));
  const dataset = {
    dimensions: data[0],
    source: data.splice(1, data.length),
  };
  const pieOption = {
    dataset: [dataset],
    series: [
      {
        type: "pie",
        // associate the series to be animated by id
        id: "Score",
        radius: [0, "50%"],
        universalTransition: true,
        animationDurationUpdate: 1000,
      },
    ],
  };
  const barOption = {
    dataset: [dataset],
    xAxis: {
      type: "category",
    },
    yAxis: {},
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    series: [
      {
        type: "bar",
        // associate the series to be animated by id
        id: "Score",
        // Each data will have a different color
        colorBy: "data",
        encode: { x: "name", y: "score" },
        universalTransition: true,
        animationDurationUpdate: 1000,
      },
    ],
  };
  const lineOption = {
    dataset: [dataset],
    xAxis: {
      type: "category",
    },
    yAxis: {},
    series: [
      {
        type: "line",
        // associate the series to be animated by id
        id: "Score",
        // Each data will have a different color
        colorBy: "data",
        encode: { x: "name", y: "score" },
        universalTransition: true,
        animationDurationUpdate: 1000,
      },
    ],
  };

  let option = barOption;
  document.getElementById("bar_select").onclick = () => {
    console.log("bar");
    myChart.setOption(barOption, true);
  };
  document.getElementById("pie_select").onclick = () => {
    myChart.setOption(pieOption, true);
  };
  document.getElementById("line_select").onclick = () => {
    myChart.setOption(lineOption, true);
  };
  myChart.setOption(option, true);
};
const getQuant = (data) => {
  return data.map((element) => {
    return element.filter((e, i) => i == 1 || i == 8);
  });
};
