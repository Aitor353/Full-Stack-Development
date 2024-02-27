# Método dunder

Los métodos "dunder" se refieren a los métodos que están escritos con dos barras bajas antes y despues del nombre del método; viene del inglés "**d**ouble **under**score", "dunder". Un ejemplo de esto es el [método "\_\_init\_\_"](./#el-metodo-\_\_init) que hemos visto al hablar de las clases en python.

Python no tiene métodos protegidos o privados (que sí que existen en otros lenguajes de programación) y para eso están los métodos "dunder": son una convención para señalar los métodos que vienen directamente del lenguaje Python y marcar que, aunque pueden ser usados, no deben ser modificados.

Además del método "\_\_init\_\_", hay otros métodos "dunder", como por ejemplo:

#### El método "\_\_str\_\_"

Se utiliza para devolver un "string" de un objeto. Este método se ejecuta cuando se usa la función str() para convertir un objeto en un "string". Es decir, el método "\_\_str\_\_" define cómo será el resultado que se imprimirá al ejecutar la función str().

Esta sería la sintaxis del método "\_\_str\_\_":

```python
class Mi_clase:
    def __init__(self, argumento1):
        self.argumento1 = argumento1
    def __str__(self):
        return f"Este es el argumento: {self.argumento1}"
```

Cuando se ejecute el método "str()" en un objeto creado a partir de esta clase, el método "\_\_str\_\_" definirá su comportamiento:

```python
mi_objeto = Mi_clase(123)

str(mi_objeto)
#Devolverá "Este es el argumento: 123".
```

#### El método "\_\_repr\_\_"

Este método es bastante parecido al anterior y la implementación es exactamente igual. La diferencia está en el nombre (el método "\_\_repr\_\_" definirá el comportamiento de la función "repr()") y en que se usa para información más técnica y completa.

En general, la información del método "\_\_string\_\_" es mas fácil de leer y esta orientada al usuario y la del método "\_\_repr\_\_" es más técnica y esta orientada al desarrollador. Podemos comparar ambos métodos retomando el ejemplo anterior:

```python
class Mi_clase:
    def __init__(self, argumento1):
        self.argumento1 = argumento1
    def __str__(self):
        return f"Este es el argumento: {self.argumento1}"
    def __repr__(self):
        return f"objeto <argumento1: {self.argumento1}>"

mi_objeto = Mi_clase(123)

str(mi_objeto)
#Devolverá "Este es el argumento: 123".
repr(mi_objeto)
#Devolverá "objeto <argumento1: 123>".
```

{% hint style="info" %}
[Aquí](https://www.digitalocean.com/community/tutorials/python-str-repr-functions) puedes consultar una comparación en detalle entre los métodos "\_\_str\_\_" y "\_\_repr\_\_".
{% endhint %}
