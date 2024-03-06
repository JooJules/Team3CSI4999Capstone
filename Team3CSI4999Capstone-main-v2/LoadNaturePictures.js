// window.onload = function () {
//     const images = [
//         "./images/Nature/Bat.png",
//         "./images/Nature/Bear.png",
//         "./images/Nature/Bee.png",
//         "./images/Nature/Beetle.png",
//         "./images/Nature/Bird.png",
//         "./images/Nature/Butterfly.png",
//         "./images/Nature/Cat.png",
//         "./images/Nature/Chameleon.png",
//         "./images/Nature/Cheetah.png",
//         "./images/Nature/Chicken.png",
//         "./images/Nature/Clam.png",
//         "./images/Nature/Cow.png",
//         "./images/Nature/Crab.png",
//         "./images/Nature/Daisy.png",
//         "./images/Nature/Deer.png",
//         "./images/Nature/Dinosaur.png",
//         "./images/Nature/Dog.png",
//         "./images/Nature/Duck.png",
//         "./images/Nature/Eagle.png",
//         "./images/Nature/Elephant.png",
//         "./images/Nature/Fish.png",
//         "./images/Nature/Flower.png",
//         "./images/Nature/Fly.png",
//         "./images/Nature/Frog.png",
//         "./images/Nature/Goldfish.png",
//         "./images/Nature/Goose.png",
//         "./images/Nature/Grass.png",
//         "./images/Nature/Grasshopper.png",
//         "./images/Nature/Hamster.png",
//         "./images/Nature/Hawk.png",
//         "./images/Nature/Horse.png",
//         "./images/Nature/Ladybug.png",
//         "./images/Nature/Lamb.png",
//         "./images/Nature/Lilacs.png",
//         "./images/Nature/Lily Pad.png",
//         "./images/Nature/Lily.png",
//         "./images/Nature/Lion.png",
//         "./images/Nature/Lizard.png",
//         "./images/Nature/Lobster.png",
//         "./images/Nature/Monkey.png",
//         "./images/Nature/Mosquito.png",
//         "./images/Nature/Mouse.png",
//         "./images/Nature/Octopus.png",
//         "./images/Nature/Owl.png",
//         "./images/Nature/Penguin.png",
//         "./images/Nature/Pig.png",
//         "./images/Nature/Rabbit.png",
//         "./images/Nature/Rose.png",
//         "./images/Nature/Seaweed.png",
//         "./images/Nature/Shark.png",
//         "./images/Nature/Sheep.png",
//         "./images/Nature/Snake.png",
//         "./images/Nature/Spider.png",
//         "./images/Nature/Squid.png",
//         "./images/Nature/Squirrel.png",
//         "./images/Nature/Starfish.png",
//         "./images/Nature/Sunflower.png",
//         "./images/Nature/Tiger.png",
//         "./images/Nature/Tornado.png",
//         "./images/Nature/Tree.png",
//         "./images/Nature/Tulip.png",
//         "./images/Nature/Turtle.png",
//         "./images/Nature/Whale.png",
//         "./images/Nature/Wolf.png"
//     ];

//     let row_marker = 1;
//     let column_marker = 1;

//     for (i = 0; i < images.length; i++) {
//         let picture_button = document.getElementById(images[i].substring(16, images[i].length - 4));
        
//         //Sets the classes of the picture button, as there are 3 based on position withing the document.
//         let classname = `image-button button-column-${column_marker} button-row-${row_marker}`;
//         picture_button.classList = classname;
       
//         if (column_marker == 4) {
//             column_marker = 1;
//             row_marker++;
//         } else {
//             column_marker++;
//         }

//         //Create the image html element to append to button
//         let image_to_display = document.createElement("img");
//         image_to_display.src = images[i];
//         image_to_display.classList = "picture-rectangle";

//         //Create the image text element to append to button
//         let image_text_to_display = document.createElement("div");
//         image_text_to_display.classList = "image-button-text-box";
//         image_text_to_display.innerText = picture_button.id;

//         //Put the image and text as children of the button class
//         document.getElementById(picture_button.id).appendChild(image_to_display);
//         document.getElementById(picture_button.id).appendChild(image_text_to_display);
//     }
// }