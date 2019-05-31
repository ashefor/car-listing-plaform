window.onload = function () {
    let selectcar = document.getElementById('select_car')
    selectcar.addEventListener('change', selectacar)
    let car_value;
    let fuel_type;
    let transmission_type;
    function selectacar(e){
        car_value = e.target.value;
        return car_value;
    }

    let selectfuel = document.getElementById('select_fuel')
    selectfuel.addEventListener('change', selectfueltype)

    function selectfueltype(e){
        fuel_type = e.target.value;
        return fuel_type;
    }

    let transmissiontype = document.getElementById('select_transmission')
    transmissiontype.addEventListener('change', selecttransmission)

    function selecttransmission(e){
        transmission_type = e.target.value;
        return transmission_type;
    }
    let btn = document.getElementById('submitbutton')
    btn.addEventListener('click', submitform)
    function submitform(e) {
        e.preventDefault()
        let data = {};
        data.car_name = car_value.toLowerCase();
        data.price = parseInt(document.getElementById('price').value)
        data.details = [
            {
                "model_name": document.getElementById('model').value,
                "year": document.getElementById('year').value,
            }
        ],
            data.description = document.getElementById('description').value;
        data.color = document.getElementById('color').value;
            data.transmission = transmission_type;
        data.mileage = document.getElementById('mileage').value;
        data.fuel = fuel_type;
        data.contact = document.getElementById('contact').value.toString();
        let jsob = JSON.stringify(data)
        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/cars', true)
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function () {
            if (this.status === 201 && this.readyState === 4) {
                window.location.href = '../home/index.html'
            }
        }
        request.send(jsob)
    }

}