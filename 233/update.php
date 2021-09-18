<?php
header('Content-Type:application/json; charset=utf-8');

echo "{\"数据\":\"". json_encode($_POST) ."\"}";

?>