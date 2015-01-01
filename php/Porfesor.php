<?php
/*
 * @author Roger Reyes
 */
class Profesor {
    private $_id                = null;
    private $_nombre_profesor   = null;
    private $_apellido_profesor = null;
    
    /* Getters */
    private function getId (){
        return $this->_id;
    }

    private function getNombreProfesor (){
        return $this->_nombre_profesor;
    }

    public function getApellidoProfesor(){
        return $this->_apellido_profesor;
    }
    
    public function getNombreApellido(){
        return $this->_nombre_profesor . " " . $this->_apellido_profesor ;
    }
    
    /* Setters */
    private function setId ($id){
        return $this->_id = $id;
    }

    private function setNombreAlumno ($nombre_profesor){
        return $this->_nombre_profesor =$nombre_profesor;
    }

    public function setApellidoAlumno($apellido_profesor){
        return $this->_apellido_profesor=$apellido_profesor;
    }

    /* Constructors */
    public function __construct(array $params) {
        if(isset($params["id"]))   $this->setId($params["id"]);
        if(isset($params["nombre_profesor"]))   $this->setNombreAlumno($params["nombre_profesor"]);
        if(isset($params["apellido_profesor"]))   $this->setApellidoAlumno($params["apellido_profesor"]);
        
    }
}

?>