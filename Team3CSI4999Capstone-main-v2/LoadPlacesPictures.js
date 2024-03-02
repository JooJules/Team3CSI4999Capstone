window.onload = function () {
    const images = [
        "./images/Places/Airport.png",
        "./images/Places/Backyard.png",
        "./images/Places/Bathroom.png",
        "./images/Places/Beach.png",
        "./images/Places/Bedroom.png",
        "./images/Places/Campground.png",
        "./images/Places/Carnival.png",
        "./images/Places/City.png",
        "./images/Places/Classroom.png",
        "./images/Places/Closet.png",
        "./images/Places/Farm.png",
        "./images/Places/Forest.png",
        "./images/Places/Front Yard.png",
        "./images/Places/Garage.png",
        "./images/Places/Grocery Store.png",
        "./images/Places/Home.png",
        "./images/Places/Hospital.png",
        "./images/Places/Kitchen.png",
        "./images/Places/Lighthouse.png",
        "./images/Places/Living Room.png",
        "./images/Places/Mall.png",
        "./images/Places/Museum.png",
        "./images/Places/Outside.png",
        "./images/Places/Playground.png",
        "./images/Places/Porch.png",
        "./images/Places/Restaurant.png",
        "./images/Places/School.png",
        "./images/Places/Stadium.png",
        "./images/Places/Store.png"
    ];

    let row_marker = 1;
    let column_marker = 1;

    for (i = 0; i < images.length; i++) {
        let picture_button = document.getElementById(images[i].substring(16, images[i].length - 4));
        
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