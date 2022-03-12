# DataframeToDB

Plataforma: -

Tipo: Proyecto Abierto

Enlace: https://github.com/juanretamales/DataframeToDB

## Detalles

![dataframetodb](/img/otros/dataframetodb.png)


Para instalarlo tu puedes copiar la carpeta de dataframetodb en proyecto, o usar
```python
pip install dataframetodb
```
También puedes ver la publicación en: https://pypi.org/project/dataframetodb/

Este proyecto consiste en la creación de una biblioteca que subiera rápidamente la información de un dataframe a una base de datos, creando en el proceso la estructura y de ser posible, el mejor tipo de datos al momento de crear la tabla para la inserción.

DataframeToDB es una forma mejorada de cargar dataframes de pandas a Microsoft SQL Server, MySQL, PostgreDB u otros tipos de base de datos.

DataframeToDB aprovecha SQLAlchemy. Esto permite una importación mucho más ligera para escribir dataframes de pandas en el servidor de base de datos.

Cuándo usar:
- Cuando necesite guardar marcos de datos, por ejemplo, al raspar muchas tablas
- Necesita una estructura de base de datos compartida para usar en proyectos
- Cuando necesites guardar varios excels (portados a dataframe) en una base de datos
- Cuando considere usar FastAPI (Con la compatibilidad con SQLAlchemy) (Trabajo en progreso)
- Cuando necesite crear una estructura de tabla por cualquier motivo 