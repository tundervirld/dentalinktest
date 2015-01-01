<?php
/*
 * @author Roger Reyes
 */
class Alumno {
    private $_id               = null;
    private $_nombre_alumno    = null;
    private $_apellido_alumno  = null;
    
    /* Getters */
    private function getId (){
        return $this->_id;
    }

    private function getNombreAlumno (){
        return $this->_nombre_alumno;
    }

    public function getApellidoAlumno(){
        return $this->_apellido_alumno;
    }
    
    public function getNombreApellido(){
        return $this->_nombre_alumno . " " . $this->_apellido_alumno ;
    }
    
    /* Setters */
    private function setId ($id){
        return $this->_id = $id;
    }

    private function setNombreAlumno ($nombre_alumno){
        return $this->_nombre_alumno =$nombre_alumno;
    }

    public function setApellidoAlumno($apellido_alumno){
        return $this->_apellido_alumno=$apellido_alumno;
    }

    /* Constructors */
    public function __construct(array $params) {
        if(isset($params["id"]))   $this->setId($params["id"]);
        if(isset($params["nombre_alumno"]))   $this->setNombreAlumno($params["nombre_alumno"]);
        if(isset($params["apellido_alumno"]))   $this->setApellidoAlumno($params["apellido_alumno"]);
        
    }

    /*Others*/
    public function getAlumnoPorId(){
        //code here for the persist layer to DB
        return object;
    }

    public function getAlumnosPromedioCurso(){
        //code here for the persist layer to DB
        return array;
    }

    public function getAlumnosPromedioBajo(){
        //code here for the persist layer to DB
        return array;
    }
}

?>