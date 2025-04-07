import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasonsElm: HTMLElement = document.getElementById('average-seasons')!;

renderSeriesInTable(dataSeries);
averageSeasonsElm.innerHTML = `Promedio de temporadas: ${getAverageSeasons(dataSeries).toFixed(2)}`;

function renderSeriesInTable(seriesList: Serie[]): void {
  console.log('Desplegando series');
  seriesList.forEach((serie, index) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${index + 1}</td>
                       <td>${serie.name}</td>
                       <td>${serie.channel}</td>
                       <td>${serie.seasons}</td>`;

    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
  return series.length === 0 ? 0 : totalSeasons / series.length;
}
