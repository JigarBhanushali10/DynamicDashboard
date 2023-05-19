export const customDataLabelsPlugin = {
  id: 'customDataLabels',
  afterDatasetsDraw(chart: any) {
    const {
      ctx,
      data,
      chartArea: { width, height },
    } = chart;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    ctx.save();
    data.datasets[0].data.forEach((datapoint: any, index: any) => {
      const { x, y } = chart.getDatasetMeta(0).data[index].tooltipPosition();
      const xLine = x >= halfWidth ? x : x - 10;
      const yLine = y >= halfHeight ? y + 20 : y - 20;
      const extraLine = x >= halfWidth ? 10 : -10;
      const textWidth = ctx.measureText(datapoint).width;
      const textWidthPosition = x >= halfWidth ? textWidth : -textWidth;
      ctx.font = 'bold 16px san';
      ctx.fillStyle = data.datasets[0].backgroundColor[index];
      ctx.fillText(datapoint, xLine + extraLine + textWidthPosition, yLine);
    });
  },
};

export const paddingBelowLegendsPlugin = {
  id: 'paddingBelowLegends',
  beforeInit(chart: any) {
    const fiValue = chart.legend.fit;
    chart.legend.fit = function () {
      fiValue.bind(chart.legend)();
      return (this.height += 10);
    };
  },
};
