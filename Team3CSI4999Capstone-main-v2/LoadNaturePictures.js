window.onload = function () {
    const images = [
        "./images/Nature/Bat.png",
        "./images/Nature/Bird.png",
        "./images/Nature/Butterfly.png",
        "./images/Nature/Cat.png",
        "./images/Nature/Chameleon.png",
        "./images/Nature/Cheetah.png",
        "./images/Nature/Chicken.png",
        "./images/Nature/Cow.png",
        "./images/Nature/Crab.png",
        "./images/Nature/Dinosaur.png",
        "./images/Nature/Dog.png",
        "./images/Nature/Duck.png",
        "./images/Nature/Eagle.png",
        "./images/Nature/Elephant.png",
        "./images/Nature/Fly.png",
        "./images/Nature/Goose.png",
        "./images/Nature/Grasshopper.png",
        "./images/Nature/Hamster.png",
        "./images/Nature/Hawk.png",
        "./images/Nature/Horse.png",
        "./images/Nature/Ladybug.png",
        "./images/Nature/Lamb.png",
        "./images/Nature/Lion.png",
        "./images/Nature/Lizard.png",
        "./images/Nature/Monkey.png",
        "./images/Nature/Mosquito.png",
        "./images/Nature/Octopus.png",
        "./images/Nature/Owl.png",
        "./images/Nature/Penguin.png",
        "./images/Nature/Pig.png",
        "./images/Nature/Rabbit.png",
        "./images/Nature/Shark.png",
        "./images/Nature/Sheep.png",
        "./images/Nature/Snake.png",
        "./images/Nature/Spider.png",
        "./images/Nature/Squirrel.png",
        "./images/Nature/Starfish.png",
        "./images/Nature/Tiger.png",
        "./images/Nature/Turtle.png",
        "./images/Nature/Whale.png"
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