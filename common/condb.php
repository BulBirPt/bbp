<?php
try{
    $db= new PDO("mysql:host=localhost; dbname=bulbirpt;charset=utf8","root","13041999ata");

}catch (PDOException $a){
    echo $a->getMessage();
}
?>