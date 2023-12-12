<!DOCTYPE html>
<html>

<head>
  <title>Social Media Dashboard</title>
  <style>
    /* Inline CSS for styling */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .dashboard {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
    }

    .widget {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
      margin: 10px;
    }

    .widget h2 {
      margin-bottom: 10px;
    }

    .widget p {
      color: #666;
    }
  </style>
</head>

<body>
  <div class="dashboard">
    <div class="widget">
      <h2>Facebook</h2>
      <p>Metrics and data here...</p>
    </div>
    <div class="widget">
      <h2>Twitter</h2>
      <p>Metrics and data here...</p>
    </div>
    <div class="widget">
      <h2>Instagram</h2>
      <p>Metrics and data here...</p>
    </div>
  </div>

  <script>
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
  </script>
</body>

</html>
