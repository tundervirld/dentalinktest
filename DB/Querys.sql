-- Query que entregue la lista de  alumnos para el curso “programación”
select * from curso as c
inner join alumno_curso as ac on ac.curso_id = c.id
inner join alumno as a on ac.alumno_id = a.id
where nombre_curso ="programación";

-- Escriba un Query  que calcule el promedio de notas de un alumno en un curso
SELECT avg(ca.nota) FROM curso as c
inner join prueba as p on p.curso_id = c.id
inner join calificacion as ca on ca.prueba_id = p.id
where c.id = 2 and ca.alumno_id =1;

-- Escriba un Query que entregue a los alumnos y el promedio que tiene en cada ramo.
select a.id, concat(a.nombre_alumno, " ", a.apellido_alumno) as Alumno, c.nombre_curso as Ramo, avg(ca.nota) Promedio
from calificacion as ca
inner join prueba p on p.id = ca.prueba_id
inner join alumno a on a.id = ca.alumno_id
inner join curso c on c.id = p.curso_id
where ca.alumno_id in ( 
	select id from alumno
)
group by ca.alumno_id, p.curso_id
order by ca.alumno_id, p.id;

-- Escriba un Query que lista a todos los alumnos con más de un ramo con promedio rojo.
select concat(a.nombre_alumno, " ", a.apellido_alumno) as "Alumnos con promedio Rojo" from alumno a
	where id in(
		select IF((avg(ca.nota) < 4) = 1, IF(count(ca.alumno_id) >= 2, ca.alumno_id,""), "") as id  
			from calificacion as ca
				inner join prueba p on p.id = ca.prueba_id
				inner join alumno a on a.id = ca.alumno_id
				inner join curso c on c.id = p.curso_id
				where ca.alumno_id in ( 
					select id from alumno
			) 
			group by ca.alumno_id, p.curso_id
			order by ca.alumno_id, p.id
);