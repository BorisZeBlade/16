const petro = document.getElementById('petro')
const tucson = document.getElementById('tucson')
const tokyo = document.getElementById('tokyo')

async function Api() {
    const response_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&hourly=temperature_2m,wind_speed_10m')
    const response_tucson = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=110.9265&hourly=temperature_2m&current_weather=true')
    const response_tokyo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m&current_weather=true')
    const data_petro = await response_petro.json()
    const data_tucson = await response_tucson.json()
    const data_tokyo = await response_tokyo.json()
    return [data_petro, data_tokyo, data_tucson]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)

        // Средняя температура для Петров
        const petroTemperatures = out[0].hourly.temperature_2m;
        const petroAvgTemp = petroTemperatures.length > 0 ? 
            (petroTemperatures.reduce((acc, el) => acc + el, 0) / petroTemperatures.length) : 0;
        petro.innerText = `Air temperature: ${petroAvgTemp.toFixed(2)} \u00B0C`;

        // Текущая температура для Тусона и Токио
        tucson.textContent = `Air temperature: ${out[2].current_weather.temperature} \u00B0C`;
        tokyo.textContent = `Air temperature: ${out[1].current_weather.temperature} \u00B0C`;

    } catch(error) {
        console.log(error)
    } finally {
        setTimeout(output, 10000)
    }
}

output()
