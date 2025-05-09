// Pie Chart
new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Food", "Transport", "Shopping", "Salary"],
    datasets: [{
      label: "Expenses",
      data: [500000, 1500000, 1200000, 5000000],
      backgroundColor: ["#ff9aa2", "#ffdac1", "#b5ead7", "#c7ceea"]
    }]
  }
});

// Line Chart
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
      label: "Balance Trend",
      data: [3000000, 4500000, 5200000, 4700000, 5800000],
      borderColor: "#3ac28d",
      fill: false
    }]
  }
});
