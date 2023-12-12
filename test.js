// JavaScript for fetching and updating data
    // You can use APIs or mock data for demonstration
    // For simplicity, this example uses placeholder text
    document.addEventListener("DOMContentLoaded", function() {
      // Fetch data for Facebook
      const facebookWidget = document.querySelector('.dashboard').children[0];
      facebookWidget.querySelector('p').textContent = "Data for Facebook will be displayed here...";

      // Fetch data for Twitter
      const twitterWidget = document.querySelector('.dashboard').children[1];
      twitterWidget.querySelector('p').textContent = "Data for Twitter will be displayed here...";

      // Fetch data for Instagram
      const instagramWidget = document.querySelector('.dashboard').children[2];
      instagramWidget.querySelector('p').textContent = "Data for Instagram will be displayed here...";
    });
