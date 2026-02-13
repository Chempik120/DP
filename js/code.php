<?php
mysql_connect('localhost','root','yazabilparol') or die(mysql_error());
mysql_query("CREATE DATABASE usersInfo") or die(mysql_error());

mysql_query("CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(16) NOT NULL
)") or die(mysql_error());

echo "База данных готова!<br>";
?>