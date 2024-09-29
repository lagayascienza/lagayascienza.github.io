const links = document.querySelectorAll('a');
    
    // Iterate over each link and append an image to it
    links.forEach(link => {
      // Create an img element
      const img = document.createElement('img');
      img.src = 'link_icon.png'; // Replace with your image URL
      img.alt = 'Icon'; // Alternative text for the image
      img.style.width = '14px'; // You can set the size of the image here
      img.style.height = '14px'; // Adjust the height as necessary
      img.style.marginLeft = '5px'; // Add some space between the link and the image
      img.style.marginRight = "2px"
      img.style.marginBottom = '-0.25px'
      // Append the image to the link
      link.appendChild(img);

    });


  // Call the function when the page is loaded
  window.onload = addImageToLinks;