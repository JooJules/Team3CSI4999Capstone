window.onload = function () {
    const images = [
        "./images/Transportation/Airplane.png",
        "./images/Transportation/Ambulance.png",
        "./images/Transportation/ATV.png",
        "./images/Transportation/Bicycle.png",
        "./images/Transportation/Boat.png",
        "./images/Transportation/Car.png",
        "./images/Transportation/Fire Truck.png",
        "./images/Transportation/Go-Kart.png",
        "./images/Transportation/Helicopter.png",
        "./images/Transportation/Hot Air Balloon.png",
        "./images/Transportation/Limousine.png",
        "./images/Transportation/Motorcycle.png",
        "./images/Transportation/Police Car.png",
        "./images/Transportation/Rocket.png",
        "./images/Transportation/School Bus.png",
        "./images/Transportation/Scooter.png",
        "./images/Transportation/Ship.png",
        "./images/Transportation/Skateboard.png",
        "./images/Transportation/Submarine.png",
        "./images/Transportation/Taxi.png",
        "./images/Transportation/Train.png",
        "./images/Transportation/Truck.png",
        "./images/Transportation/UFO.png"
    ];

    let row_marker = 1;
    let column_marker = 1;

    for (i = 0; i < images.length; i++) {
        let picture_button = document.getElementById(images[i].substring(24, images[i].length - 4));
        
        //Sets the classes of the picture button, as there are 3 based on position withing the document.
        let classname = `image-button button-column-${column_marker} button-row-${row_marker}`;
        picture_button.classList = classname;

        if (column_marker == 4) {
            column_marker = 1;
            row_marker++;
        } else {
            column_marker++;
        }

        //Create the image html element to append to button
        let image_to_display = document.createElement("img");
        image_to_display.src = images[i];
        image_to_display.classList = "picture-rectangle";

        //Create the image text element to append to button
        let image_text_to_display = document.createElement("div");
        image_text_to_display.classList = "image-button-text-box";
        image_text_to_display.innerText = picture_button.id;

        //Put the image and text as children of the button class
        document.getElementById(picture_button.id).appendChild(image_to_display);
        document.getElementById(picture_button.id).appendChild(image_text_to_display);
    }
}