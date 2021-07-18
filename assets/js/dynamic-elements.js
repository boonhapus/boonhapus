function toggleActiveOnSibling (event) {
    // Implements a cLickable carousel of elements.
    //
    // We're using the add/remove .active class trick here to toggle
    // visibility (read: "display: [inline -> none];") of a particular
    // element, and then make visible it's closest sibling, looping back
    // around if we find ourselves at the end of the relatives chain.
    event.preventDefault();

    var thisToRotate = $(event.target).closest('.to-rotate')

    thisToRotate.removeClass('active');
    
    if ( thisToRotate.is(':last-child') ) {
        thisToRotate.siblings('.to-rotate').first().addClass('active');
    } else {
        thisToRotate.next().addClass('active');
    }
}

function replaceEsportsHours () {
  // At the time of writing this function, I had roughly 18,500 hours
  // totaled across accounts, git commit history estimates, and
  // client-billed time.
  //
  // That equates to roughly 4hrs/day of time devoted to esports. We're
  // just going to slope that into a linear equation.. I figured 10yrs+
  // of history is good enough indication. :~)
  const myEsportsEpoch = new Date('2009-04-24');
  const today = new Date();
  const avgDailyHoursDevoted = 4.15;
  
  var diffMs = new Date(today - myEsportsEpoch);
  var diffDays = diffMs / 1000 / 60 / 60 / 24;
  var totalHours = Math.round(diffDays * avgDailyHoursDevoted);

  $('#hours-estimate').attr('data-purecounter-end', totalHours);
}

function replaceProgrammingYears () {
  // I began programming sometime in my Sophomore year of college,
  // actually for the purpose of extending a home automation platform.
  // At that time it was all written in python 2.7, and so I began
  // learning it in order to create a prettier GUI. World's come a long
  // way since then!
  const myProgrammingEpoch = new Date('2012-06-01');
  const today = new Date();

  var diffMs = new Date(today - myProgrammingEpoch);
  var diffYears = diffMs / 1000 / 60 / 60 / 24 / 365;
  var pretty = Math.ceil(diffYears);

  $('#years-programming').attr('data-purecounter-end', pretty);
}

function replaceRetirementYears () {
  // Not that I necessarily follow the --RE movement of FIRE, but I do
  // have plans to be retireable by 45. That's what this date signfies.
  const fireEndgame = new Date('2036-10-28');
  const today = new Date();

  var diffMs = new Date(fireEndgame - today);
  var diffYears = diffMs / 1000 / 60 / 60 / 24 / 365;
  var pretty = Math.round(diffYears);

  $('#fire-endgame').attr('data-purecounter-end', pretty);
}


(function() {
  // Home Page
  $('#rotator span').mousedown(toggleActiveOnSibling);

  // About Page
  replaceEsportsHours();
  replaceProgrammingYears();
  replaceRetirementYears();
})();
