# Portal Development Log

https://grantishdesigns.me/portal/ 

### Credit for Images:
"under Construction" image: Photo by Fernando Arcos from Pexels: https://www.pexels.com/photo/under-construction-signage-on-laptop-keyboard-211122/
Github logo is property of github and was retrieved from the following page: https://github.com/logos 


### Dev log 9/18/23
Today was finishing up the final changes to the portal. The functionality that I need is there, and the links to pages are working. I will update the modules as they become available. For now, they have an "under construction" sign on them, so people know that they are not working. I figured it would be easier thia way.

### Dev log 9/15/23
Some smaller changes today. Added a module that will take you to my weekly assignments from ATLS 2200, so that I can find them easily when I need them in recitation. Some other small edits are just adding some background pictures to some of the modules so it's not just a bunch of empty boxes.

### Dev Log 9/14/23
Started working on the mobile portion of the site. Simple changes needed to be made to fit all the modules into their respective places. The flex had to be shifted in order to fit everything into a cohesive column, but overall, the CSS was pretty close to a copy and paste.

### Dev Log 9/12/23
The main focus today was to get all div blocks to have an image background that actively resizes with the page. The current images are just placeholder, and will updated as I have pictures of the projects that the modules link to. I also started adding some links to the modules, that will take you to various places. The only workng link at the moment takes you to my github repo for my live site. Some smaller details and visual stuff was changed as I no longer needed those attributes in 'development mode' and can solidify them into the build. I changed some border colors, as well as the heading and footers to be more cohesive with the rest of the build.

### Dev Log 9/7/23
Today was spent working an getting the layout to look the way I want it to. That is, with modules taking up certain fractions of pages, and making it easier to add new modules as I have more content to put into the page. Box sizing seems to be working for the desktop version of the site, but still has a few bugs when the screen gets smaller. This will be fixed with proper mobile development later. I was able to add the titles that I want and give them a banner, that should hold across the module, even with an image present. Images will come later though too.

### Dev Log 9/5/23
Scrapped the hexagon idea for the portal. it was too complex and led to some things that would have been very annoying to fix. It looked really cool, and ill keep it as a side project for later. I need this to actually be workable though. I probably could have made it work, but it would have taken too long. The new idea is based off of modules, and I want it to have a sort of dark theme, with maybe some star-esque background for the site.

### Dev Log 9/2/23
I have gotten the hexagons to work, and they have click/hover functionality. It looks really cool on desktop, and I was even able to add some simple animations to it. The words on the cells are not looking correct though. I was able to fix it by rotating them with a hexagons, and then coloring them the same color as un-interacted version of the shape. 
I am running into some issues when it comes to the potential mobile version of the site. Getting the block elements to line up the way I want them is not really working out for me. They may just have to be a vertical line of things.

### Dev Log 8/31/23
I have come up with a new idea for the build of the portal. I want it to look like cells almost. They will have hexagon shape, and when you click on them, they will take you to the new pages. I really like geometry so I think this will be cool. I'm not entirely sure how I am going to shape a div to look like a hexagon, but I can figure that part out with some google searching. I think this will be really cool, not sure how it will come together, but Ill try to get a build going and we'll see!

### Dev Log 8/29/23
I am running into an issue when it comes to this method. I can build the site just fine, but adding text content will be quite messy, and the JS file will get really large, really fast. I don't think this generative approach will be the best way to get, but it was good practice with altering html using JS. I am gonna come up with some ideas and see if anything seems more plausible.

### Dev Log 8/26/23
I want to make this portal generative. That is, I want it to be fully automated with JS, and build the html and CSS through it's JS script. I have figured out how to target specific element, create new elements, add attributes to existing and generated elements, and even add some flexbox functionality. It feels so good to get my hands dirty again.