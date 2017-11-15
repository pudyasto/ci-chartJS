<?php
class MY_Controller extends CI_Controller{  

    public function __construct(){
        parent::__construct();  
        $logged_in = $this->session->userdata('logged_in');
        if(!$logged_in){
            redirect('home','refresh');
            exit;
        }
        header("cache-Control: no-store, no-cache, must-revalidate");
        header("cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
    }
}
