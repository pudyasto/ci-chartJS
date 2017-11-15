<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Access{
    private $ci="";
    
    public function __construct(){        
        $this->ci =& get_instance();
    }
    
    function getMenus($login){
        if($login){
            $res = array(
                0 => array(
                    "name" => "Master Data",
                    "icon" => "icon icon-th",
                    "href" => "#",
                    "submenu" => array(
                        1 => array(
                            "name" => "Pegawai",
                            "icon" => "icon icon-th-list",
                            "href" => "pegawai",
                        ),
                        2 => array(
                            "name" => "Eselon",
                            "icon" => "icon icon-th-list",
                            "href" => "eselon",
                        ),
                        3 => array(
                            "name" => "Golongan/Pangkat",
                            "icon" => "icon icon-th-list",
                            "href" => "golongan",
                        ),
                    ),
                ),
                1=> array(
                    "name" => "Logout Aplikasi",
                    "icon" => "icon icon-lock",
                    "href" => "home/logout",
                    "submenu" => array(),
                ),
            );
        }else{
            $res = array(
                0 => array(
                    "name" => "Login Aplikasi",
                    "icon" => "icon icon-lock",
                    "href" => "home/login",
                    "submenu" => array(),
                ),
            );
        }
        
        return $res;
    }
}