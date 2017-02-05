$(document).foundation();

(function(){
  var app = angular.module('work', [ ]);

  app.controller('WorkController', function(){
    this.projects = details;
  });

  var details = [
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
      name: 'Kapost, Notification Email',
      description: 'UX Research and Design, UI Design, Wireframes, Email and In App Notification Flows; Tools: Sketch, Invision, Illustrator',
      image: 'images/kp-notifications.png',
      class: 'kp-notifications',
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
    },
    {
      name: 'Kapost, App Icons',
      description: 'Design and Illustration; Tools: Adobe Illustrator',
      image: 'images/kp-icons-more.png',
      class: 'kp-icons-more',
      link: '#',
    },
    {
      name: 'Bb, Gradebook',
      description: 'UI/UX Design, Wireframes, Application Flows, User Testing, Prototypes, Front-End Development',
      image: 'images/my-gradebooks.png',
      class: 'my-gradebooks',
      link: '#',
    },
    {
      name: 'Blackboard Learner',
      description: 'Digital Illustration, Layout, Design; Tools: Adobe Illustrator',
      image: 'images/bb-learner.png',
      class: 'bb-learner',
      link: '#',
    },
    {
      name: 'Blackboard Ultra',
      description: 'Collaborated on UI Design, Wireframes, Hi-Fidelity Prototypes, Front-End Development',
      image: 'images/bb-ultra.png',
      class: 'bb-ultra',
      link: '#',
    }
  ];
})();
