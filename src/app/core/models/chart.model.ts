export interface ChartServiceType {
  canvasId: string;
  type: any;
  labels?: string[];
  data: any;
  backgroundColor?: string[];
  borderColor?: string;
  plugins?: any[];
  dataLabelsAnchorPosition: any;
  dataLabelsAlignPosition: any;
  displayLegends?: boolean;
  displayXAxils?: boolean;
  displayYAxils?: boolean;
  showDatasetLabelPercentage?: boolean;
  indexAxis?: string;
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  showDatasetLabels?: boolean;
  barPercentage?: number;
  categoryPercentage?: number;
  stepSizeX?: number;
  stepSizeY?: number;
  showGridY?: boolean;
  showGridX?: boolean;
  customYLabels?: (value: any, index: any, ticks: any, chart: any) => {};
  isStackX?: boolean;
  isStackY?: boolean;
  isDataArrayObject?: boolean;
  barThickness?: number;
  alignLegend?: string;
  legendColor?: string;
  ticksColor?: string;
}

export const LIGHT_THEME_CHART_COLORS = {
  '--chart-light-blue': ' #ab2d06',
  '--chart-blue': ' #bc6620',
  '--chart-green': ' #953492',
  '--chart-pink': ' #20a563',
  '--chart-legend-color': '#ffffff',
  '--chart-label-color': '#ffffff',
};
export const DARK_THEME_CHART_COLORS = {
  success: '#953492',
  primary: '#ab2d06',
  info: ' #bc6620',
  pink: ' #20a563',
  danger: '#ee504f',
  warning: '#f6a45a',
  black: '#000',
  white: '#ffffff',
  chart_legend_color: '#ffffff',
  chart_label_color: '#ffffff',
};
export const LIGHT_THEME = {
  '--bs-white': ' #ffffff',
  '--bs-primary': ' #101321',
  '--bs-secondary': ' #000000',
  '--bs-danger': ' #f14f4f',
  '--bs-success': ' #101321',
  '--bs-info': ' #54d2f9',
  '--bs-warning': ' #f9a653',
  '--bs-body-bg': ' #ffffff',
  '--bs-body-color': ' var(--bs-primary)',
  '--bs-sidebar-bg': ' #efecdf',
  '--bs-navbar-item-active-bg': ' #252732',
  '--bs-navbar-item-active-border': ' var(--bs-success)',
  '--bs-navbar-bg': ' var(--bs-body-bg)',
  '--bs-navbar-color': ' var(--bs-primary)',
  // table
  '--bs-border-color': 'var(--bs-primary)',
};
export const DARK_THEME = {
  '--bs-primary': ' #9ca3ac',
  '--bs-secondary': ' #ffffff',
  '--bs-danger': ' #f14f4f',
  '--bs-success': ' #84bb5d',
  '--bs-info': ' #54d2f9',
  '--bs-warning': ' #f9a653',
  '--bs-body-bg': ' #101321',
  '--bs-body-color': ' var(--bs-primary)',
  '--bs-sidebar-bg': ' #000000',
  '--bs-navbar-item-active-bg': ' #252732',
  '--bs-navbar-item-active-border': ' var(--bs-success)',
  '--bs-navbar-bg': ' var(--bs-body-bg)',
  '--bs-navbar-color': ' var(--bs-primary)',
  // table
  '--bs-border-color': ' var(--bs-primary)',
};
