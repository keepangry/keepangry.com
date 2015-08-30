<?php
namespace Home\Controller;
use Think\Controller;
class NoteController extends Controller {
    public function index(){
        $this->show('note/index','utf-8');
    }
    public function create(){
        $Note = M("Note");

        ##angularjs传的是json字符串，
        $data = json_decode(file_get_contents('php://input'),true);
        $result = $Note->create($data);


        $Note->add();

        $this->show('note/create','utf-8');
    }
    public function query(){
        $Note = M("Note");

        ##angularjs传的是json字符串，
        #$data = json_decode(file_get_contents('php://input'),true);
        $result = $Note->order('time desc')->select();

        #组合结果
        $data = array(
            'status'=>0,
            'data'=>$result
        );
        
        $this->ajaxReturn($data);
        
    }
}