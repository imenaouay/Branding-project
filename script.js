fetch('https://api.icons8.com/api/iconsets/v5/search?term=home&platform=ios')
  .then(response => response.json())
  .then(data => {
      console.log(data); // Inspect the API response
  });

  