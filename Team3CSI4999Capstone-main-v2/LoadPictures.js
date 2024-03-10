window.onload = function () {

    const objectImages = [
    "./images/Objects/Backpack.png",
    "./images/Objects/Baseball.png",
    "./images/Objects/Basketball.png",
    "./images/Objects/Bathtub.png",
    "./images/Objects/Bean Bag Chair.png",
    "./images/Objects/Bed.png",
    "./images/Objects/Bench.png",
    "./images/Objects/Blanket.png",
    "./images/Objects/Blender.png",
    "./images/Objects/Book.png",
    "./images/Objects/Boots.png",
    "./images/Objects/Bracelet.png",
    "./images/Objects/Cabinet.png",
    "./images/Objects/Calculator.png",
    "./images/Objects/Cap.png",
    "./images/Objects/Cape.png",
    "./images/Objects/Chair.png",
    "./images/Objects/Clock.png",
    "./images/Objects/Coins.png",
    "./images/Objects/Colored Pencils.png",
    "./images/Objects/Computer.png",
    "./images/Objects/Couch.png",
    "./images/Objects/Crayon.png",
    "./images/Objects/Crown.png",
    "./images/Objects/Desk.png",
    "./images/Objects/Doll.png",
    "./images/Objects/Door.png",
    "./images/Objects/Dress.png",
    "./images/Objects/Dresser.png",
    "./images/Objects/Drill.png",
    "./images/Objects/Earrings.png",
    "./images/Objects/Elevator.png",
    "./images/Objects/Eraser.png",
    "./images/Objects/Fan.png",
    "./images/Objects/Fire Hydrant.png",
    "./images/Objects/Flag.png",
    "./images/Objects/Flip-Flops.png",
    "./images/Objects/Flower Pot.png",
    "./images/Objects/Football.png",
    "./images/Objects/Fork.png",
    "./images/Objects/Fridge.png",
    "./images/Objects/Glasses.png",
    "./images/Objects/Glue.png",
    "./images/Objects/Hairbrush.png",
    "./images/Objects/Hammer.png",
    "./images/Objects/Headphones.png",
    "./images/Objects/Key.png",
    "./images/Objects/Keyboard.png",
    "./images/Objects/Knife.png",
    "./images/Objects/Laptop.png",
    "./images/Objects/Light Bulb.png",
    "./images/Objects/Light Switch.png",
    "./images/Objects/Lunchbox.png",
    "./images/Objects/Mailbox.png",
    "./images/Objects/Marker.png",
    "./images/Objects/Mirror.png",
    "./images/Objects/Money.png",
    "./images/Objects/Mouse.png",
    "./images/Objects/Nail.png",
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
    "./images/Objects/Piggy Bank.png",
    "./images/Objects/Pillow.png",
    "./images/Objects/Plate.png",
    "./images/Objects/Ring.png",
    "./images/Objects/Road.png",
    "./images/Objects/Roof.png",
    "./images/Objects/Ruler.png",
    "./images/Objects/Scissors.png",
    "./images/Objects/Screw.png",
    "./images/Objects/Screwdriver.png",
    "./images/Objects/Seesaw.png",
    "./images/Objects/Shirt.png",
    "./images/Objects/Shoes.png",
    "./images/Objects/Shopping Cart.png",
    "./images/Objects/Shower.png",
    "./images/Objects/Sidewalk.png",
    "./images/Objects/Sink.png",
    "./images/Objects/Slide.png",
    "./images/Objects/Slippers.png",
    "./images/Objects/Soccer Ball.png",
    "./images/Objects/Socks.png",
    "./images/Objects/Spatula.png",
    "./images/Objects/Sponge.png",
    "./images/Objects/Spoon.png",
    "./images/Objects/Stairs.png",
    "./images/Objects/Stool.png",
    "./images/Objects/Stove.png",
    "./images/Objects/Swing.png",
    "./images/Objects/Table.png",
    "./images/Objects/Tablet.png",
    "./images/Objects/Teddy Bear.png",
    "./images/Objects/Television.png",
    "./images/Objects/Tennis Ball.png",
    "./images/Objects/Tiara.png",
    "./images/Objects/Tire.png",
    "./images/Objects/Tissue Box.png",
    "./images/Objects/Toilet Paper.png",
    "./images/Objects/Toilet.png",
    "./images/Objects/Toothbrush.png",
    "./images/Objects/Toothpaste.png",
    "./images/Objects/Top Hat.png",
    "./images/Objects/Towel.png",
    "./images/Objects/Toys.png",
    "./images/Objects/TV Remote.png",
    "./images/Objects/Underwear.png",
    "./images/Objects/Vase.png",
    "./images/Objects/Volley Ball.png",
    "./images/Objects/Wallet.png",
    "./images/Objects/Water Bottle.png",
    "./images/Objects/Window.png",
    "./images/Objects/Wrench.png"
    ];

    const natureImages = [
    "./images/Nature/Bat.png",
    "./images/Nature/Bear.png",
    "./images/Nature/Bee.png",
    "./images/Nature/Beetle.png",
    "./images/Nature/Bird.png",
    "./images/Nature/Butterfly.png",
    "./images/Nature/Cat.png",
    "./images/Nature/Chameleon.png",
    "./images/Nature/Cheetah.png",
    "./images/Nature/Chicken.png",
    "./images/Nature/Clam.png",
    "./images/Nature/Cow.png",
    "./images/Nature/Crab.png",
    "./images/Nature/Daisy.png",
    "./images/Nature/Deer.png",
    "./images/Nature/Dinosaur.png",
    "./images/Nature/Dog.png",
    "./images/Nature/Duck.png",
    "./images/Nature/Eagle.png",
    "./images/Nature/Elephant.png",
    "./images/Nature/Fish.png",
    "./images/Nature/Flower.png",
    "./images/Nature/Fly.png",
    "./images/Nature/Frog.png",
    "./images/Nature/Goldfish.png",
    "./images/Nature/Goose.png",
    "./images/Nature/Grass.png",
    "./images/Nature/Grasshopper.png",
    "./images/Nature/Hamster.png",
    "./images/Nature/Hawk.png",
    "./images/Nature/Horse.png",
    "./images/Nature/Ladybug.png",
    "./images/Nature/Lamb.png",
    "./images/Nature/Lilacs.png",
    "./images/Nature/Lily Pad.png",
    "./images/Nature/Lily.png",
    "./images/Nature/Lion.png",
    "./images/Nature/Lizard.png",
    "./images/Nature/Lobster.png",
    "./images/Nature/Monkey.png",
    "./images/Nature/Mosquito.png",
    "./images/Nature/Mouse.png",
    "./images/Nature/Octopus.png",
    "./images/Nature/Owl.png",
    "./images/Nature/Penguin.png",
    "./images/Nature/Pig.png",
    "./images/Nature/Rabbit.png",
    "./images/Nature/Rose.png",
    "./images/Nature/Seaweed.png",
    "./images/Nature/Shark.png",
    "./images/Nature/Sheep.png",
    "./images/Nature/Snake.png",
    "./images/Nature/Spider.png",
    "./images/Nature/Squid.png",
    "./images/Nature/Squirrel.png",
    "./images/Nature/Starfish.png",
    "./images/Nature/Sunflower.png",
    "./images/Nature/Tiger.png",
    "./images/Nature/Tornado.png",
    "./images/Nature/Tree.png",
    "./images/Nature/Tulip.png",
    "./images/Nature/Turtle.png",
    "./images/Nature/Whale.png",
    "./images/Nature/Wolf.png"
    ];

    const foodImages = [
    "./images/Food/Almond.png",
    "./images/Food/Apple Juice.png",
    "./images/Food/Apple Sauce.png",
    "./images/Food/Apple.png",
    "./images/Food/Avocado.png",
    "./images/Food/Banana.png",
    "./images/Food/Blackberry.png",
    "./images/Food/Blueberry.png",
    "./images/Food/Bread.png",
    "./images/Food/Brownies.png",
    "./images/Food/Burger.png",
    "./images/Food/Butter.png",
    "./images/Food/Cake.png",
    "./images/Food/Candy.png",
    "./images/Food/Carrot.png",
    "./images/Food/Cashew.png",
    "./images/Food/Celery.png",
    "./images/Food/Cheese.png",
    "./images/Food/Cherry.png",
    "./images/Food/Chicken Nuggets.png",
    "./images/Food/Chicken.png",
    "./images/Food/Chips.png",
    "./images/Food/Chocolate.png",
    "./images/Food/Cookie.png",
    "./images/Food/Cotton Candy.png",
    "./images/Food/Crackers.png",
    "./images/Food/Croissant.png",
    "./images/Food/Corn.png",
    "./images/Food/Cucumber.png",
    "./images/Food/Egg.png",
    "./images/Food/Fish.png",
    "./images/Food/Fries.png",
    "./images/Food/Green Beans.png",
    "./images/Food/Green Pepper.png",
    "./images/Food/Ham.png",
    "./images/Food/Hot Chocolate.png",
    "./images/Food/Hot Dog.png",
    "./images/Food/Ice Cream.png",
    "./images/Food/Jam.png",
    "./images/Food/Jelly.png",
    "./images/Food/Ketchup.png",
    "./images/Food/Lemonade.png",
    "./images/Food/Lettuce.png",
    "./images/Food/Lollipop.png",
    "./images/Food/Macaroni and Cheese.png",
    "./images/Food/Marshmallow.png",
    "./images/Food/Mayonnaise.png",
    "./images/Food/Milk.png",
    "./images/Food/Mustard.png",
    "./images/Food/Olive.png",
    "./images/Food/Onion.png",
    "./images/Food/Orange Juice.png",
    "./images/Food/Orange.png",
    "./images/Food/Pancake.png",
    "./images/Food/Peach.png",
    "./images/Food/Peanut Butter.png",
    "./images/Food/Peanut.png",
    "./images/Food/Pear.png",
    "./images/Food/Peas.png",
    "./images/Food/Pepper.png",
    "./images/Food/Pickle.png",
    "./images/Food/Pizza.png",
    "./images/Food/Plum.png",
    "./images/Food/Popcorn.png",
    "./images/Food/Popsicle.png",
    "./images/Food/Potato.png",
    "./images/Food/Pretzel.png",
    "./images/Food/Pudding.png",
    "./images/Food/Ranch.png",
    "./images/Food/Raspberry.png",
    "./images/Food/Red Pepper.png",
    "./images/Food/Salad.png",
    "./images/Food/Salami.png",
    "./images/Food/Salsa.png",
    "./images/Food/Salt.png",
    "./images/Food/Sandwich.png",
    "./images/Food/Sausage.png",
    "./images/Food/Soda.png",
    "./images/Food/Soup.png",
    "./images/Food/Steak.png",
    "./images/Food/Strawberry.png",
    "./images/Food/Taco.png",
    "./images/Food/Toast.png",
    "./images/Food/Tomato.png",
    "./images/Food/Turkey.png",
    "./images/Food/Waffle.png",
    "./images/Food/Water.png",
    "./images/Food/Watermelon.png",
    "./images/Food/Yellow Pepper.png",
    "./images/Food/Yogurt.png"
    ];

    const placesImages = [
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

    const transportationImages = [
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

    const peopleImages = [
        "./images/People/Aunt.png",
        "./images/People/Boy.png",
        "./images/People/Brother.png",
        "./images/People/Cashier.png",
        "./images/People/Chef.png",
        "./images/People/Cousin.png",
        "./images/People/Crossing Guard.png",
        "./images/People/Dad.png",
        "./images/People/Doctor.png",
        "./images/People/Fire Fighter.png",
        "./images/People/Fisherman.png",
        "./images/People/Friend.png",
        "./images/People/Girl.png",
        "./images/People/Grandma.png",
        "./images/People/Grandpa.png",
        "./images/People/Knight.png",
        "./images/People/Mom.png",
        "./images/People/Nurse.png",
        "./images/People/Police Officer.png",
        "./images/People/President.png",
        "./images/People/Prince.png",
        "./images/People/Princess.png",
        "./images/People/Principal.png",
        "./images/People/Sister.png",
        "./images/People/Soldier.png",
        "./images/People/Teacher.png",
        "./images/People/Uncle.png",
        "./images/People/Wizard.png"
    ];

    const activityImages = [
        "./images/Activities/Bathing.png",
        "./images/Activities/Building.png",
        "./images/Activities/Coloring.png",
        "./images/Activities/Doing Homework.png",
        "./images/Activities/Drawing.png",
        "./images/Activities/Eating.png",
        "./images/Activities/Hiking.png",
        "./images/Activities/Painting.png",
        "./images/Activities/Playing Outside.png",
        "./images/Activities/Playing.png",
        "./images/Activities/Reading.png",
        "./images/Activities/Running.png",
        "./images/Activities/Sitting.png",
        "./images/Activities/Sleeping.png",
        "./images/Activities/Standing.png",
        "./images/Activities/Walking.png",
        "./images/Activities/Watching a Movie.png",
        "./images/Activities/Watching TV.png",
        "./images/Activities/Writing.png"

    ];

    let page = document.title;
    let substringStartPoint, images;

    switch(page) {
        case "Object":
            images = objectImages;
            substringStartPoint = 17;
            break;
        case "Food":
            images = foodImages;
            substringStartPoint = 14;
            break;
        case "Nature":
            images = natureImages;
            substringStartPoint = 16;
            break;
        case "Transportation":
            images = transportationImages;
            substringStartPoint = 24;
            break;
        case "Places":
            images = placesImages;
            substringStartPoint = 16;
            break;
        case "People":
            images = peopleImages;
            substringStartPoint = 16;
            break;
        case "Activities":
            images = activityImages;
            substringStartPoint = 20;
            break;
    }

    let row_marker = 1;
    let column_marker = 1;

    for (i = 0; i < images.length; i++) {
        let picture_button = document.getElementById(images[i].substring(substringStartPoint, images[i].length - 4));

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
