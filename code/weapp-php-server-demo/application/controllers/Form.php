<?php
use \QCloud_WeApp_SDK\Helper\Util as Util;
use  \QCloud_WeApp_SDK\Auth\Constants as Constants;
use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;


class Form extends CI_Controller {
    public function __construct()
    {
        parent::__construct();
        $this->load->model('form_model');
    }

//获取微信用户在 user表的uid 不存在则进行保存
    public function getuid() {
        log_message('info', 'getuid'. "\n");
        // notes: do not echo anything
      //  echo 'aaaaaa';
        echo $this->form_model->getuid();
          
    }

    public function reg(){
        $data = $_POST;
        $data['regdate'] = date("Y-m-d H:i:s");
        //echo $data['regdate'];
        echo $this->form_model->insert($data);
    }

    public function get(){
        $uid = $_POST['uid'];
        $obj =  $this->form_model->get($uid);
        //$a =  Util::writeJsonResult($obj);
        echo Util::writeJsonResult($obj);
    }
}
