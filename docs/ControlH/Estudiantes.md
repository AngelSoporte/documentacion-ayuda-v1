---
sidebar_label: 'Estudiantes'
sidebar_position: 1
---

# Estudiantes

<div align="justify">Dentro del Menú de Estudiantes, se cuenta con un conjunto de funcionalidades para gestionar la información de los alumnos. Puedes crear nuevos estudiantes, editar los existentes y, si es necesario, dar de baja a algún alumno. Además, este menú facilita la gestión de documentos relacionados con los estudiantes y permite consultar información adicional. También brinda la flexibilidad de cambiar a los estudiantes de generación o grupo.</div>

## Crea Estudiantes

:::info SIGUE ESTOS PASOS PARA AGREGAR Estudiantes:

1. Ingresa al módulo **"Control Escolar"** y selecciona **"Estudiantes"** en el menú de "**Accesos Directos**".

2. Selecciona el icono "![](./img/IcoAdd.png) **Matricular Estudiante**".

3. Completa el **Formulario** con la información solicitada. Más adelante puedes ver su explicación.

4. Presiona **"Continuar"** para pasar al siguiente **Formulario**.

5. Finaliza haciendo clic en el botón "**Aceptar**".
:::

En el paso número 3 completa los campos del formulario con la siguiente información:

**Formulario "Crear Matrícula"**

***ESTUDIANTE***

* **Campaña:** Selecciona una **Campaña**. Esta es creada por **"Admisiones"**.

* **Generación:** Selecciona la **Generación** a la que pertenece el **Estudiante**.

* **Grupo:** Selecciona una opción.

* **CURP:** ingresa la **CURP** del **Estudiante**.

* **No. Matrícula de Migración:** Ingresa un Número

* **Perfiles:** Selecciona una opción.

* **Nombre:** Completa este campo con el **Nombre** del **Estudiante**.

* **Primer Apellido:** Ingresa el Primer Apellido del **Estudiante**.

* **Segundo Apellido** Ingresa el Segundo Apellido del **Estudiante**.

* **Sexo:** Selecciona una opción. 

* **Estado Civil:** Selecciona una opción.

* **Correo:** Escribe la dirección de **Correo**.

* **Correo Alternativo:** Escribe una dirección secundaria de **Correo**.

* **Celular:** Ingresa un número de **Celular**.

* **Teléfono:** Ingresa un número de **Teléfono**.

* **Extensión:** En caso de tener **Extensión** ingrésala.

* **Documento de Identidad:** Selecciona un **Documento Oficial** que Identifique al **Estudiante**.

* **Código de Identidad:** Ingresa el Número del **Documento de Identidad**.

* **Nacionalidad:** Selecciona una opción.

* **Fecha de Nacimiento:** Seleccione una Fecha.

* **Lugar de Nacimiento:** Ingresa el Lugar de Nacimiento del Estudiante.

***DIRECCIÓN***

* **País:** Selecciona una opción.

* **Código Postal:** Ingresa un **Código Postal**.

* **Colonia:** Selecciona una opción.

***📌Nota:*** El sistema ingresa de manera automática el **Estado** y **Municipio**.

* **Localidad:** Ingresa la **Localidad**.

* **Calle:** Ingresa el nombre.

* **Número:** Ingresa el Número del domicilio.

* **Número Interior:** Ingresa el **Número Interior**, en caso necesario.

* **Entre Calle 1:** Ingresa entre que calles está el domicilio.

* **Entre Calle 2:** Ingresa entre que calles está el domicilio.

***📌Nota:*** Una vez creado, el sistema creará un código para identificar al **Estudiante**. Esto sirve para filtrar más fácil búsquedas relacionadas con el **Estudiante**.

***OTROS DATOS***

* **Grado Escolar de la Institución:** Selecciona una opción.

* **Estado de la Institución:** Selecciona una opción.

* **Municipio de la Institución:** Selecciona una opción.

* **Institución de Procedencia:** Selecciona una opción.

* **Último grado de estudios:** Selecciona una opción.

* **Promedio:** Ingresa el **Promedio** del **Estudiante**.

* **Fecha de acreditación:** Ingresa la **Fecha de acreditación** de estudios del **Estudiante**.

* **Empresa:** Si el estudiante trabaja, ingresa el nombre de la empresa a la que pertenece.

* **Teléfono:** Ingresa el número de teléfono de la **Empresa**.

* **Extensión:** En caso de tener **Extensión** ingrésala.

* **Antigüedad en años:** Ingresa el tiempo que tiene el **Empleado** laborando en la **Empresa**.

* **Dirección de la Empresa:** Completa este campo con la **Dirección** de la **Empresa**.

***DATOS FAMILIARES***

* **Nombre del Familiar:** Completa este campo con el **Nombre del Familiar** del **Estudiante**.

