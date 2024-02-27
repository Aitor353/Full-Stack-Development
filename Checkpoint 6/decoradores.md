# Decoradores

Los decoradores en Python son funciones que reciben otra función como parámetro, la modifican y devuelven una función diferente y se marcan poniéndoles un "@" delante. Son herramientas muy útiles que permiten envolver una función dentro de otra para modificar el comportamiento de esta última sin cambiar su código directamente.&#x20;

Por ejemplo:

{% code lineNumbers="true" %}
```python
class Mi_clase:

    def __init__(self, argumento1):
        self._argumento1 = argumento1

    @property
    def argumento1(self):
        return self._argumento1

    @argumento1.setter
    def argumento1(self, argumento1):
        self._argumento1 = argumento1

mi_objeto = Mi_clase(123)

mi_objeto.argumento1
#Devolverá "123"
mi_objeto.argumento1 = 345

mi_objeto.argumento1
#Devolverá "345"
```
{% endcode %}

En este caso, hay una clase con un argumento ("\_argumento1") con una barra baja delante, una convención que indica que no se debería modificar directamente (línea 3).

Entre las líneas 6 y 8,  se puede ver el primer decorador, un _getter_, llamado así porque devuelve el argumento. Entre las líneas 10 y 12 está el segundo, un _setter_, ya que sobrescribe el argumento.&#x20;

En la línea 14 se crea un objeto y se define el valor de su argumento; en la línea 18 se sobrescribe ese argumento y, como se puede ver en las líneas 16 y 20, el valor del argumento se cambia.

Con esto, lo que se consigue es modificar el argumento del objeto sin modificar en ningún momento "\_argumento1" que esta marcado como protegido.

{% hint style="info" %}
Para una descripción más detalla de los decoradores, consulta [aquí](https://codigofacilito.com/articulos/decoradores-python).
{% endhint %}
