<div class="animated fadeIn">
    <div class="row">
        <div class="col-sm-12 col-lg-12 mb-4">
            <div class="row">
                <div class="col-lg-3">
                    <?=form_label($form['first_period']['placeholder']);?>
                    <div class="input-group">
                        <?php 
                            echo form_input($form['first_period']);
                            echo form_error('first_period','<div class="note">','</div>'); 
                        ?>
                    </div>      
                </div>
                <div class="col-lg-3">
                    <?=form_label($form['first_period']['placeholder']);?>
                    <div class="input-group">
                        <?php 
                            echo form_input($form['last_period']);
                            echo form_error('last_period','<div class="note">','</div>'); 
                        ?>
                        <span class="input-group-btn">
                            <button class="btn btn-primary btn-preview">
                                Show
                            </button>
                        </span>
                    </div>      
                </div>
            </div>
        </div>
        
        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-success">
            <div class="card-body pb-0">
              <button type="button" class="btn btn-transparent p-0 float-right">
                <i class="fa fa-users"></i>
              </button>
              <h4 class="mb-0 employees">0</h4>
              <p>Employees</p>
            </div>
            <div class="chart-wrapper px-3" style="height:70px;">
              <canvas id="LineEmployees" class="chart" height="70"></canvas>
            </div>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-info">
            <div class="card-body pb-0">
              <button type="button" class="btn btn-transparent p-0 float-right">
                <i class="fa fa-male"></i>
              </button>
              <h4 class="mb-0 male-employees">0</h4>
              <p>Male Employees</p>
            </div>
            <div class="chart-wrapper px-3" style="height:70px;">
              <canvas id="LineMaleEmployees" class="chart" height="70"></canvas>
            </div>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-danger">
            <div class="card-body pb-0">
              <button type="button" class="btn btn-transparent p-0 float-right">
                <i class="fa fa-female"></i>
              </button>
              <h4 class="mb-0 female-employees">0</h4>
              <p>Female Employees</p>
            </div>
            <div class="chart-wrapper px-3" style="height:70px;">
              <canvas id="LineFemaleEmployees" class="chart" height="70"></canvas>
            </div>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-warning">
            <div class="card-body pb-0">
              <button type="button" class="btn btn-transparent p-0 float-right">
                <i class="fa fa-pie-chart"></i>
              </button>
              <h4 class="mb-0 male-female-employees">0</h4>
              <p>Male And Female Employees</p>
            </div>
            <div class="chart-wrapper" style="height:70px;">
              <canvas id="LineMaleFemaleEmployees" class="chart" height="70"></canvas>
            </div>
          </div>
        </div>
        <!--/.col-->
    </div>
    <!--/.row-->

    <div class="row">
        <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                  <i class="fa fa-sitemap"></i> Detail Employees
              </div>
              <div class="card-body">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="col-lg-12">
                          <div class="chart-wrapper" style="height:250px;">
                            <canvas id="LineMaleFemaleMain" class="chart" height="250"></canvas>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="chart-wrapper" style="height:250px;">
                            <canvas id="LineGenderEmpDept" class="chart" height="250"></canvas>
                          </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="col-lg-12">
                          <div class="chart-wrapper" style="height:500px;">
                            <canvas id="PieEmpDept" class="chart" height="500"></canvas>
                          </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="col-lg-12">
                          <div class="chart-wrapper" style="height:500px;">
                            <canvas id="RadarEmpDept" class="chart" height="500"></canvas>
                          </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="col-lg-12">
                          <div class="chart-wrapper" style="height:500px;">
                            <canvas id="BarEmpDept" class="chart" height="500"></canvas>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
        <!--/.col-->
        </div>
    </div>
    <!--/.row-->
</div>

<!-- ChartJS -->
<script src="<?=base_url('assets/plugins/chartjs/Chart.bundle.js');?>"></script>
<script src="<?=base_url('assets/plugins/chartjs/utils.js');?>"></script>
<script src="<?=base_url('assets/js/views/charts.js');?>"></script>
<script type="text/javascript">
    $(function () {
        getEmployees();
        $(".btn-preview").click(function(){
            getEmployees();
        });
    });
    // Employees Chart Start
    function getEmployees(){
        var first_period = $("#first_period").val();
        var last_period = $("#last_period").val();
        $.ajax({
            type: "POST",
            url: "<?=site_url('dashboard/getEmployees');?>",
            data: {"key":"paw!"
                    ,"first_period":first_period
                    ,"last_period":last_period},
            beforeSend: function(){
                $(".btn-preview").attr("disabled",true);
            },
            success: function(resp){  
                // Prepare Json data Start
                var obj = jQuery.parseJSON(resp);
                setEmp(obj);
                setMaleEmp(obj);
                setFemaleEmp(obj);
                setMaleFemaleEmp(obj);
                setMaleFemaleMain(obj);
                setEmpDept(obj);
                setGenderEmpDept(obj);
                setYearEmpDept(obj);
                setBarYearEmpDept(obj);
                $(".btn-preview").attr("disabled",false);
            },
            error:function(event, textStatus, errorThrown) {
                $(".btn-preview").attr("disabled",false);
                console.log("Error !", 'Error Message: ' + textStatus + ' , HTTP Error: ' + errorThrown, "error");
            }
      });
    }
    // Employees Chart End
</script>