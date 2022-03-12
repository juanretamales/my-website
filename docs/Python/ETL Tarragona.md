# ETL Tarragona

Plataforma: Windows Server con Python 3.9 y SQL Server

Tipo: Proyecto Cerrado

Enlace: **No disponible**

## Detalles

![tarragona_ETL](/img/otros/tarragona_ETL.drawio.png)

Este proyecto consiste en extraer data desde múltiples fuentes para validar que locales tienen problemas de cuadraturas para corregir la situación.

El proyecto se puede dividir en tres partes:

1. Extraer información de medios de pago
2. Extraer información de las cuentas bancarias
3. Extraer información de otras fuentes
4. Generar reportes

Cada parte cumple una función importante, principalmente existen dos categorías, los inputs y los outputs.

Mientras que los inputs son los ingresos de registros, se le asocia un local mediante muchas reglas establecidas.

Los outputs son los resultados de las vistas, los cuales sirven para generar vistas, ya que al tener la data en detalle, se puede tomar cualquier generador de dashboard como Power BI (o excel) revisar las transacciones, además se agruparon los inputs para validar diariamente si el ingreso de los locales reportados corresponde a los ingresos reportados en los diversos medios, teniendo además, detalles de la cantidad de ingresos en efectivo u otro medio.