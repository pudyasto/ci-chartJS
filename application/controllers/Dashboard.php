<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {
    protected $data = '';
    public function __construct() {
        parent::__construct();
        $this->load->model('dashboard/dashboard_qry');
    }
    
    public function index(){
        $this->_init_add();
        $this->template
            ->title('Dashboard',$this->apps->name)
            ->set_layout('main')
            ->build('dashboard/index',$this->data);			
    }
    
    public function getEmployees() {
        echo $this->dashboard_qry->getEmployees();
    }
    
    private function _init_add(){
        $this->data['form'] = array(
           'first_period'=> array(
                    'placeholder' => 'First Period',
                    'id'          => 'first_period',
                    'name'        => 'first_period',
                    'value'       => "1995",
                    'class'       => 'form-control year',
                    'required'    => '',
            ),
           'last_period'=> array(
                    'placeholder' => 'Last Period',
                    'id'          => 'last_period',
                    'name'        => 'last_period',
                    'value'       => "2000",
                    'class'       => 'form-control year',
                    'required'    => '',
            ),   
        );
    }    
}
