document.addEventListener('DOMContentLoaded', function() {
    const tweetContainer = document.querySelector('.tweet-container');
    const tweets = document.querySelectorAll('.twitter-tweet');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const tweetWidth = tweets[0].offsetWidth;
    let currentTweetIndex = 0;
  
    function updateButtons() {
      prevButton.disabled = currentTweetIndex <= 0;
      nextButton.disabled = currentTweetIndex >= tweets.length - 1;
    }
  
    function scrollToTweet(index) {
      currentTweetIndex = index;
      const scrollLeft = currentTweetIndex * tweetWidth;
      tweetContainer.style.transform = `translateX(-${scrollLeft}px)`;
      updateButtons();
    }
  
    function scrollToNextTweet() {
      if (currentTweetIndex < tweets.length - 1) {
        scrollToTweet(currentTweetIndex + 1);
      }
    }
  
    function scrollToPreviousTweet() {
      if (currentTweetIndex > 0) {
        scrollToTweet(currentTweetIndex - 1);
      }
    }
  
    prevButton.addEventListener('click', scrollToPreviousTweet);
    nextButton.addEventListener('click', scrollToNextTweet);
  
    updateButtons();
  });