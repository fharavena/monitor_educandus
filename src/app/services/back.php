<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    die();
}
date_default_timezone_set('America/Santiago');

main();

function main()
{
    $valor_funcion = isset($_GET['funcion']) ? $_GET['funcion'] : '';
    $token = isset($_GET['token']) ? $_GET['token'] : '';
    if (!$valor_funcion) {
        respuesta(true, null, "no existe funcion de llamado");
    } else if ($valor_funcion === "login") {
        login();
    } else if ($valor_funcion === "validate_token") {
        $resultado = validate_token($token);
        if ($resultado) {
            respuesta(false, $resultado);
        } else {
            respuesta(true, null, "Token invalido");
        }
    } else if (validate_token($token)) {
        switch ($valor_funcion) {
            case 'daiusu':
                daily_user();
                break;
            default:
                respuesta(true, null, "respuesta vacia");
                break;
        }
    } else {
        respuesta(true, null, "token no valido");
    }
}

function daily_user(){
    $query = "select * from mdl_user limit 1;";
    $resultadoDB = psql_query_monitor($query);
    if (!$resultadoDB) {
        respuesta(true, '',  "El resultado es vacio");
    } else {
        respuesta(false, $resultadoDB);
    }
}

function psql_query_monitor($query)
{
    $connStr = "host=190.110.100.109 port=5432 dbname=db_lms_pregrado user=u_lms_utal password=u_lms_moodle_12";
    $conn = pg_connect($connStr);
    $result = pg_query($conn, $query);
    pg_close($conn);
    return pg_fetch_all($result);
}

function login()
{
    $user = isset($_GET['user']) ? $_GET['user'] : '';
    $pass = isset($_GET['pass']) ? $_GET['pass'] : '';

    $user_back = "lms";
    $pass_back = "educandus";
    if ($user == $user_back && $pass  == $pass_back) {
        respuesta(true, null, "usuario y/o contraseña incorrecta");
    } else {
        respuesta(false, "bien");
    }
}

function validate_token($token)
{
    $token_back = 'D1d2112354hy65ASDdwqd21dwqdsa';
    if ($token_back == $token) {
        return '';
    } else {
        return $token_back;
    }
}

function respuesta($error, $json, $msg = null)
{
    $temp = array();
    if (!$error) {
        $temp['status'] = 'success';
        $temp['code'] = '200';
        $temp['data'] = $json;
    } else {
        $temp['status'] = 'error';
        $temp['code'] = '400';
        $temp['message'] = $msg;
    }
    echo json_encode($temp);
}



?>
