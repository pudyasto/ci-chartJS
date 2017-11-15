<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Access extends CI_Controller {
    protected $data = '';
    public function __construct() {
        parent::__construct();
        $this->load->model('access/access_qry');
        $this->_init_form();
    }
    
    public function index(){
        $logged_in = $this->session->userdata('logged_in');
        if($logged_in){
            redirect("dashboard");
        }else{            
            $this->template
                ->title('Access',$this->apps->name)
                ->set_layout('access')
                ->build('access/index',$this->data);
        }          			
    }
    
    public function login(){
        $submit = $this->input->post('submit');
        if($submit==="login"){
            $res = $this->access_qry->login();
            $this->data['login'] = $res;
            if($res['stat']){
                redirect('dashboard');
            }else{
                $this->template
                    ->title('Access',$this->apps->name)
                    ->set_layout('access')
                    ->build('access/index',$this->data);
            }
        }
        else{
            $this->template
                ->title('Access',$this->apps->name)
                ->set_layout('access')
                ->build('access/index',$this->data);		
        }
    }
    
    public function logout() {
       $this->session->sess_destroy();
       redirect('access','refresh');      
    }
    
    private function _init_form(){
        $this->data['form'] = array(
           'username'=> array(
                    'placeholder' => 'Username',
                    'type'        => 'text',
                    'id'          => 'username',
                    'name'        => 'username',
                    'value'       => set_value('username'),
                    'class'       => 'form-control',
                    'required'    => '',
            ),
           'password'=> array(
                    'placeholder' => 'Password',
                    'type'        => 'password',
                    'id'          => 'password',
                    'name'        => 'password',
                    'value'       => set_value('password'),
                    'class'       => 'form-control',
                    'required'    => '',
            ),
        );
    }
}
