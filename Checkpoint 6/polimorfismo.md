# Polimorfismo

La palabra "polimorfismo" significa "muchas formas" y en programación se refiere a métodos o funciones u operadores que, con el mismo nombre, pueden ser ejecutados en varios objetos o clases.

Esto es especialmente útil a la hora de trabajar con clases, porque permite ejecutar el mismo método en diferentes objetos con la misma línea de código (siempre que esos métodos tengan el mismo nombre):

{% code lineNumbers="true" %}
```python
class Clase1:
  def metodo(self):
    print("123")

class Clase2:
  def metodo(self):
    print("234")

class Clase3:
  def metodo(self):
    print("345")

objeto1 = Clase1
objeto2 = Clase2
objeto3 = Clase3

for objeto in (objeto1, objeto2, objeto3):
  objeto.metodo(objeto)

# Se imprimirá "123" "234" "345"
```
{% endcode %}

En este ejemplo, primero se crean las diferentes clases (líneas 1-11), luego se instancian, es decir se crean objetos a partir de esas clases (líneas 13-15) y por último se ejecuta el método de cada objeto mediante un bucle "for" (líneas 17-18). Aunque sean objetos de difeentes clases, se ejecutara el método de cada clase con la misma línea de código, gracias al polimorfismo.

{% hint style="info" %}
Puedes consultar más ejemplos de polimorfismo [aquí](https://www.guru99.com/es/polymorphism-in-python.html).
{% endhint %}
