# sarahill.github.io
The portfolio site of Sara Hill, Product Designer & Illustrator.

I’m a Denver based product designer working on Pivotal Tracker. Before that, I lead design at
Kapost and worked on realizing their design system. I like identifying patterns, drinking a
Colorado beer, and tackling a trail run.

## built with Tachyons
http://tachyons.io/

## local development
1. cd into your projects root folder

2. Start the app
  - This will run browser sync so your browser reloads when making updates.
  `npm start`
  
## new set-up
1. cd into your projects root folder

2. Install Node

3. Install Browsersync
  `npm install -g browser-sync`

4. Run Browsersync
  - The files specified may be different for you.
  `browser-sync start --server --files "css/*.css"`

  - If you are already running a local server
  `browser-sync start --proxy "myproject.dev" --files "css/*.css"`
