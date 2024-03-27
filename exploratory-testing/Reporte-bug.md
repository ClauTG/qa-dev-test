## Reporte de errores

Datos de prueba

    web: https://www.saucedemo.com/
    usuario: error_user
    password: secret_sauce

## Funcionalidad

Completar la información personal en el proceso de compra de un artículo

### Prerrequisito

    Autenticación del usuario en la web

### Escenario: Completar información personal para iniciar compra

        Dado que el usuario ha añadido el primer artículo de la lista al carro de compra
        Cuando el usuario comienza el proceso de compra
        Y el usuario inicia el checkout
        Entonces los datos del usuario son requeridos

        Resultado esperado
        El usuario es capaz de introducir sus datos

        Resultado real
        El usuario es incapaz de introducir su apellido

> Información adicional

> ![Checkout - Personal info](/images/evidence.png "Evidencia: ")

> Explorador: Firefox

> SO: Ubuntu
