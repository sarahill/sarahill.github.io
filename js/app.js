$(document).foundation();

(function(){
  var app = angular.module('work', [ ]);

  app.controller('WorkController', function(){
    this.projects = details;
  });

  var details = [
    {
      name: 'Pivotal Tracker, Story Activity',
      description: 'Research and Design; Tools: Sketch, InVision',
      image: 'images/pt-story-activity.png',
      class: 'pt-story-activity',
      link: 'pt-story-activity.html',
    },
    {
      name: 'Pivotal Tracker, Dashboard',
      description: 'Research and Design; Tools: Sketch, InVision',
      image: 'images/pt-dashboard.png',
      class: 'pt-dashboard',
      link: 'pt-dashboard.html',
    },
    {
      name: 'Pivotal Tracker, Tippy',
      description: 'Design and Illustration; Tools: Sketch, Illustrator',
      image: 'images/pt-tippy.png',
      class: 'pt-tippy',
      link: 'pt-tippy.html',
    },
    {
      name: 'Kapost, Gallery App',
      description: 'UX Research and Design, UI Design, Wireframes, Application Flows, Prototypes, HTML and SCSS; Tools: Sketch, Invision, Illustrator, Atom, Git',
      image: 'images/kp-gallery.png',
      class: 'kp-gallery',
      link: 'kp-gallery.html',
    },
    {
      name: 'Kapost, App Styleguide',
      description: 'Design, Layout; Tools: Sketch',
      image: 'images/kp-styleguide.png',
      class: 'kp-styleguide',
      link: '#',
    },
    {
      name: 'Kapost, Campaign Details',
      description: 'UX Research and Design, UI Design, Wireframes, Application Flows, HTML and SCSS; Tools: Sketch, Invision, Illustrator, Atom, Git',
      image: 'images/my-gradebooks.png',
      class: 'kp-campaign',
      link: '#',
    },
    {
      name: 'Kapost, Icons',
      description: 'Design and Illustration; Tools: Adobe Illustrator',
      image: 'images/kp-icons.png',
      class: 'kp-icons',
      link: '#',
    },
    {
      name: 'Kapost, In Boulder',
      description: 'Illustration; Tools: Adobe Illustrator and Photoshop',
      image: 'images/kp-flatirons.png',
      class: 'kp-flatirons',
      link: '#',
    }
  ];
})();
