<?php
parse_str($_SERVER['QUERY_STRING'],$QueryValue);

/*定义数据库查询命令*/
if(isset($QueryValue["id"])){
    $q="select * from video WHERE ID='$id'";
}
else if(isset($QueryValue["num"])){
    $q="select * from video WHERE num='$num'";
}
else{
    $q="select * from video";
}

/* 连接数据库*/
$link=new mysqli("127.0.0.1","root","Xb20061016","ymas");

/*设置查询时返回数据类型，避免int被转换成string*/
$link->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);//mysqli_options($link, MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);

/*设置字符集，使得页面的编码与数据库的编码一致。如果不一致将出现中文乱码*/
$link->query("set names utf8");

/*执行数据库查询*/
$result = $link->query($q);

/*关闭连接*/
$link->close();

$Video = array();$i = 0;
while($row = $result->fetch_assoc()){
    $Video[$i++] = $row;
}

/*设置响应标头*/
header('Content-Type:application/json; charset=utf-8');
exit(json_encode($Video,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
?>