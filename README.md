# Zadanie 2

## Bohdan Basistyi: TI6.1

### Aby uruchomić kontainer trzeba wpisać:
`docker compose up`

![image](https://github.com/Kussasin/fibonacci_calc/blob/main/home/public/diagram.png?raw=true)

 Nginx jest narażony na dostęp do Internetu na porcie 80. Gdy żądanie jest wysyłane do dowolnego punktu
końcowego frontendu, serwer frontend express obsługuje statyczne strony internetowe html. Gdy żądanie jest
wysyłane ze strony internetowej gscal (lub do dowolnego punktu końcowego /api), serwer sieciowy api express
obsługuje te żądania.
