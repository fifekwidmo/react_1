import React from 'react';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

export default Icon;


// wykorzystanie komponentu Icon (zawartego w paczce zip pobranej w tym submodule),
// w nagłówku <h3> kolumny dodaj <span>, który w Column.scss ma style w klasie .icon,
// w tym spanie wykorzystaj komponent Icon, z paczki zip pobranej wcześniej w tym submodule,
// w dataStore.js dla każdej kolumny podana jest właściwość icon, którą należy przekazać do propsa name komponentu Icon.
// W efekcie kolumna powinna posiadać karty zdefiniowane w dataStore.js, oraz Creator pozwalający na dodawanie kart do tej kolumny.