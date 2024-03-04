window.onload = function () {
    const images = [
        "./images/Objects/Baseball.png",
        "./images/Objects/Basketball.png",
        "./images/Objects/Bathtub.png",
        "./images/Objects/Bed.png",
        "./images/Objects/Blanket.png",
        "./images/Objects/Book.png",
        "./images/Objects/Bracelet.png",
        "./images/Objects/Cabinet.png",
        "./images/Objects/Chair.png",
        "./images/Objects/Colored Pencils.png",
        "./images/Objects/Computer.png",
        "./images/Objects/Couch.png",
        "./images/Objects/Crayon.png",
        "./images/Objects/Desk.png",
        "./images/Objects/Doll.png",
        "./images/Objects/Door.png",
        "./images/Objects/Earrings.png",
        "./images/Objects/Eraser.png",
        "./images/Objects/Flip-Flops.png",
        "./images/Objects/Football.png",
        "./images/Objects/Fork.png",
        "./images/Objects/Fridge.png",
        "./images/Objects/Glasses.png",
        "./images/Objects/Glue.png",
        "./images/Objects/Hairbrush.png",
        "./images/Objects/Headphones.png",
        "./images/Objects/Key.png",
        "./images/Objects/Knife.png",
        "./images/Objects/Marker.png",
        "./images/Objects/Money.png",
        "./images/Objects/Napkin.png",
        "./images/Objects/Necklace.png",
        "./images/Objects/Notebook.png",
        "./images/Objects/Paint.png",
        "./images/Objects/Paintbrush.png",
        "./images/Objects/Pan.png",
        "./images/Objects/Pants.png",
        "./images/Objects/Paper.png",
        "./images/Objects/Pen.png",
        "./images/Objects/Pencil.png",
        "./images/Objects/Phone.png",
        "./images/Objects/Pillow.png",
        "./images/Objects/Plate.png",
        "./images/Objects/Ring.png",
        "./images/Objects/Scissors.png",
        "./images/Objects/Seesaw.png",
        "./images/Objects/Shirt.png",
        "./images/Objects/Shoes.png",
        "./images/Objects/Shower.png",
        "./images/Objects/Sink.png",
        "./images/Objects/Slide.png",
        "./images/Objects/Slippers.png",
        "./images/Objects/Soccer Ball.png",
        "./images/Objects/Socks.png",
        "./images/Objects/Spatula.png",
        "./images/Objects/Spoon.png",
        "./images/Objects/Stove.png",
        "./images/Objects/Swing.png",
        "./images/Objects/Table.png",
        "./images/Objects/Tablet.png",
        "./images/Objects/Teddy Bear.png",
        "./images/Objects/Television.png",
        "./images/Objects/Tennis Ball.png",
        "./images/Objects/Toilet.png",
        "./images/Objects/Toothbrush.png",
        "./images/Objects/Toothpaste.png",
        "./images/Objects/Towel.png",
        "./images/Objects/Toys.png",
        "./images/Objects/TV Remote.png",
        "./images/Objects/Volley Ball.png",
        "./images/Objects/Wallet.png",
        "./images/Objects/Window.png"
    ];

    let row_marker = 1;
    let column_marker = 1;

    for (i = 0; i < images.length; i++) {
        let picture_button = document.getElementById(images[i].substring(17, images[i].length - 4));

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