<?php

class MySQL extends PDO {
    private $host     = "localhost";
    private $usuario  = "root";
    private $senha    = "";
    private $db       = "FormularioLogin";

    public function __construct()
    {
        // data source name
        $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db;

        // PHP Data Object
        return parent::__construct($dsn, $this->usuario, $this->senha);
 
    }
}
?>
    