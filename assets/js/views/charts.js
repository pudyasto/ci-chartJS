var cardOpt = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 1,
        fontColor: 'transparent'
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false
      }
    }]
  },
  elements: {
    line: {
        tension: 0.00001,
        borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};  

function setEmp(obj){
    var Data = [];
    var Labels = [];
    var Total = 0;
    $.each(obj.emp, function(key, data){
        Data.push(data.total);
        Labels.push(data.hire_year);
        Total = Number(Total) + Number(data.total);
    });         

    $(".employees").html(numeral(Total).format('0,0'));
    // Prepare Json data End

    // Prepare Chart Start
    var config = {
        type: 'bar',
        data: {
                datasets: [
                  {
                      type: 'bar',
                      label: 'Employees/Year',
                      backgroundColor: $.brandSuccess,
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: $.brandSuccess,
                      data: Data,
                      fill: false,
                      borderWidth: 1
                  }
                ],
                labels:Labels
            },
        options: cardOpt
    };
    var ChartLineEmployees = $('#LineEmployees').get(0).getContext('2d');
    if(typeof chartEmployees != 'undefined' ){
        chartEmployees.destroy();
    }
    chartEmployees = new Chart(ChartLineEmployees, config);
    // Prepare Chart End
}

function setMaleEmp(obj){
    var Data = [];
    var Labels = [];
    var Total = 0;
    $.each(obj.m_emp, function(key, data){
        Data.push(data.total);
        Labels.push(data.hire_year);
        Total = Number(Total) + Number(data.total);
    });         

    $(".male-employees").html(numeral(Total).format('0,0'));
    // Prepare Json data End

    // Prepare Chart Start
    var config = {
        type: 'bar',
        data: {
                datasets: [
                  {
                      type: 'line',
                      label: 'Male Employees/Year',
                      backgroundColor: $.brandInfo,
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: $.brandInfo,
                      data: Data,
                      fill: false,
                      borderWidth: 1
                  }
                ],
                labels:Labels
            },
        options: cardOpt
    };
    var ChartMaleEmployees = $('#LineMaleEmployees').get(0).getContext('2d');
    if(typeof chartMaleEmployees != 'undefined' ){
        chartMaleEmployees.destroy();
    }
    chartMaleEmployees = new Chart(ChartMaleEmployees, config);
    // Prepare Chart End
}

function setFemaleEmp(obj){
    var Data = [];
    var Labels = [];
    var Total = 0;
    $.each(obj.f_emp, function(key, data){
        Data.push(data.total);
        Labels.push(data.hire_year);
        Total = Number(Total) + Number(data.total);
    });         

    $(".female-employees").html(numeral(Total).format('0,0'));
    // Prepare Json data End

    // Prepare Chart Start
    var config = {
        type: 'bar',
        data: {
                datasets: [
                  {
                      type: 'line',
                      label: 'Female Employees/Year',
                      backgroundColor: $.brandDanger,
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: $.brandDanger,
                      data: Data,
                      fill: false,
                      borderWidth: 1
                  }
                ],
                labels:Labels
            },
        options: cardOpt
    };
    var ChartFemaleEmployees = $('#LineFemaleEmployees').get(0).getContext('2d');
    if(typeof chartFemaleEmployees != 'undefined' ){
        chartFemaleEmployees.destroy();
    }
    chartFemaleEmployees = new Chart(ChartFemaleEmployees, config);
    // Prepare Chart End
}

function setMaleFemaleEmp(obj){
    var Data = [];
    var Labels = ["Male","Female"];
    var Total = 0;
    $.each(obj.mf_emp, function(key, data){
        Data.push(data.male);
        Data.push(data.female);
        Total = Number(data.female) + Number(data.male);
    });         

    $(".male-female-employees").html(numeral(Total).format('0,0'));
    // Prepare Json data End

    // Prepare Chart Start
    var config = {
        type: 'pie',
        data: {
                datasets: [
                  {
                      type: 'pie',
                      label: 'Male And Female Employees/Year',
                      backgroundColor: [$.brandInfo, $.brandDanger],
                      borderColor: 'rgba(255,255,255,.55)',
                      data: Data,
                      fill: false,
                      borderWidth: 1
                  }
                ],
                labels:Labels
            },
        options: cardOpt
    };
    var ChartLineMaleFemaleEmployees = $('#LineMaleFemaleEmployees').get(0).getContext('2d');
    if(typeof chartLineMaleFemaleEmployees != 'undefined' ){
        chartLineMaleFemaleEmployees.destroy();
    }
    chartLineMaleFemaleEmployees = new Chart(ChartLineMaleFemaleEmployees, config);
    // Prepare Chart End
}

function setMaleFemaleMain(obj){
    var DataM = [];
    var DataF = [];
    var Labels = [];
    $.each(obj.m_emp, function(key, data){
        DataM.push(data.total);
        Labels.push(data.hire_year);
    });        
    $.each(obj.f_emp, function(key, data){
        DataF.push(data.total);
    });        
    // Prepare Json data End

    // Prepare Chart Start
    var chartOptions = {
        segmentShowStroke    : true,
        segmentStrokeColor   : '#fff',
        segmentStrokeWidth   : 1,
        percentageInnerCutout: 0, 
        animationSteps       : 100,
        animationEasing      : 'easeOutBounce',
        animateRotate        : true,
        animateScale         : false,
        responsive           : true,
        maintainAspectRatio  : false,
        legendTemplate       : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
        legend: {
            display: true,
            position: 'bottom',
            fontSize: 18,
            boxWidth: 20
        },
        title: {
            display: true,
            text: 'Employees By Gender '
        },
        chartArea: {
            backgroundColor: 'rgba(255, 255, 255, 1)'
        },
          scales: {
              xAxes: [{
                  ticks: {
                      fontSize: 12
                  }
              }]
          }
    };    
    var config = {
        type: 'bar',
        data: {
                datasets: [
                  {
                      type: 'bar',
                      label: 'Male Employees',
                      backgroundColor: $.brandInfo,
                      borderColor: $.brandInfo,
                      pointBackgroundColor: $.brandInfo,
                      data: DataM,
                      fill: false,
                      borderWidth: 1
                  },
                  {
                      type: 'bar',
                      label: 'Female Employees',
                      backgroundColor: $.brandDanger,
                      borderColor: $.brandDanger,
                      pointBackgroundColor: $.brandDanger,
                      data: DataF,
                      fill: false,
                      borderWidth: 1
                  }
                ],
                labels:Labels
            },
        options: chartOptions
    };
    var ChartMaleFemaleMain = $('#LineMaleFemaleMain').get(0).getContext('2d');
    if(typeof chartMaleFemaleMain != 'undefined' ){
        chartMaleFemaleMain.destroy();
    }
    chartMaleFemaleMain = new Chart(ChartMaleFemaleMain, config);
    // Prepare Chart End
}

function setEmpDept(obj){
    var Data = [];
    var Labels = [];
    $.each(obj.dept_emp, function(key, data){
        Data.push(data.total);
        Labels.push(data.dept_name);
    });        
    // Prepare Json data End

    // Prepare Chart Start
    var chartOptions = {
        segmentShowStroke    : true,
        segmentStrokeColor   : '#fff',
        segmentStrokeWidth   : 1,
        percentageInnerCutout: 0, 
        animationSteps       : 100,
        animationEasing      : 'easeOutBounce',
        animateRotate        : true,
        animateScale         : false,
        responsive           : true,
        maintainAspectRatio  : false,
        legendTemplate       : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
        legend: {
            display: true,
            position: 'bottom',
            fontSize: 18,
            boxWidth: 20
        },
        title: {
            display: true,
            text: 'Employees Departement'
        },
        chartArea: {
            backgroundColor: 'rgba(255, 255, 255, 1)'
        }
    };    
    var config = {
          type: 'pie',
          data: {
                  datasets: [{
                          type: 'pie',
                          data: Data,
                          backgroundColor: [
                                window.chartColors.a,
                                window.chartColors.b,
                                window.chartColors.c,
                                window.chartColors.d,
                                window.chartColors.e,
                                window.chartColors.f,
                                window.chartColors.g,
                                window.chartColors.h,
                                window.chartColors.i,
                            ],
                          fill: false,
                          lineTension:0.5,
                        label: 'Employees Departement',
                  }],
                  labels:Labels
              },
          options: chartOptions
    };
    var myChart = $('#PieEmpDept').get(0).getContext('2d');
    if(typeof chartPieEmpDept != 'undefined' ){
        chartPieEmpDept.destroy();
    }
    chartPieEmpDept = new Chart(myChart, config);
    // Prepare Chart End
}

function setGenderEmpDept(obj){
    
    var DataM = [];
    var DataF = [];
    var Labels = [];
    $.each(obj.gender_dept_emp, function(key, data){
        DataM.push(data.male);
        DataF.push(data.female);
        Labels.push(data.dept_name);
    });        
    // Prepare Json data End

    // Prepare Chart Start
    var chartOptions = {
        segmentShowStroke    : true,
        segmentStrokeColor   : '#fff',
        segmentStrokeWidth   : 1,
        percentageInnerCutout: 0, 
        animationSteps       : 100,
        animationEasing      : 'easeOutBounce',
        animateRotate        : true,
        animateScale         : false,
        responsive           : true,
        maintainAspectRatio  : false,
        legendTemplate       : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
        legend: {
            display: true,
            position: 'bottom',
            fontSize: 18,
            boxWidth: 20
        },
        title: {
            display: true,
            text: 'Employees By Departement '
        },
        chartArea: {
            backgroundColor: 'rgba(255, 255, 255, 1)'
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 7
                }
            }]
        },
        elements: {
          line: {
              tension: 0.00001,
              borderWidth: 1
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 2
          }
        }
    };    
    var config = {
        type: 'line',
        data: {
                datasets: [
                  {
                      type: 'line',
                      label: 'Male Employees',
                      backgroundColor: $.brandInfo,
                      borderColor: $.brandInfo,
                      pointBackgroundColor: $.brandInfo,
                      data: DataM,
                      fill: false,
                      borderWidth: 1
                  },
                  {
                      type: 'line',
                      label: 'Female Employees',
                      backgroundColor: $.brandDanger,
                      borderColor: $.brandDanger,
                      pointBackgroundColor: $.brandDanger,
                      data: DataF,
                      fill: false,
                      borderWidth: 1
                  }
                ],
                labels:Labels
            },
        options: chartOptions
    };
    var ChartMaleFemaleMain = $('#LineGenderEmpDept').get(0).getContext('2d');
    if(typeof chartLineGenderEmpDept != 'undefined' ){
        chartLineGenderEmpDept.destroy();
    }
    chartLineGenderEmpDept = new Chart(ChartMaleFemaleMain, config);
    // Prepare Chart End
}

