<?php
/*
 * @author Roger Reyes
 */
class Curso {
    private $_id            = null;
    private $_nombre_curso  = null;
    private $_horas         = null;
    private $_profesor_id   = null;
    
    /* Getters */
    private function getId (){
        return $this->_id;
    }

    private function getNombreCurso (){
        return $this->_nombre_curso;
    }

    public function getHoras(){
        return $this->_horas;
    }
    
    public function getProfesorCurso($id){
        return Profesor::getProfesorById($id);
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

    public function setProfesorCurso($profesor_id){
        return $this->_profesor_id = $profesor_id;
    }

    /* Constructors */
    public function __construct(array $params) {
        if(isset($params["id"]))   $this->setId($params["id"]);
        if(isset($params["nombre_curso"]))   $this->setNombreAlumno($params["nombre_curso"]);
        if(isset($params["horas"]))   $this->setApellidoAlumno($params["horas"]);
        if(isset($params["profesor_id"]))   $this->setApellidoAlumno($params["profesor_id"]);
        
    }

    /*Other functions*/
    public function getAlumnosPorCursoId($curso_id){
        $alumnos = [];
        $alumno_curso = AlumnoCurso::getAlumnosIdPorCursoId($curso_id);
        foreach ($alumno_curso as $key => $value) {
            $alumnos[] = Alumno::getAlumnoPorId($value["id"]);
        }
        return $alumnos;
    }
}
?>