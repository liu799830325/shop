<?php
$conn =@mysql_connect("locahost","root","root");
if(!$conn){
    die("链接失败：".mysql_error());
}
//set数据库
mysql_error_db("test",$conn);
//字符设置
mysql_query("set names  utf8");
?>