* **Sexo:** Selecciona una opción.

* **Relación Familiar:** Selecciona una opción.

* **Correo:** Escribe la dirección de **Correo**.

* **Móvil:** Ingresa un número de **Celular**.

* **Teléfono:** Ingresa un número de **Teléfono**.

* **Domicilio del Familiar:** Completa este campo con la **Dirección** del **Familiar**.

* **Notificar:** Esta opción sirve para mandar un mensaje para notificar al familiar de que estás usando sus datos.

* **Contacto de Emergencia:** Esta opción es para dar de alta a tu contacto en caso emergencia.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

* <Highlight color="#50CD89"> Adicionar Familiar</Highlight> Esta opción sirve para adicionar más familiares.

* <Highlight color="#F1416C">Eliminar Último</Highlight> Esta opción sirve para eliminar el último familiar registrado.

***INDICACIONES MÉDICAS***

* **Tipo de Sangre:** Selecciona una opción.

* **Tiene Seguro:** Esta opción indica si el **Estudiante cuenta con Seguro** o no.

    * **No. de Seguro:** Completa este campo ingresando el **Número de Seguro**.

    * **Tipo de Seguro:** Selecciona una opción.

    * **Aseguradora:** Ingresa el nombre de la **Aseguradora**.

* <Highlight color="#50CD89"> Adicionar enfermedad </Highlight> Ingresa si el **Estudiante** tiene Enfermedades Crónicas.

    * **Enfermedad:** Describe la enfermedad.

    * **Tratamiento:** Describe el tratamiento de la enfermedad.

***DOCUMENTOS***

* **CURP:** Ingresa el documento **CURP** del **Estudiante**.

***📌Nota:*** Puedes ingresar el documento como Imagen (.jpg o .png) o PDF (.pdf).

***📌Nota:*** Una vez creado, el sistema creará una **Matrícula** para identificar al **Estudiante**. Esto sirve para filtrar más fácil búsquedas relacionadas con el **Estudiante**.

___

## Editar Estudiantes

Dependiendo de la actividad o necesidad, puedes requerir hacer modificaciones, es por ello que **Gedux** te permite editar los **"Estudiantes"**.

:::info SIGUIENDO ESTOS PASOS:

1. Dirígete al módulo de **"Control Escolar"** y selecciona **"Estudiantes"** en el menú de "**Accesos Directos**".

2. Busca filtrando por **Matrícula** de **Estudiante**, **Nombre** o **CURP** y selecciona el **Estudiante** que editarás.

3. Selecciona el icono "![ico](./img/IcoOpc.png)" y haz clic en "**![](./img/IcoEdt.png) Editar Datos Generales**".

4. Completa el **Formulario** con la información que deseas editar.

5. Presiona **"Aceptar"** para guardar los cambios.
:::
___

## Dar de Baja a un Estudiante

:::info Pasos para dar de baja:
1. Dirígete al módulo de **"Control Escolar"¨** y selecciona **"Estudiantes"** en el menú de "**Accesos Directos**".

2. Busca filtrando por **Matrícula** de **Estudiante**, **Nombre** o **CURP** y selecciona el **Estudiante** que se dará de baja.

3. Selecciona el icono "![ico](./img/IcoOpc.png)" y haz clic en "**![](./img/IcoDBa.png) Dar Baja**".

4. Completa el **Formulario** con la información solicitada.

5. Presiona **"Aceptar"** para guardar los cambios.
:::

En el paso número 4 completa los campos del formulario con la siguiente información:

**Formulario "Baja a Estudiante"**

* **Tipo de Baja:** Selecciona si es Definitiva o Temporal.

* **Motivo de Baja:** Selecciona una opción.

* **Submotivo de Baja:** Selecciona un motivo más específico.

* **Comentario:** Ingresar un comentario sobre el motivo de la baja.
___

## Listar Documentos

En este menú puedes listar y gestionar los documentos del **Estudiante**.

:::info Sigue estos pasos para gestionar documentos:

1. Dirígete al módulo de **"Control Escolar"** y selecciona **"Estudiantes"** en el menú de "**Accesos Directos**".

2. Busca filtrando por **Matrícula** de **Estudiante**, **Nombre** o **CURP** y selecciona el **Estudiante**.

3. Selecciona el icono "![ico](./img/IcoOpc.png)" y haz clic en "**![](./img/IcoDoc.png) Listar Documentos**".

4. Organiza los **Documentos** y presiona **"Aceptar"** para guardar los cambios.

***📌Nota:*** Si necesitas agregar documentos ingresa en "![ico](./img/IcoOpc.png)" y haz clic en "**![](./img/IcoDoc.png) Gestionar Documentos**" y sigue los pasos.
:::
___

## Ver más Datos

