window.onload = function () {
    const images = [
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

    let row_marker = 1;
    let column_marker = 1;

    for (i = 0; i < images.length; i++) {
        let picture_button = document.getElementById(images[i].substring(14, images[i].length - 4));
        
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