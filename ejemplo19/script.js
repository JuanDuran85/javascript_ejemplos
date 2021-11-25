$(document).ready(function () {
    let bodyTable = $('table tbody');

    $.ajax({
        type: 'GET',
        url: 'https://mindicador.cl/api',
        success: ( datosEconomicos ) => {

        let cont = 0;
        for (const element in datosEconomicos) {
            if (typeof (datosEconomicos[element]) === 'string'){
                continue;
            }

            bodyTable.append(
                `
                    <tr>
                        <td>${cont+1}</td>
                        <td>${datosEconomicos[element].codigo}</td>
                        <td>${datosEconomicos[element].nombre}</td>
                        <td>${datosEconomicos[element].valor}</td>
                    </tr>
                `
            );
            cont++;
        }
        },
        error: ( error ) => {
            console.error(`Codigo de error: ${error.status}`);
            console.error(error.statusText);
            console.error(error.responseText);
        }
    });

    $('#btnDolar').on('click', ()=>{
        $.ajax({
            type: 'GET',
            url: 'https://mindicador.cl/api/dolar',
            success: ( datosDolar ) => {
                let graficaDolar = datosDolar.serie.map(element => {
                    return {
                        x: new Date(element.fecha), 
                        y: element.valor
                    }
                });

                console.log(graficaDolar);

                let options = {
                    animationEnabled: true,
                    exportEnabled: true,
                    theme: "light2",
                    title: {
                        text: "Grafica del Dolar por fecha"
                    },
                    axisX: {
                        valueFormatString: "DD",
                    },
                    axisY: {
                        title: "USD",
                        titleFontSize: 24
                    },
                    data: [{
                        type: "spline", 
                        yValueFormatString: "$#,###.##",
                        dataPoints: graficaDolar
                    }]
                };

                $("#chartContainer").CanvasJSChart(options);
            },
            error: ( error ) => {
                console.error(error);
            }
        });
    })

    $('form').on('submit',(e)=> {
        e.preventDefault();
        let codigo = $('#entrada').val();
        $.ajax({
            type: 'GET',
            url: `https://mindicador.cl/api/${codigo}`,
            success: ( datos ) => {
                let graficaDolar = datos.serie.map(result => {
                    return {
                        x: new Date(result.fecha), 
                        y: result.valor
                    }
                });

                console.log(graficaDolar);

                let options = {
                    animationEnabled: true,
                    exportEnabled: true,
                    theme: "light2",
                    title: {
                        text: `Grafica del ${codigo.toUpperCase()} por fecha`
                    },
                    axisX: {
                        valueFormatString: "DD",
                    },
                    axisY: {
                        title: "USD",
                        titleFontSize: 24
                    },
                    data: [{
                        type: "spline", 
                        yValueFormatString: "$#,###.##",
                        dataPoints: graficaDolar
                    }]
                };

                $("#chartContainer").CanvasJSChart(options);
            },
            error: ( error ) => {
                console.error(error);
            }
        });
    })
});