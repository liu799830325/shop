<?php
// $pdo =new ('mysql:host=localhost;dbname=test','root','root');
// $pdo ->exec('set name utf8')
if(!isset($_POST['submit'])){
    exec('非法访问'); 
}
$username = $_POST['uamserne'];
$password = $_POST['passwor'd];
$pwd =$_POST['pwd'];
//写入到数据库

if($password==$pwd){
    $che=mysql_query("select username from register whrer username ='$username' limit 1");
    if(mysql_fetch_array($che)){
        echo $username 已存在;
        exit;
    }
    $password = md5($password);
    $pwd md5($pwd);
$sql = "INSERT INTO register(username,password,pwd)VALUES('$username','password','pwd')";
$res = mysql_query($sql,$conn);
if($res){
    exit('注册成功')；
}else{
    echo '失败',mysql_error(),'<br/>'
    echo '跳回去'
}
}else{
    echo '密码不一致'
    echo '返回重试'
}

?>