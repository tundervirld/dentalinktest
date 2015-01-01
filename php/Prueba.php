<?php
/*
 * @author Roger Reyes
 */
class Prueba {
    private $_id              = null;
    private $_nombre_prueba   = null;
    private $_curso_id        = null;
    
    /* Getters */
    private function getId (){
        return $this->_id;
    }

    private function getNombrePrueba (){
        return $this->_nombre_prueba;
    }

    public function getHoras(){
        return $this->_horas;
    }
    
    public function getCursoPrueba($id){
        return Curso::getCursoById($id);
    }
    
    /* Setters */
    private function setId ($id){
        return $this->_id = $id;
    }

    private function setNombrePrueba ($nombre_prueba){
        return $this->_nombre_prueba =$nombre_prueba;
    }
    
    public function setCursoPrueba($curso_id){
        return $this->_curso_id = $curso_id;
    }

    /* Constructors */
    public function __construct(array $params) {
        if(isset($params["id"]))   $this->setId($params["id"]);
        if(isset($params["nombre_prueba"]))   $this->setNombreAlumno($params["nombre_prueba"]);
        if(isset($params["curso_id"]))   $this->setApellidoAlumno($params["curso_id"]);
        
    }
}
?>