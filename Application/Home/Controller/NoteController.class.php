<?php
namespace Home\Controller;
use Think\Controller;
class NoteController extends Controller {
    public function index(){
        $this->show('note/index','utf-8');
    }

    public function wap(){
        $Note = M("Note");
        $result = $Note->order('time desc')->select();
        $this->assign('note_data',$result);


        $this->display('note/wap');
    }
    public function wap_create(){
        $Note = M("Note");
        $result = $Note->create();
        $Note->add();
        
        $this->success('新增成功', '/home/note/wap');
    }


    public function create(){

        ##angularjs传的是json字符串，
        $data = json_decode(file_get_contents('php://input'),true); 
        

        $Note = M("Note");
        $result = $Note->create($data);
        $Note->add();

        $this->show('123','utf-8');
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