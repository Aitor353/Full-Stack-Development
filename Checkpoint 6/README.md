---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Clases en python

Las clases son elementos que permiten agrupar información y acciones. Se pueden incluir elementos como las variables o los métodos y se comportan como nuevos “data-type”-s. Se podría decir que una clase es un constructor de objetos o un “plano” para crearlos.

La sintaxis de las clases en Python es la siguiente:

{% code fullWidth="false" %}
```python
class Mi_clase:
    mi_variable = 10
```
{% endcode %}

Hay que tener en cuenta que para usar una clase hay que instanciarla, es decir, crear un objeto que tenga esa clase como “data-type”:

```python
mi_objeto = Mi_clase()
```

Además, en Python, todos los métodos de las clases tienen que tener "self" como argumento:

```python
class Mi_clase:
    mi_variable = 10
    def mi_metodo(self):
        mi_variable += 1
```

{% hint style="info" %}
Más información acerca de las clases en python [aquí](https://docs.python.org/es/3/tutorial/classes.html).
{% endhint %}

***

### El método \_\_init\_\_

Todas las clases en python tienen por defecto incluido el método "\_\_init\_\_", que se ejecuta automáticamente cada vez que se crea un nuevo objeto a partir de la clase. Este método puede incluir argumentos, esta es la sintaxis:

```python
class Mi_clase:
    __init__(self, argumento1)
        self.argumento1 = argumento1
        
mi_objeto = Mi_clase(5)

print(mi_objeto.argumento1)
# Se imprimirá "5"
```
