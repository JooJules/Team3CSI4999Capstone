function instruction(selected) {
    if (selected == 'hello')
    {
        texttoshow = "Hello!";
    }
    else if (selected == 'goodbye')
    {
        texttoshow = "Goodbye!";
    }
    else if (selected == 'thank you')
    {
        texttoshow = "Thank You!";
    }
    else if (selected == 'your welcome')
    {
        texttoshow = "Your Welcome!";
    }
    else if (selected == 'sorry')
    {
        texttoshow = "Sorry";
    }
    else if (selected == 'excuse me')
    {
        texttoshow = "Excuse Me";
    }
    else if (selected == 'good morning')
    {
        texttoshow = "Good Morning!";
    }
    else if (selected == 'good afternoon')
    {
        texttoshow = "Good Afternoon!";
    }
    else if (selected == 'where')
    {
        texttoshow = "Where is___?";
    }
    document.getElementById("text-box").innerHTML = texttoshow;
}
