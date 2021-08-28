### Screenshot

![](./screenshot.jpg)

### What I learned

///////////////////////////////////////////
5 Ways to center:

-1--
display:flex;
justify-content: center;
align-items: center; // parent
align-self: center; // child
--
-2-
margin: auto 0;
--
-3-
text-align: center; // parent
display: inline-block; // child
--
-4-
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
--
-5-
display: grid;
place-items: center;

///////////////////////////////////////////
Background positionning \*2
--
background-position: top -50% left 12%, bottom -75% right 15%;

///////////////////////////////////////////
Center & floating:
--
.attribution {
height: 100%; // body height 100vh
width: inherit; // body width 100%
display: grid;
position: absolute;
place-items: center;
top: 30%; // floating 30% bot
}
--
display: flow-root;
--

background-image: url("images/bg-pattern-top.svg"), url("images/bg-pattern-bottom.svg");

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
