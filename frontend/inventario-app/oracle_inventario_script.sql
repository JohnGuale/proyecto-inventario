
-- Crear secuencias
CREATE SEQUENCE producto_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE local_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE inventario_seq START WITH 1 INCREMENT BY 1;

-- Crear tabla de producto
CREATE TABLE producto (
    id NUMBER PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    descripcion VARCHAR2(255),
    precio NUMBER(10,2) NOT NULL
);

-- Crear tabla de locales
CREATE TABLE locales (
    id NUMBER PRIMARY KEY,
    nombre VARCHAR2(100) NOT NULL,
    direccion VARCHAR2(200)
);

-- Crear tabla de inventario
CREATE TABLE inventario (
    id NUMBER PRIMARY KEY,
    producto_id NUMBER NOT NULL,
    local_id NUMBER NOT NULL,
    stock NUMBER DEFAULT 0,
    ventas NUMBER DEFAULT 0,
    CONSTRAINT fk_producto FOREIGN KEY (producto_id) REFERENCES producto(id),
    CONSTRAINT fk_local FOREIGN KEY (local_id) REFERENCES locales(id)
);

-- Poblar tabla de producto
INSERT INTO producto (id, nombre, precio) VALUES (producto_seq.NEXTVAL, 'Mouse inalámbrico','Equipo de computo', 25);
INSERT INTO producto (id, nombre, precio) VALUES (producto_seq.NEXTVAL, 'Panel Solar', 'Equipo electronico', 150);
INSERT INTO producto (id, nombre, precio) VALUES (producto_seq.NEXTVAL, 'Agua', 'Bebida natural', 1);
INSERT INTO producto (id, nombre, precio) VALUES (producto_seq.NEXTVAL, 'Aceite', 'Viveres' 10);
INSERT INTO producto (id, nombre, precio) VALUES (producto_seq.NEXTVAL, 'Laptop', 'Equipo de Computo', 1400);
INSERT INTO producto (id, nombre, precio) VALUES (producto_seq.NEXTVAL, 'Lámpara', 'Equipo Electronico', 25);

-- Poblar tabla de locales
INSERT INTO locales (id, nombre, direccion) VALUES (local_seq.NEXTVAL, 'Local Centro', 'Av. Principal 123');
INSERT INTO locales (id, nombre, direccion) VALUES (local_seq.NEXTVAL, 'Local Norte', 'Calle 45 #67');

-- Poblar tabla de inventario
INSERT INTO inventario (id, producto_id, local_id, stock, ventas) VALUES (inventario_seq.NEXTVAL, 1, 1, 100, 20);
INSERT INTO inventario (id, producto_id, local_id, stock, ventas) VALUES (inventario_seq.NEXTVAL, 2, 1, 50, 10);
INSERT INTO inventario (id, producto_id, local_id, stock, ventas) VALUES (inventario_seq.NEXTVAL, 3, 2, 200, 30);
INSERT INTO inventario (id, producto_id, local_id, stock, ventas) VALUES (inventario_seq.NEXTVAL, 4, 2, 80, 15);

commit;