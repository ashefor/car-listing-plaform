
window.onload = function () {
    let url
    let data;
    const maindiv = document.getElementById('show_cars')
    const editting = document.getElementById('editentry')
    let xml = new XMLHttpRequest;
    url = 'http://localhost:3000/cars'
    xml.open('GET', url, true)
    xml.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            data = JSON.parse(this.responseText)
            // console.log(data)
            let details;
            // let array = []
            if(data.length == 0){
                document.getElementById('hide_cars').style.display = "block";
                document.getElementById('show_cars').style.display = "none";
            }
            for (let i = 0; i < data.length; i++) {
                details = data[i].details;
                // array.push(data[i].id)
                var desktopcard = document.createElement("div");
                desktopcard.setAttribute('class', 'showallcars');
                desktopcard.setAttribute('id', `showallcars-${data[i].id}`);
                var pricecontainer = document.createElement('div');
                pricecontainer.setAttribute('class', 'pricing')
                var maincard = document.createElement('div')
                maincard.setAttribute('id', 'maincard')
                var deletecard = document.createElement('div');
                deletecard.setAttribute('class', 'delete')
                var cardheader = document.createElement("div");
                cardheader.setAttribute('class', 'mainfeatures_header')
                var imagecontainer = document.createElement("div");
                var mainfeatures = document.createElement("div");
                mainfeatures.setAttribute('class', 'cards mainfeatures')
                var header = document.createElement('a')
                header.setAttribute('id', `viewdetails-${data[i].id}`)
                header.setAttribute('href', '../view-single-car/view-car.html')
                var pricing = document.createElement('h2')
                var image = document.createElement('img')
                image.setAttribute('class', 'imgview')
                var deletebtn = document.createElement('button');
                var viewcontact =document.createElement('button')
                var contactdetails =document.createElement('h4')
                contactdetails.setAttribute('id', `contactdetails-${data[i].id}`)
                contactdetails.setAttribute('class', 'contactdetails')
                viewcontact.setAttribute('id', `viewcontact-${data[i].id}`)
                deletebtn.setAttribute('id', `deletedata-${data[i].id}`)
                deletebtn.setAttribute('class', 'deletethis')
                var editntn = document.createElement('button')
                editntn.innerText = "Edit"
                editntn.setAttribute('id', `editdata-${data[i].id}`)
                editntn.setAttribute('class', 'editthis')
                header.innerText = data[i].car_name.toLowerCase();
                contactdetails.innerText = data[i].contact
                // console.log(header)
                pricing.innerText = data[i].price.toLocaleString();
                deletebtn.innerText = "Delete!"
                viewcontact.innerText = "contact seller"
                if (data[i].car_name === "mazda") {
                    image.setAttribute('src', '../../images/mazda.png')
                }
                else if (data[i].car_name === "bugatti") {
                    image.setAttribute('src', '../../images/bugatti2.png')
                }
                else if (data[i].car_name === "toyota") {
                    image.setAttribute('src', '../../images/toyota.png')
                }
                else if (data[i].car_name === "honda") {
                    image.setAttribute('src', '../../images/honda.png')
                }
                else if (data[i].car_name === "ferrari") {
                    image.setAttribute('src', '../../images/ferrari2.png')
                }
                else if (data[i].car_name === "bmw") {
                    image.setAttribute('src', '../../images/bmw.png')
                }
                else if (data[i].car_name === "range") {
                    image.setAttribute('src', '../../images/range.png')
                }
                else if (data[i].car_name === "benz") {
                    image.setAttribute('src', '../../images/benz.png')
                }
                imagecontainer.append(image);
                cardheader.append(header);
                mainfeatures.append(cardheader);
                maincard.append(cardheader);
                pricecontainer.append(pricing);
                deletecard.append(deletebtn, editntn,  contactdetails)
                mainfeatures.append(maincard, pricecontainer, deletecard)
                desktopcard.append(imagecontainer, mainfeatures)
                maindiv.appendChild(desktopcard);
                // console.log(array)
                // console.log(array[i])
                
                for (let y in details) {
                    var mainfeatures_main = document.createElement('div');
                    mainfeatures_main.setAttribute('class', 'mainfeatures_details')
                    var ul = document.createElement('ul');
                    var li = document.createElement('li');
                    var year = document.createElement('li');
                    var transmission = document.createElement('li');
                    li.innerText = details[y].model_name;
                    year.innerText = details[y].year;
                    transmission.innerText = data[i].color
                    ul.append(li, year, transmission)
                    mainfeatures_main.appendChild(ul);
                    maincard.appendChild(mainfeatures_main)
                }

                let viewpost = document.getElementById(`showallcars-${data[i].id}`);
                viewpost.addEventListener('click', showdetails)
                function showdetails(e){
                    console.log(data[i].id)
                    console.log(e.target)
                    localStorage.setItem("id", data[i].id)
                    window.location.href = '../view-single-car/view-car.html'
                }

            }

        }
    }
    xml.send();

    
}