Para visualizar los datos del **Estudiante** sigue estos pasos:

:::info Pasos:

1. Dirígete a **"Control Escolar"** y selecciona **"Estudiantes"** en el menú de "**Accesos Directos**".

2. Busca filtrando por **Matrícula** de **Estudiante**, **Nombre** o **CURP** y selecciona el **Estudiante**.

3. Se Muestra el **Panel de Datos del Estudiante**.
:::
___

## Editar Matrícula

:::info Pasos para Editar datos de Matrícula:

1. Dirígete a **"Control Escolar"** y selecciona **"Estudiantes"** en el menú de "**Accesos Directos**".

2. Busca filtrando por **Matrícula** de **Estudiante**, **Nombre** o **CURP** y selecciona el **Estudiante**.

3. Selecciona el icono "![ico](./img/IcoOpc.png)" y haz clic en "**![](./img/IcoDBa.png) Editar Matrícula**".

4. Completa el **Formulario** con la información que deseas editar.

5. Presiona **"Aceptar"** para guardar los cambios.
:::

En el paso número 4 completa los campos del formulario con la siguiente información:

**Formulario "Editar datos de Matrícula"**

* **Matrícula Autoridad:** Es la Matrícula principal del usuario.

* **NO. Matrícula de Migración:** Ingresa la nueva **Matrícula**.

* **Perfiles:** Selecciona los **Perfiles** del **Estudiante**.

* **Situación Escolar:** Selecciona una opción que describa la situación del **Estudiante**.
___

## Cambiar de Generación

:::info Pasos para cambiar de generación a un estudiante:

1. Dirígete a **"Control Escolar"** y selecciona **"Estudiantes"** en el menú de "**Accesos Directos**".

2. Busca filtrando por **Matrícula** de **Estudiante**, **Nombre** o **CURP** y selecciona el **Estudiante**.

3. Selecciona el icono "![ico](./img/IcoOpc.png)" y haz clic en "**![](./img/IcoDBa.png) Cambiar Generación**".

4. Completa el **Formulario** con la información que deseas editar.

5. Presiona **"Continuar"** para guardar los cambios.

6. Haz clic en **"Aceptar"** para migrar las calificaciones a la nueva generación y finalizar.
:::

En el paso número 4 completa los campos del formulario con la siguiente información:

**Formulario "Cambio de Generación"**

* **Carrera:** Selecciona la **Carrera** a la cual se hará el cambió.

* **Generación:** Selecciona la **Generación** de la **Carrera**.

* **Grupo:** Selecciona una opción.

* **Incluir Materias Reprobadas:** Selecciona si quieres incluir las materias reprobadas del **Estudiante**.

* **Incorporar al Ciclo Actual de la Generación:** Selecciona si quieres incorporar al ciclo actual de la generación al **Estudiante**

***📌Nota:*** Para poder cambiar de Generación, tienes que dar de baja en la Generación actual.

* **Motivo de Baja:** Selecciona el motivo de la Baja de Generación.

* **Submotivo de Baja:** Selecciona una opción más específica.

* **Comentario:** Ingresar un comentario sobre el motivo de la baja.

___

## Cambiar Grupo 

:::info Pasos para cambiar de grupo a un estudiante:

1. Dirígete a **"Control Escolar"** y selecciona **"Estudiantes"** en el menú de "**Accesos Directos**".

2. Busca filtrando por **Matrícula** de **Estudiante**, **Nombre** o **CURP** y selecciona el **Estudiante**.

3. Selecciona el icono "![ico](./img/IcoOpc.png)" y haz clic en "**![icon](./img/CamGru.png) Cambiar Grupo**".

4. Completa el **Formulario** con la información solicitada.

5. Haz clic en **"Aceptar"** para finalizar.
:::

En el paso número 4 completa los campos del formulario con la siguiente información:

**Formulario "Modificar Grupo"**

* **Grupo:** Selecciona el grupo al que se cambiara el **Estudiante**.

* **Descripción:** Ingresa un comentario sobre el motivo de cambio de **Grupo**.

***📌Nota:*** Selecciona el icono "![](./img/IcoCam.png)**Cambios de Grupo**" para ver el historial de cambios de grupo del **Estudiante**.

___

:::caution IMPORTANTE
Los datos que contienen "✱" son obligatorios.
:::

:::tip ¿Necesitas más ayuda?
Recuerda escribirnos si tienes inquietudes sobre este u otros procesos en **Gedux**. Nuestro **Equipo de Soporte** está listo para ayudarte.
:::

<center>¿Te resultó útil este artículo? <Highlight color="#B0AEAC">[Si](https://forms.gle/LP9LYvbSWSSDwAau7)</Highlight> <Highlight color="#B0AEAC">[No](https://forms.gle/LP9LYvbSWSSDwAau7)</Highlight> </center>