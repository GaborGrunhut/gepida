/*
* File: app.js
* Author: Grünhut Gábor
* Copyright: 2023, Grünhut Gábor
* Group: Szoft I-1/E
* Date: 2023-03-14
* Github: https://github.com/GaborGrunhut/gepida.git
* Licenc: GNU GPL
*/

const bicycles = document.querySelector('#bicycles');
const bicyclesArray = [
    {bicName: "cassis", bicWheel: 28, bicUsage: "offroad", bicPrice: 557900 + ".- forint"},
    {bicName: "Alboin 900", bicWheel: 28, bicUsage: "trekking", bicPrice: 519900 + ".- forint"},
    {bicName: "Asgard", bicWheel: 29, bicUsage: "technikás utak", bicPrice: 519900 + ".- forint"},
    {bicName: "Ruga", bicWheel: 29, bicUsage: "hegyi", bicPrice: 372900 + ".- forint"},
    {bicName: "Reptila", bicWheel: 28, bicUsage: "városi", bicPrice: 308900 + ".- forint"},
    {bicName: "Sirmium", bicWheel: 29, bicUsage: "hegyi", bicPrice: 264900 + ".- forint"}
]

bicyclesArray.forEach((bicycle) => {
    
    let tr = document.createElement('tr');
    let tdBicName = document.createElement('td');
    let tdBicWheel = document.createElement('td');
    let tdBicUsage = document.createElement('td');
    let tdBicPrice = document.createElement('td');

    tdBicName.textContent = bicycle.bicName;
    tdBicWheel.textContent = bicycle.bicWheel;
    tdBicUsage.textContent = bicycle.bicUsage;
    tdBicPrice.textContent = bicycle.bicPrice;

    bicycles.append(tr);
    tr.append(tdBicName);
    tr.append(tdBicWheel);
    tr.append(tdBicUsage);
    tr.append(tdBicPrice);
});
