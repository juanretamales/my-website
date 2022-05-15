# PEP 20 – El Zen de Python

"Al igual que cada arquitecto/a impregna sus creaciones con su propia visión y personalidad, o la cocina de cada chef suele tener una esencia única, cada desarrollador/a escribe código según sus gustos, por lo que el código de diferentes desarrolladores/as suele ser muy heterogéneo (diferente)." (elpythonista)

Ademas, entender el Zen de Python nos ayudara a entender las directrices en la que fue creado y las que se seguira desarrollando Python, por lo que el código desarrollado siguiendo estas guias se considerara Pythónico.

Dado que Python es uno de los pocos lenguajes con unas directrices tan claras hace que el lenguaje sea aún más extraordinario.

# ¿Que es Zen?
El zen se basa en la búsqueda de la iluminación a través de técnicas que evitan los esquemas conceptuales.  (definicion.de)

# ¿Que es el Zen de Python?
El Zen de Python es una colección de 20 principios de software que influyen en el diseño del Lenguaje de Programación Python, de los cuales 19 fueron escritos por Tim Peters​.

Podría exportarse a otros lenguajes dado que muchas de sus reglas no son únicas para Python sino aplicables a cualquier lenguaje.

## 1. Bello es mejor que feo.
*Beautiful is better than ugly*

En programación cualquiera con algunas decenas de miles de líneas escritas puede apreciar si un código es bonito o feo, aplicando las siguientes reglas o con reglas propias que da la experiencia.

```python
# ejemplo de codigo feo
gatos=4;perros=6;patas=34;
assert patas==(gatos*perros*4),'Número de patas dispar';

# ejemplo de codigo bonito
gatos = 4
perros = 6
patas = 34
assert patas == (gatos * 4) + (perros * 4), 'Número de patas dispar'
```

## 2. Explícito es mejor que implícito
*Explicit is better than implicit*

Cuando un código es explícito, no requiere que el lector tenga que intuir o saber de antemano algún elemento implícito del sistema, haciendo que la legibilidad mejore considerablemente.

```python
# version implicita
def mts_in2(m):
    return m * 39.3701 * 2

# version explicita
def metros_a_pulgadas_dobles(metros:int):
    pulgadas_por_metro = 39.3701
    multi_doble = 2
    return metros * pulgada_por_metro * multi_doble
```

## 3. Simple es mejor que complejo
*Simple is better than complex.*

Si el sistema está correctamente implementado, cada parte independiente será simple si se estudia de forma aislada, por lo que, el estudio del sistema completo se podría simplificar en el estudio de cada parte simple.

## 4. Complejo es mejor que complicado 
*Complex is better than complicated.*

Un sistema complicado, se compone de elementos simples que no son independientes entre sí, sino que el sistema conoce de alguna lógica extra que convierte el sistema en complicado.

```python
import datetime as dt
# version complejo
int(numpy.ceil((end_date - start_date).days + (end_date - start_date).seconds / 86400 )) if isinstance(start_date:dt.datetime) and isinstance(end_date:dt.datetime) else 0

# version Simple
def obtener_dias(start_date:dt.datetime, end_date:dt.datetime)->int:
    if isinstance(start_date:dt.datetime) and isinstance(end_date:dt.datetime):
        diferencia_fechas = end_date - start_date
        segundos_en_dia = 86400
        dias = diferencia_fechas.days + diferencia_fechas.seconds / segundos_en_dia
        return int(numpy.ceil(dias))
    else:
        return 0

obtener_dias(start_date, end_date)
```

Por tanto por orden de preferencia sería:

**Simple > Complejo > Complicado **

## 5. Plano es mejor que anidado 
*Flat is better than nested.*

La capacidad de retención y comprensión de cada desarrollador es limitada, por tanto si se anidan las sentencias en vez de mantenerlas lo más planas posibles, se suele mermar la capacidad cansando al lector del código.

Una forma de aplanar un código anidado es usando funciones planas y otra podría ser separando en modulos o funciones simples, aunque la primera opción suele quedar muy densa fácilmente.

