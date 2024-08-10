<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TopGame - Tu Tienda de Videojuegos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        header {
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        nav {
            background-color: #34495e;
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: white;
            text-decoration: none;
            padding: 10px;
            margin: 0 5px;
        }
        main {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        .juegos {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .juego {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            margin: 10px;
            width: 300px;
            text-align: center;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .juego img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }
        footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 10px;
            position: relative;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>TopGame</h1>
        <p>Tu destino para los mejores videojuegos</p>
    </header>

    <nav>
        <a href="#inicio">Inicio</a>
        <a href="#juegos">Juegos</a>
        <a href="#sobre-nosotros">Sobre Nosotros</a>
        <a href="#contacto">Contacto</a>
    </nav>

    <main>
        <section id="juegos">
            <h2>Nuestros Juegos</h2>
            <div class="juegos">
                <div class="juego">
                    <img src="juego1.jpg" alt="The Last Guardian">
                    <h3>The Last Guardian</h3>
                    <p>Un juego de aventuras que sigue la historia de un joven y una criatura mítica llamada Trico.</p>
                    <p>Precio: $39.990 CLP</p>
                </div>
                <div class="juego">
                    <img src="juego2.jpg" alt="FIFA 24">
                    <h3>FIFA 24</h3>
                    <p>El último juego de la serie FIFA con gráficos mejorados y nuevas características de juego.</p>
                    <p>Precio: $54.990 CLP</p>
                </div>
                <div class="juego">
                    <img src="juego3.jpg" alt="Assassin's Creed Valhalla">
                    <h3>Assassin's Creed Valhalla</h3>
                    <p>Explora la era vikinga en este juego de acción y aventura de mundo abierto.</p>
                    <p>Precio: $49.990 CLP</p>
                </div>
                <div class="juego">
                    <img src="juego4.jpg" alt="Civilization VI">
                    <h3>Civilization VI</h3>
                    <p>Construye tu imperio y lidera tu civilización a la victoria en este juego de estrategia por turnos.</p>
                    <p>Precio: $44.990 CLP</p>
                </div>
                <div class="juego">
                    <img src="juego5.jpg" alt="The Legend of Zelda: Breath of the Wild">
                    <h3>The Legend of Zelda: Breath of the Wild</h3>
                    <p>Una aventura épica en un vasto mundo abierto lleno de descubrimientos y peligros.</p>
                    <p>Precio: $59.990 CLP</p>
                </div>
                <div class="juego">
                    <img src="juego6.jpg" alt="Rocket League">
                    <h3>Rocket League</h3>
                    <p>Fútbol con coches en este emocionante juego de deportes y acción.</p>
                    <p>Precio: $19.990 CLP</p>
                </div>
                <div class="juego">
                    <img src="juego7.jpg" alt="Red Dead Redemption 2">
                    <h3>Red Dead Redemption 2</h3>
                    <p>Sumérgete en el Viejo Oeste en esta épica historia de forajidos y redención.</p>
                    <p>Precio: $39.990 CLP</p>
                </div>
                <div class="juego">
                    <img src="juego8.jpg" alt="Cyberpunk 2077">
                    <h3>Cyberpunk 2077</h3>
                    <p>Explora Night City en este RPG de acción ambientado en un futuro distópico.</p>
                    <p>Precio: $49.990 CLP</p>
                </div>
                <div class="juego">
                    <img src="juego9.jpg" alt="Animal Crossing: New Horizons">
                    <h3>Animal Crossing: New Horizons</h3>
                    <p>Crea tu propio paraíso en una isla desierta en este relajante juego de simulación.</p>
                    <p>Precio: $54.990 CLP</p>
                </div>
                <div class="juego">
                    <img src="juego10.jpg" alt="Hades">
                    <h3>Hades</h3>
                    <p>Lucha para escapar del inframundo en este juego de acción roguelike aclamado por la crítica.</p>
                    <p>Precio: $24.990 CLP</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 TopGame. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
