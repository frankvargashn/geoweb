 function addRutas() {

            var url = 'datos/rutas.geojson';
            map.addSource('rutas', { type: 'geojson', data: url});

                 map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'rutas',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#ff0000',
            'line-width': 3
            }
            });

} //fin funcion