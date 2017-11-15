<?php

/*
 * ***************************************************************
 * Script : Access_qry.php
 * Version : 
 * Date Created : Oct 3, 2017 1:28:00 PM 
 * Author : Pudyasto Adi W.
 * Email : mr.pudyasto@gmail.com
 * Description : 
 * ***************************************************************
 */

/**
 * Description of Access_qry
 *
 * @author mrpud
 */
class Access_qry extends CI_Model{
    //put your code here
    public function __construct() {
        parent::__construct();
  
        if ($this->agent->is_browser()){
            $agent = $this->agent->browser().' '.$this->agent->version();
        }
        elseif ($this->agent->is_robot()){
            $agent = $this->agent->robot();
        }
        elseif ($this->agent->is_mobile()){
            $agent = $this->agent->mobile();
        }
        else{
            $agent = 'Unidentified User Agent';
        }        
    }
    public function login() {
        $username = $this->input->post('username');
        $password = $this->input->post('password');
        if($username==="admin" && $password==="admin"){
            $res = array(
                'stat' => true,
                'msg' => "Login Success, Welcome Admin..."
            );
            $data = array(
                'username' => $username,
                'platform' => $this->agent->platform(),
                'logged_in' => true,
            );

            $this->session->set_userdata($data);            
        }else{
            $res = array(
                'stat' => false,
                'msg' => "Login Fail, Your Password or username is wrong!"
            );
        }
        
        return $res;
    }
}
