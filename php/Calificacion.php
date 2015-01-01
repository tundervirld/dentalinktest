<?php
/*
 * @author Roger Reyes
 */
class Calificacion {
    private $_id         = null;
    private $_alumno_id  = null;
    private $_prueba_id  = null;
    private $_nota       = null;
    
    /* Getters */
    private function getId (){
        return $this->_id;
    }

    private function getAlumnoId(){
        return $this->_alumno_id;
    }

    public function getPruebaI(){
        return $this->_prueba_id;
    }
    
    /* Setters */
    private function setId ($id){
        return $this->_id = $id;
    }

    private function setAlumnoId ($alumno_id){
        return $this->_alumno_id =$alumno_id;
    }
    
    public function setPruebaId($prueba_id){
        return $this->_prueba_id = $prueba_id;
    }

    /* Constructors */
    public function __construct(array $params) {
        if(isset($params["id"]))   $this->setId($params["id"]);
        if(isset($params["alumno_id"]))   $this->setNombreAlumno($params["alumno_id"]);
        if(isset($params["prueba_id"]))   $this->setApellidoAlumno($params["prueba_id"]);
        if(isset($params["nota"]))   $this->setApellidoAlumno($params["nota"]);
    }
}
?>