// New Chart Start

function setYearEmpDept(obj){
    var DataSets = [];   
    var Labels = []; 
    var Number = 0;
    $.each(obj.year_emp_dept, function(key, year){
        var Data = [];
        Labels = [];
        $.each(year, function(year_key, year_data){
            Data.push(year_data.total);
            Labels.push(year_data.dept_name);
        });
        DataSets.push({
                data: Data,
                backgroundColor: window.chartNumberColors[Number],
                borderColor: window.chartNumberColors[Number],
                pointBackgroundColor: window.chartNumberColors[Number],
                fill: false,
                label: key
            });        
        Number++;
    });        
    // Prepare Json data End

    // Prepare Chart Start
    var chartOptions = {
        segmentShowStroke    : true,
        segmentStrokeColor   : '#fff',
        segmentStrokeWidth   : 1,
        percentageInnerCutout: 0, 
        animationSteps       : 100,
        animationEasing      : 'easeOutBounce',
        animateRotate        : true,
        animateScale         : false,
        responsive           : true,
        maintainAspectRatio  : false,
        legendTemplate       : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
        legend: {
            display: true,
            position: 'bottom',
            fontSize: 12,
            boxWidth: 20
        },
        title: {
            display: true,
            text: 'Employees Departement Per Years'
        },
        scale: {
          ticks: {
            beginAtZero: true
          }
        },
        point: {
            radius: 2,
            hitRadius: 2,
            hoverRadius: 10
        }
    };    
    var config = {
          type: 'radar',
          data: {
                  labels:Labels,
                  datasets: DataSets
              },
          options: chartOptions
    };
    var myChart = $('#RadarEmpDept').get(0).getContext('2d');
    if(typeof chartRadarEmpDept != 'undefined' ){
        chartRadarEmpDept.destroy();
    }
    chartRadarEmpDept = new Chart(myChart, config);
    // Prepare Chart End
}

