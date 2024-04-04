const mediaQuery = window.matchMedia('(max-width: 800px');
 
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    resetBigZIndexes();
    smallerScreenTurnPage();
  } else {
  	resetSmallZIndexes();
  	biggerScreenTurnPage();
  }
}
 
// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);