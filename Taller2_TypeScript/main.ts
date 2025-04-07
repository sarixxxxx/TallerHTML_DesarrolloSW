import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasonsElm: HTMLElement = document.getElementById('average-seasons')!;
let serieDetailContainer: HTMLElement = document.getElementById('serie-detail')!;

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

    // evento de clic para mostrar detalles
    trElement.addEventListener("click", () => {
      showSerieDetail(serie);
    });

    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
  return series.length === 0 ? 0 : totalSeasons / series.length;
}

function showSerieDetail(serie: Serie): void {
  serieDetailContainer.innerHTML = `
    <div class="card" style="width: 100%;">
      <img src="${serie.imagen}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${serie.channel}</h6>
        <p class="card-text">${serie.description}</p>
        <p class="card-text"><small class="text-muted">Temporadas: ${serie.seasons}</small></p>
      </div>
    </div>
  `;
}


