# 📝 Aplicación de Sistema de Blog en Angular

## 🎯 **Descripción del ejercicio**
El objetivo del ejercicio es desarrollar un sistema de blog en Angular mediante un array de datos estático creado en el propio servicio de Angular (sin conexión HTTP a ninguna API).

---

## 🚀 **Requisitos de la aplicación**

### ✅ **Blog Angular:**
- Permitir a los usuarios crear publicaciones de blog a través de un formulario.
- Visualizar las publicaciones creadas.
- Listado de noticias en la página principal.
- Filtrar por:
  - **Categoría** de viaje.
  - **Título** de la publicación.

---

### 🌐 **Rutas de la aplicación**
1. `/home` → Muestra el listado de Post desde el array de datos estático.
2. `/new` → Formulario para agregar una nueva publicación:
   - **Título**
   - **Texto**
   - **Autor**
   - **Imagen (URL)**
   - **Categoría**
   - **Fecha de publicación**  
   *➡️ Todos los campos son obligatorios.*  
   *➡️ Validación personalizada para la URL mediante expresión regular.*  
3. `/post/:idpost` → Muestra la vista detallada de una publicación específica.

---

## 🏷️ **Categorías de Post**
- Las categorías se almacenarán en su propio array dentro del servicio.
- Categorías predefinidas:
  - Playa
  - Montaña
  - Ciudad
  - Rural
  - Festivales
- El selector de categorías se puede implementar mediante:
  - **@Output**
  - **QueryParams**

---

## 🔎 **Filtros y Búsquedas**
✅ Filtrar por categoría  
✅ Búsqueda por título de la publicación  

---

## 🏗️ **Pasos a seguir**

### 1. **Definir Interfaces**
Definir el interfaz de datos de nuestra aplicación. En este caso tendremos que definir el interfaz Post que cuenta con las siguientes propiedades:
id, Titulo, texto, autor, imagen (puede ser una url), fecha, categoria:ICategory

Y el interfaz de Category que cuenta con las siguientes propiedades.
id, Titulo

## 🚀 **2. Crear el Servicio (BlogService)**
### 🔹 **Array de Posts**  
➡️ Almacenar publicaciones de manera estática.  

### 🔹 **Array de Categorías**  
- Playa  
- Montaña  
- Ciudad  
- Rural  
- Festivales  

### 🛠️ **Métodos en el Servicio:**
✅ `insert(post: IPost)` → Añadir un nuevo post  
✅ `getAll()` → Obtener todos los posts  
✅ `getByCategoria(cat: string)` → Obtener los posts de una categoría específica  
✅ `getById(id: number)` → Obtener un post por su ID  
✅ `getAllCategories()` → Obtener todas las categorías  

---

## 🎯 **3. Componente BlogComponent**
✅ Mostrar todos los posts usando el método `getAll()` del servicio.  
✅ Filtro de categoría desde `getAllCategories()`.  
✅ Filtro por título mediante una barra de búsqueda.  

---

## 📝 **4. Componente FormularioComponent**
✅ **Formulario reactivo con validaciones:**  
- **Título, texto, autor, imagen (URL), categoría, fecha** → **Obligatorios**  
✅ **Validar la URL mediante una expresión regular**  
✅ **Al enviar el formulario** → Insertar el post mediante el método `insert()` del servicio.  

---

## 👁️ **5. Componente ViewPostComponent**
✅ Mostrar la información detallada de un post mediante `getById()` del servicio.  

---

## 🖼️ **Estilo y Maquetación**
✅ **CSS + Bootstrap**  
✅ **Diseño responsive**  

---

## 💻 **Requisitos Técnicos**
✅ **Componentes Angular** → Lista de posts, formulario y vista detallada.  
✅ **Servicios Angular** → Gestión de datos.  
✅ **Formularios Reactivos** → Validación y envío de datos.  
✅ **Interfaces** → Tipado correcto de datos.  

---

## 📂 **Entregables**
✅ **Código completo en Angular**  
✅ **Repositorio GitHub** → Commits detallados por tarea  

---
