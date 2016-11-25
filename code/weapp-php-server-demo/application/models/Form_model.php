<?php
use \QCloud_WeApp_SDK\Auth\LoginService as LoginService;

class Form_model extends CI_Model {

    public function __construct()
    {
       $this->load->database();
    }

    //获取当前微信用户的uid
    public function getuid()
    {
        //获取用户openid
        $ui = LoginService::check();
        if($ui['code']==-1){
            return $ui['code'];
        }
        $uinfo = $ui['data']['userInfo'];
        //根据openid查询是否已经在用户表注册
        $query = $this->db->get_where('user',array('openId'=>$uinfo['openId']));
        $row = $query->row();
        if(!isset($row)){
            log_message('info', 'new user insert' . "\n");
            $row = $this->db->insert_id('user',array('nickname'=>$uinfo['nickName'],
            'gender'=>$uinfo['gender'],
            'language'=>$uinfo['language'],
            'city'=>$uinfo['city'],
            'province'=>$uinfo['province'],
            'country'=>$uinfo['country'],
            'avatarUrl'=>$uinfo['avatarUrl'],
            'openId'=>$uinfo['openId']));
        }
        //log_message('error', print_r($row). "\n");
        return $row->uid;
    }

    public function insert($ggz){
        return $this->db->insert('form',$ggz);
    }

    public function get($uid){
        $this->db->from("form");
        $this->db->where("uid",$uid);
        return $this->db->get()->result_array();
        //$q = $this->db->get_where('guanggao',array('uid'=>$uid));
        //return $q->result_array();
    }
}