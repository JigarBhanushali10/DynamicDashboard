"use strict";(self.webpackChunkDynamicDashboard=self.webpackChunkDynamicDashboard||[]).push([[412],{7412:(B,p,r)=>{r.r(p),r.d(p,{DashboardModule:()=>P});var s=r(6895),u=r(9615),t=r(1571);function v(e,a){1&e&&t._UZ(0,"span",5)}function x(e,a){1&e&&t._UZ(0,"span",6)}function y(e,a){1&e&&t._UZ(0,"span",7)}const k=["*"];let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{cardTitle:"cardTitle",showZoomIcon:"showZoomIcon",showSettingsIcon:"showSettingsIcon",showHelpIcon:"showHelpIcon"},standalone:!0,features:[t.jDz],ngContentSelectors:k,decls:8,vars:4,consts:[[1,"d-flex","justify-content-between","align-items-center"],[1,"fs-5"],["class","icon-zoom-out mx-1 cursor-pointer",4,"ngIf"],["class","icon-settings mx-1 cursor-pointer",4,"ngIf"],["class","icon-help-circle mx-1 cursor-pointer",4,"ngIf"],[1,"icon-zoom-out","mx-1","cursor-pointer"],[1,"icon-settings","mx-1","cursor-pointer"],[1,"icon-help-circle","mx-1","cursor-pointer"]],template:function(o,n){1&o&&(t.F$t(),t.TgZ(0,"div",0)(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"div",1),t.YNc(4,v,1,0,"span",2),t.YNc(5,x,1,0,"span",3),t.YNc(6,y,1,0,"span",4),t.qZA()(),t.Hsn(7)),2&o&&(t.xp6(2),t.Oqu(n.cardTitle),t.xp6(2),t.Q6J("ngIf",n.showZoomIcon),t.xp6(1),t.Q6J("ngIf",n.showSettingsIcon),t.xp6(1),t.Q6J("ngIf",n.showHelpIcon))},dependencies:[s.ez,s.O5],encapsulation:2}),e})();const m={id:"paddingBelowLegends",beforeInit(e){const a=e.legend.fit;e.legend.fit=function(){return a.bind(e.legend)(),this.height+=10}}};var c=r(8676);let g=(()=>{class e{constructor(o){this.chartService=o}ngOnInit(){this.chartService.generateChart({canvasId:"doughnutChart",type:"doughnut",labels:["Not started","Completed","In progress"],data:[10,6,2],backgroundColor:["#9ca3ac","#6acb6d","#51ccc3"],borderColor:"#101321",dataLabelsAnchorPosition:"end",dataLabelsAlignPosition:"end",plugins:[m],displayXAxils:!1,alignLegend:"center",displayYAxils:!1})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-task"]],standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[[1,"card-content","doughnut-chart-container"],["id","doughnutChart"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"canvas",1),t.qZA())},dependencies:[s.ez],encapsulation:2}),e})(),b=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-health"]],standalone:!0,features:[t.jDz],decls:28,vars:0,consts:[[1,"card-content"],["aria-label","Construction heath",1,"table"],["scope","row",1,"ps-0"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"table",1)(2,"tbody")(3,"tr")(4,"th",2),t._uU(5,"Time"),t.qZA(),t.TgZ(6,"td"),t._uU(7,"14% ahead of schedule."),t.qZA()(),t.TgZ(8,"tr")(9,"th",2),t._uU(10,"Task"),t.qZA(),t.TgZ(11,"td"),t._uU(12,"21 task to be completed."),t.qZA()(),t.TgZ(13,"tr")(14,"th",2),t._uU(15,"Workload"),t.qZA(),t.TgZ(16,"td"),t._uU(17,"0 task overdue."),t.qZA()(),t.TgZ(18,"tr")(19,"th",2),t._uU(20,"Progress"),t.qZA(),t.TgZ(21,"td"),t._uU(22,"14% completed."),t.qZA()(),t.TgZ(23,"tr")(24,"th",2),t._uU(25,"Cost"),t.qZA(),t.TgZ(26,"td"),t._uU(27,"42% under budget."),t.qZA()()()()())},dependencies:[s.ez],encapsulation:2}),e})(),C=(()=>{class e{constructor(o){this.chartService=o}ngOnInit(){this.chartService.generateChart({canvasId:"horizontalBarChart",type:"bar",labels:["Contracts","Design","Procurement","Construction","Post Construction","Project Completion"],data:[100,80,19,0,0,0],backgroundColor:["#6dca6c","#6dca6c","#df5a9c","#9ca3ac","#9ca3ac","#9ca3ac"],borderColor:"#101321",dataLabelsAnchorPosition:"start",dataLabelsAlignPosition:"start",displayLegends:!1,displayXAxils:!1,displayYAxils:!0,showDatasetLabelPercentage:!0,indexAxis:"y",showGridY:!1,showGridX:!1})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-progress"]],standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[[1,"card-content","horizontal-barchart-container"],["id","horizontalBarChart"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"canvas",1),t.qZA())},dependencies:[s.ez],encapsulation:2}),e})(),f=(()=>{class e{constructor(o){this.chartService=o}ngOnInit(){this.chartService.generateChart({canvasId:"timeHorizontalBarChart",type:"bar",labels:["Planned Completion","Actual Completion","Ahead","","",""],data:[{label:"Actual",data:[],backgroundColor:"#3facf4",barThickness:25},{label:"Behind",data:[],barThickness:25,backgroundColor:"#f7a651"},{label:"On Time",barThickness:25,data:[0,14,14],backgroundColor:"#66ce6a"}],dataLabelsAnchorPosition:"start",dataLabelsAlignPosition:"start",displayXAxils:!0,displayYAxils:!0,showDatasetLabelPercentage:!0,indexAxis:"y",xMax:100,xMin:-100,stepSizeX:25,showGridY:!1,isDataArrayObject:!0})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-time"]],standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[[1,"card-content","horizontal-barchart-container"],["id","timeHorizontalBarChart"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"canvas",1),t.qZA())},dependencies:[s.ez],encapsulation:2}),e})(),Z=(()=>{class e{constructor(o){this.chartService=o}ngOnInit(){this.updateChart()}updateChart(){this.chartService.generateChart({canvasId:"verticalBarChart",type:"bar",isDataArrayObject:!0,labels:[""],data:[{label:"Actual",data:[3300],backgroundColor:"#84ba5d",barThickness:50,borderWidth:2},{label:"Planned",data:[4600],backgroundColor:"#53d2f9",barThickness:50,borderWidth:2},{label:"Budget",data:[6e3],backgroundColor:"#4199e0",barThickness:50,borderWidth:2}],plugins:[m],dataLabelsAnchorPosition:"end",dataLabelsAlignPosition:"end",displayXAxils:!1,displayYAxils:!0,showDatasetLabelPercentage:!1,showDatasetLabels:!1,stepSizeY:1500,customYLabels:o=>0===o?"$"+o:o/1e3+"K"})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cost"]],standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[[1,"card-content","horizontal-barchart-container"],["id","verticalBarChart"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"canvas",1),t.qZA())},dependencies:[s.ez],encapsulation:2}),e})(),w=(()=>{class e{constructor(o){this.chartService=o}ngOnInit(){this.chartService.generateChart({canvasId:"workloadHorizontalBarChart",type:"bar",labels:["Mike","Jennifer","Brandon","Sam","George"],data:[{label:"Completed",data:[4,2,0,0,0],backgroundColor:"#85bb5e"},{label:"Remaining",data:[0,2,1,3,1],backgroundColor:"#53d2f9"},{label:"Overdue",data:[0,0,0,0,0],backgroundColor:"#f0514c"}],dataLabelsAnchorPosition:"start",dataLabelsAlignPosition:"start",displayXAxils:!0,displayYAxils:!0,showDatasetLabelPercentage:!1,indexAxis:"y",stepSizeX:2,showGridY:!1,isStackX:!0,isStackY:!0,isDataArrayObject:!0,showDatasetLabels:!1,xMax:8})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-workload"]],standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[[1,"card-content","horizontal-barchart-container"],["id","workloadHorizontalBarChart"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"canvas",1),t.qZA())},dependencies:[s.ez],encapsulation:2}),e})();const D=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:19,vars:16,consts:[[1,"row","m-0","border-bottom","border-secondary"],[1,"border","border-secondary","border-bottom-0","border-start-0","p-4","col-12","col-md-6","col-xl-4"],["cardTitle","Health",3,"showHelpIcon"],["cardTitle","Tasks",3,"showHelpIcon","showSettingsIcon","showZoomIcon"],["cardTitle","Progress",3,"showHelpIcon","showSettingsIcon","showZoomIcon"],["cardTitle","Time",3,"showHelpIcon","showSettingsIcon","showZoomIcon"],["cardTitle","Cost",3,"showHelpIcon","showSettingsIcon","showZoomIcon"],["cardTitle","Workload",3,"showHelpIcon","showSettingsIcon","showZoomIcon"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"app-card",2),t._UZ(3,"app-health"),t.qZA()(),t.TgZ(4,"div",1)(5,"app-card",3),t._UZ(6,"app-task"),t.qZA()(),t.TgZ(7,"div",1)(8,"app-card",4),t._UZ(9,"app-progress"),t.qZA()(),t.TgZ(10,"div",1)(11,"app-card",5),t._UZ(12,"app-time"),t.qZA()(),t.TgZ(13,"div",1)(14,"app-card",6),t._UZ(15,"app-cost"),t.qZA()(),t.TgZ(16,"div",1)(17,"app-card",7),t._UZ(18,"app-workload"),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("showHelpIcon",!0),t.xp6(3),t.Q6J("showHelpIcon",!0)("showSettingsIcon",!0)("showZoomIcon",!0),t.xp6(3),t.Q6J("showHelpIcon",!0)("showSettingsIcon",!0)("showZoomIcon",!0),t.xp6(3),t.Q6J("showHelpIcon",!0)("showSettingsIcon",!0)("showZoomIcon",!0),t.xp6(3),t.Q6J("showHelpIcon",!0)("showSettingsIcon",!0)("showZoomIcon",!0),t.xp6(3),t.Q6J("showHelpIcon",!0)("showSettingsIcon",!0)("showZoomIcon",!0))},dependencies:[h,g,b,C,f,Z,w],encapsulation:2}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(D),u.Bz]}),e})();var z=r(7009);let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[c.C],imports:[s.ez,S,h,g,b,C,f,Z,w,z.S]}),e})()}}]);