```python
# version anidada
valores_ajustados = []
for s in sistemas:
    sensores = sensores_sistema(s)
    for sensor in sensores:
        valores_s = valores_sensor(sensor)
        for val in valores_s:
            valores_ajustados.append(ajustar_valor(val))

# version aplanada pero densa
valores_ajustados = [ajustar_valor(val) for val in valores_sensor(sensor) for sensor in sensores_sistema(s) for s in sistemas]

# version en funciones simples, testeables y escalables
def valores_del_sistema_ajustados(sistemas):
    for sistema in sistemas:
        yield valores_sistema(sistema)

def valores_sistema(sistema):
    for sensores in sistema:
        yield valores_sensores(sensores)

def valores_sensores(sensores):
    for sensor in sensores:
        yield valores_sensor_ajustados(sensor)

def valores_sensor_ajustados(sensor):
    for valor in valores_sensor(sensor):
        yield ajustar_valor(valor)
```

## 6. Disperso es mejor que denso
*Sparse is better than dense.*

Cuando se aumenta la densidad del código haciendo en pocas líneas muchas operaciones se puede hacer perder el foco del lector, por tanto es muy recomendable añadir espacios entre bloques lógicos. No intentes pegar demasiado código en una línea, especialmente si la capacidad del equipo aun no esta preparado. Si la operación es simple, puedes usar una operacion plana (por el punto anterior) siempre que no requiera comentar todos los resultados como la de la version densa.

```python
# version densa
return i**2 if i > 0 else 0 if i==0  else 2 * i

# version dispersa
if i > 0:
    return i**2
elif i == 0:
    return 0
else: 
    return 2 * i

# version aceptada
if i > 0:
    return i**2
else:
    return 0 if i==0 else 2 * i
```

## 7. La legibilidad importa
*Readability counts.*

El código se escribe una vez pero se leen cientos de veces, por lo tanto es muy importante prestar especial atención a mejorar la legibilidad lo más posible, eligiendo los mejores nombres, separando funciones convenientemente o clases cuando son necesarios.

Existen muchas técnicas para mejorarlo e incluso libros sobre este tema, posteriormente se publicara el punto sobre pep8, documentar y comentar el codigo.

## 8. Los casos especiales no son lo suficientemente especiales para romper reglas
*Special cases aren’t special enough to break the rules.*

Cuando se definen unas reglas hay que cumplirlas, tanto en el contrato de trabajo, como en la vida y asi se lleva en el codigo, de lo contrario no tienen razón de existir. Los casos «especiales» son la excusa que se pone para romper las reglas pero realmente son sinónimo de «conozco las reglas pero en vez de cambiar el código para cumplirarlas, prefiero romperlas», lo que debería de ser inadmisible dado que a la larga (conlleva al desastre). Este ultimo caso seria como definir reglas para realizar commit en git y luego hacer push sin validar (posteriormente se publicara una entrada respeto a este tema). Por eso siempre es buena la practica de definir las reglas y casos en la organización, para que sea razonable y ayude al trabajo y no solo entorpesca el flujo de desarrollo.

## 9. Practicidad vence a la pureza
*Although practicality beats purity.*

En multitud de ocasiones nos encontramos en la situación de querer escribir el código más puro, que sigue todos los patrones de diseño «a raja tabla» y que conlleva a que los sistemas sean demasiado genéricos o que se tarden una eternidad en desarrollar, es muy importante encontrar un equilibrio entre lo que es práctico (e importante) y la pureza.

## 10. Los errores nunca deberían de ocurrir silenciosamente
*Errors should never pass silently.*

Cuando se trabaja bajo presión y se encuentran errores se tienden a ocultar o a tomar medidas demasiado drásticas como la siguiente:

```python
try:
    codigo_erroneo()
except Exception:
   pass
```

O lo que es lo mismo «se que este código falla de vez en cuando, cuando lo haga sigue sin más», esto no es solo un antipatrón sino que demuestra apatía y una desgana de hacer código profesionalmente. **Si hay un error debe ser visible para poder ser arreglado**.

## 11. A no ser que se silencien explícitamente
*Unless explicitly silenced.*

