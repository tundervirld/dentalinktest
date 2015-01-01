INSERT INTO `colegio_dentalink`.`alumno` (`nombre_alumno`, `apellido_alumno`) VALUES ('Alberto', 'Hurtado');
INSERT INTO `colegio_dentalink`.`alumno` (`nombre_alumno`, `apellido_alumno`) VALUES ('Pedro ', 'Fernandez');
INSERT INTO `colegio_dentalink`.`alumno` (`nombre_alumno`, `apellido_alumno`) VALUES ('Miguel', 'Ugarte');
INSERT INTO `colegio_dentalink`.`alumno` (`nombre_alumno`, `apellido_alumno`) VALUES ('Guillermo', 'Garmendia');
INSERT INTO `colegio_dentalink`.`alumno` (`nombre_alumno`, `apellido_alumno`) VALUES ('Juan', 'Milano');


INSERT INTO `colegio_dentalink`.`profesor` (`nombre_profesor`, `apellido_profesor`) VALUES ('Profesor ', '1');
INSERT INTO `colegio_dentalink`.`profesor` (`nombre_profesor`, `apellido_profesor`) VALUES ('Profesor', '2');
INSERT INTO `colegio_dentalink`.`profesor` (`nombre_profesor`, `apellido_profesor`) VALUES ('Profesor', '3');
INSERT INTO `colegio_dentalink`.`profesor` (`nombre_profesor`, `apellido_profesor`) VALUES ('Profesor', '4');

INSERT INTO `colegio_dentalink`.`curso` (`nombre_curso`, `horas`, `profesor_id`) VALUES ('programación', '10', '1');
INSERT INTO `colegio_dentalink`.`curso` (`nombre_curso`, `horas`, `profesor_id`) VALUES ('Matematica', '20', '2');
INSERT INTO `colegio_dentalink`.`curso` (`nombre_curso`, `horas`, `profesor_id`) VALUES ('Ingles', '10', '3');
INSERT INTO `colegio_dentalink`.`curso` (`nombre_curso`, `horas`, `profesor_id`) VALUES ('Desarrollo IOS', '20', '1');


INSERT INTO `colegio_dentalink`.`alumno_curso` (`alumno_id`, `curso_id`) VALUES ('1', '1');
INSERT INTO `colegio_dentalink`.`alumno_curso` (`alumno_id`, `curso_id`) VALUES ('2', '1');
INSERT INTO `colegio_dentalink`.`alumno_curso` (`alumno_id`, `curso_id`) VALUES ('3', '1');
INSERT INTO `colegio_dentalink`.`alumno_curso` (`alumno_id`, `curso_id`) VALUES ('4', '2');
INSERT INTO `colegio_dentalink`.`alumno_curso` (`alumno_id`, `curso_id`) VALUES ('4', '4');
INSERT INTO `colegio_dentalink`.`alumno_curso` (`alumno_id`, `curso_id`) VALUES ('5', '3');
INSERT INTO `colegio_dentalink`.`alumno_curso` (`alumno_id`, `curso_id`) VALUES ('1', '2');

INSERT INTO `colegio_dentalink`.`prueba` (`nombre_prueba`, `curso_id`) VALUES ('Test programacion 1', '1');
INSERT INTO `colegio_dentalink`.`prueba` (`nombre_prueba`, `curso_id`) VALUES ('Test programacion 2', '1');
INSERT INTO `colegio_dentalink`.`prueba` (`nombre_prueba`, `curso_id`) VALUES ('Test programacion 3', '1');
INSERT INTO `colegio_dentalink`.`prueba` (`nombre_prueba`, `curso_id`) VALUES ('Matemáticas Discretas', '2');
INSERT INTO `colegio_dentalink`.`prueba` (`nombre_prueba`, `curso_id`) VALUES ('Matemáticas Discretas 2', '2');


INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('1', '1', '5');
INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('1', '2', '7');
INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('1', '3', '4');
INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('1', '4', '7');
INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('2', '1', '6');
INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('2', '2', '2');

INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('2', '1', '3');
INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('2', '2', '2');
INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('2', '3', '1');

INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('2', '4', '3');
INSERT INTO `colegio_dentalink`.`calificacion` (`alumno_id`, `prueba_id`, `nota`) VALUES ('2', '5', '2');
