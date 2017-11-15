<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Apps{
    var $name="ChartJS Tutorials";
    var $title="CI-ChartJS";
    var $logintitle="ChartJS Tutorials";
    var $logindesc="Please Login With Username and Password";
    var $release="Version Beta 1.0.0";
    var $ver="Version Beta 1.0.0";
    var $copyright = "PAW!";
    var $dept = "ICT";
    var $statnav="active";
    var $companyname = "-";
    var $companyaddr = "-";
    var $companyinfo = "-";
	
    private $ci=""; 

    public function __construct(){        
        $this->tmpdir = FCPATH . 'application/cache/';
        $this->ci =& get_instance();
    }
	
    function dateConvert($param){
        if(!empty($param)){
            $date_id = explode('-', $param);
            return $date_id[2].'-'.$date_id[1].'-'.$date_id[0];
        }else{
            return false;
        }
    }
    
    function err_code($param){
        return $param;
        
    }
}
