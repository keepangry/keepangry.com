<?php
namespace Home\Model;
use Think\Model;
class NoteModel extends Model {
    //protected $connection = 'DB_CONFIG_KEEPANGRY';
    protected $tableName = 'note';
    protected $fields = array('id', 'type', 'content', 'time',
            '_type'=>array('id'=>'int','type'=>'varchar','content'=>'text','time'=>'varchar')
        );
    protected $pk     = 'id';


    // 定义自动完成
    // protected $_auto    =   array(
    //     array('create_time','time',1,'function'),
    //     );


}