function setBarYearEmpDept(obj){
    var DataSets = [];   
    var Labels = []; 
    var Number = 0;
    $.each(obj.year_emp_dept, function(key, year){
        var Data = [];
        Labels = [];
        $.each(year, function(year_key, year_data){
            Data.push(year_data.total);
            Labels.push(year_data.dept_name);
        });
        DataSets.push({
                data: Data,
                backgroundColor: window.chartNumberColors[Number],
                borderColor: window.chartNumberColors[Number],
                pointBackgroundColor: window.chartNumberColors[Number],
                fill: false,
                label: key
            });        
        Number++;
    });        
    // Prepare Json data End

    // Prepare Chart Start
    var chartOptions = {
        segmentShowStroke    : true,
        segmentStrokeColor   : '#fff',
        segmentStrokeWidth   : 1,
        percentageInnerCutout: 0, 
        animationSteps       : 100,
        animationEasing      : 'easeOutBounce',
        animateRotate        : true,
        animateScale         : false,
        responsive           : true,
        maintainAspectRatio  : false,
        legendTemplate       : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
        legend: {
            display: true,
            position: 'bottom',
            fontSize: 12,
            boxWidth: 20
        },
        title: {
            display: true,
            text: 'Employees Departement Per Years'
        }
    };    
    var config = {
          type: 'horizontalBar',
          data: {
                  labels:Labels,
                  datasets: DataSets
              },
          options: chartOptions
    };
    var myChart = $('#BarEmpDept').get(0).getContext('2d');
    if(typeof chartBarEmpDept != 'undefined' ){
        chartBarEmpDept.destroy();
    }
    chartBarEmpDept = new Chart(myChart, config);
    // Prepare Chart End
}