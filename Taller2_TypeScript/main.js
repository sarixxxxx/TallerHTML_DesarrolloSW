import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsElm = document.getElementById('average-seasons');
renderSeriesInTable(dataSeries);
averageSeasonsElm.innerHTML = "Promedio de temporadas: ".concat(getAverageSeasons(dataSeries).toFixed(2));
function renderSeriesInTable(seriesList) {
    console.log('Desplegando series');
    seriesList.forEach(function (serie, index) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(index + 1, "</td>\n                       <td>").concat(serie.name, "</td>\n                       <td>").concat(serie.channel, "</td>\n                       <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = series.reduce(function (total, serie) { return total + serie.seasons; }, 0);
    return series.length === 0 ? 0 : totalSeasons / series.length;
}
