<?php

class Database
{
    private $connection;
    private $host;
    private $user;
    private $password;
    private $db;

    public  function connectToDatabase()
    {
        if (getenv("CLEARDB_DATABASE_URL")) {
            //Get Heroku ClearDB connection information
            $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
            $this->host       = $cleardb_url["host"];
            $this->user       = $cleardb_url["user"];
            $this->password   = $cleardb_url["pass"];
            $this->db         = substr($cleardb_url["path"], 1);
        } else {
            $this->host = '127.0.0.1';
            $this->db = 'fakeid';
            $this->user = 'root';
            $this->password = '';
        }
        $charset = 'utf8mb4';

        $dsn = "mysql:host=$this->host;dbname=$this->db;charset=$charset"; // using 'mysql:connecting to the host; specifying dbname';

        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];
        try {
            $this->connection = new PDO($dsn, $this->user, $this->password, $options);
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage(), (int)$e->getCode());
        }
        return $this->connection;
    }

    //shouldn't we move it outside connection may be?
    public function selectAllUsers($connection)
    {
        $sql = "SELECT count(*) FROM user";
        $statement = $connection->prepare($sql);

        if ($statement->execute()) {
            $users = $statement->fetchAll(PDO::FETCH_ASSOC);
            $connection = null;
            return $users[0]['count(*)'];
        }
    }
}
