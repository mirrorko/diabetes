export const data = {
  chart: {
    type: "spline",
  },
  title: {
    text: "My Blood Glucose",
  },
  yAxis: {
    title: {
      text: "mg/dl",
    },
    labels: {
      format: "{value}",
    },
  },
  series: [
    {
      data: [180, 160, 214, 220, 203, 196],
    },
  ],
};