**Existen excepciones al caso anterior que se dan cuando se ha estudiado la situación, se conoce el error y explícitamente se silencia (o se actúa en consecuencia)**.

Si el error que se ha detectado es un ValueError (por ejemplo) pero se sabe que no es problemático, se debe de manejar adecuadamente, incluso pudiendo ser silenciado.

```python
try:
    codigo_erroneo()
except ValueError:
   logger.debug('Value Error manejado correctamente')
```

## 12. En el caso de ambigüedad, rechaza la tentación de adivinar 
*In the face of ambiguity, refuse the temptation to guess.*

Este concepto aplica a muchos ámbitos del desarrollo, es mucho mejor tener claro qué se está construyendo y poder crear tests, que exactamente definan y comprueben el buen comportamiento del sistema, eliminando cualquier ambigüedad.

## 13. Debería de haber una – y preferiblemente sólo una – forma obvia de hacerlo
*There should be one– and preferably only one –obvious way to do it.*

Si la forma de implementar el problema no parece obvia, quizás no sea la más correcta y haya que seguir pensando en otra opción.

## 14. Aunque la forma no parezca obvia a la primera, a no ser que seas Holandés
*Although that way may not be obvious at first unless you’re Dutch.*

Es normal que no aparezca la forma obvia la primera vez que piensa la solución, por lo que puede requerir de un método iterativo.

El guiño que se añade en esta regla sobre los holandeses hace referencia la nacionalidad del Dictador Benevolente y creador de Python Guido van Rossum.

## 15. Ahora es mejor que nunca
*Now is better than never*

En el desarrollo de software siempre hay tareas que realizar y si no se priorizan las tareas importantes para hacerlas cuando salen los problemas, estos pueden alargarse en el tiempo hasta no hacerlas nunca.

## 16. Aunque nunca es a menudo mejor que ahora mismo
*Although never is often better than right now*

Quiere decir que no hay que forzar la realización de tareas tanto como para dejar lo que se está desarrollando actualmente, para desarrollar una tarea nueva, evitando así el cambio de contexto.

## 17. Si la implementación es difícil de explicar, es una mala idea
*If the implementation is hard to explain, it’s a bad idea*

Esta regla suele aplicarse en muchos ámbitos en general, dado que si no eres capaz de explicar la idea de forma simple es que no la visualizas de forma simple por lo que quizás sea necesario consensuar la solución hasta tenerla clara.

## 18. Si la implementación es facil de explicar, probablemente sea buena idea
*If the implementation is easy to explain, it may be a good idea.*

Por el contrario al caso anterior, ademas de visualizar de forma simple la solución, ayuda a transmitir de manera efectiva, presica y clara las ideas de la solución.

**“Si las ordenes no están claras y las instrucciones no han sido debidamente explicadas, la culpa es del general, es decir mía”** (El arte de la guerra)

## 19. Los espacios de nombres son una buena idea, ¡usemos más de ellos!
*Namespaces are one honking great idea — let’s do more of those!*

Los espacios de nombres en Python se pueden crear de múltiples formas y ayudan mucho a desacoplar código y de hacerlo más modular, por lo que se recomienda usarlos más.

## 20. Nada es verdad, todo esta permitido (Ezio Auditore)

Decir que nada es verdad supone darse cuenta de que los cimientos de la sociedad (y sistema informatico) son frágiles y que debemos ser los pastores de nuestra propia civilización (y nuestro codigo).

Decir que todo esta permitido es comprender que somos los arquitectos de nuestros actos (codigo) y que debemos vivir con las consecuencias, ya sean gloriosas o trágicas. Ademas, que se podrian romper cualquiera de estas reglas (o todas), siempre que se tenga claro conocimiento de las repercuciónes y preferiblemente se deje constancia del por que se tomaron esas desiciones.

# Fuentes:
- https://github.com/python/peps/blob/main/pep-0020.txt
- https://peps.python.org/pep-0020/
- https://pep20.org/
- https://elpythonista.com/zen-de-python
- https://definicion.de/zen/
- https://pybaq.co/blog/el-zen-de-python-explicado/
