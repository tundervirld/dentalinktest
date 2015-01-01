<?php
/*
 * @author Roger Reyes
 */
class AlumnoCurso {
    private $_id         = null;
    private $_alumno_id  = null;
    private $_curso_id   = null;
    
    /* Getters */
    private function getId (){
        return $this->_id;
    }

    private function getAlumnoId(){
        return $this->_alumno_id;
    }

    public function getCursoId(){
        return $this->_curso_id;
    }
    
    /* Setters */
    private function setId ($id){
        return $this->_id = $id;
    }

    private function setAlumnoId ($alumno_id){
        return $this->_alumno_id =$alumno_id;
    }
    
    public function setCursoId($curso_id){
        return $this->_curso_id = $curso_id;
    }

    /* Constructors */
    public function __construct(array $params) {
        if(isset($params["id"]))   $this->setId($params["id"]);
        if(isset($params["alumno_id"]))   $this->setNombreAlumno($params["alumno_id"]);
        if(isset($params["curso_id"]))   $this->setApellidoAlumno($params["curso_id"]);
        
    }

    /*Other functions*/
    public function getAlumnosIdPorCursoId($curso_id){
        //code here for the persist layer to DB
        return array;
    }

    public function getPromedioPorCursoIdAlumnoId($curso_id){
        //code here for the persist layer to DB
        return object;
    }
}
?>