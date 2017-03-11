Monki.css

Many years ago: You started working with HTML and CSS. You styled your headlines, your content, your sidebar and so on... It was a perfect world.
Now: This CSS file is growing. You haven't enough time to think about the structure. What happens? You add one more line
to your CSS. One more specific selector. Your CSS file has 3000 lines. You're hating your CSS. The css isn't any more maintainable.
Monki is the solution for this problem. Monki is a css framework that handles the css monkey work for you.



How monki does this:
- Decoupling CSS in generic, base, objects, components and specifics

    generic:    This is where monki has his normalize etc. his ground zero styles
    base:       default style of html elements e.g. headlines, links, lists, inputs
    objects:    cosmetic free design pattern. e.g. grid, fonts
    components: reusable components of your application. e.g. button styles, icons, BEM-Blocks, -Elements and -Modifier
    specifics:  Overrides classes. For a/b-testing etc. Things like !important. But: Use them only temporary.
    
- Monki is developer friendly
    
    Monki uses a BEM naming convention and philosophy. That means: The whole UI is separated in blocks, elements and modifier.
    You can use blocks inside blocks but elements only inside a specific block. Read more about BEM: http://getbem.com/introduction/
    
    BEM is nice but it hasn't a really nice readability. That's why monki uses a preprocessor for HTML and CSS.
    Monki has a development and a productive part. 
    In development you're writing your html like this: <button font-size="large">Button</button>. In productive mode it becomes to:
    <button class="font-size--large">Button</button>