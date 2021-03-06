/*let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: 'black'
    }
};

console.log(JSON.stringify(options));//преобразование в json формат (Обьект в строку)

console.log(JSON.parse(JSON.stringify(options))); // преобразовани обратно в обьект
*/

let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    //method - GET или POST
    //URL - ссылка на страницу или файл если локальный 
    //async - true или false, true по умолчанию , дал запрос и может происходить что то другое паралельно
    //false - ничего не происходит паралельно пока сервер не ответит
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();


    //status - код отвечает в каком состоянии сейчас свервер в виде кода ответ(404)
    //statusText - отвечает в каком состоянии сервер в виде текста ответ
    //responseText / response - текст ответа сервера (бекенд передает фронтенду)
    //readyState - текущее состояние обьекта от 0 до 4 (5 состояний)

    //есть события реагирущие на состояния readystatechange

    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4 && request.status == 200){
            //превратим json в обычный формат
            let data = JSON.parse(request.response);//response - ответ от сервера

            inputUsd.value = inputRub.value / data.usd;//data.usd - data(преобразованый ответ от сервера) usd(наши данныее на сервере)

        }else{
            inputUsd.value = 'что то пошло не так';
        }
    });
});