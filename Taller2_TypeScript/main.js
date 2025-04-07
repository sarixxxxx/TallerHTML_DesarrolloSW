import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsElm = document.getElementById('average-seasons');
var serieDetailContainer = document.getElementById('serie-detail');
renderSeriesInTable(dataSeries);
averageSeasonsElm.innerHTML = "Promedio de temporadas: ".concat(getAverageSeasons(dataSeries).toFixed(2));
function renderSeriesInTable(seriesList) {
    console.log('Desplegando series');
    seriesList.forEach(function (serie, index) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(index + 1, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        // evento de clic para mostrar detalles
        trElement.addEventListener("click", function () {
            showSerieDetail(serie);
        });
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = series.reduce(function (total, serie) { return total + serie.seasons; }, 0);
    return series.length === 0 ? 0 : totalSeasons / series.length;
}
function showSerieDetail(serie) {
    serieDetailContainer.innerHTML = "\n    <div class=\"card\" style=\"width: 100%;\">\n      <img src=\"".concat(serie.imagen, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">").concat(serie.channel, "</h6>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <p class=\"card-text\"><small class=\"text-muted\">Temporadas: ").concat(serie.seasons, "</small></p>\n      </div>\n    </div>\n  ");
}
