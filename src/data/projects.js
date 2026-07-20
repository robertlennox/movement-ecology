/*
TO ADD ANOTHER PROJECT:
1. Copy the template below and paste below the last project listed.
2. Fill in all of the image/text blocks you want. 
  - Format for date must be YYYY-MM-DD
  - People is a comma separated array (e.g. ["Person One", "Person Two"])
  - Up to 5 image/texts (you can name them anything as long as they match)
  - Follow other projects for require() parts for images/videos
3. Fill the collection with images or video. 
  - Only format supported is jpg, png, and mp4
  - Up to 10 for the collection
4. Delete any unused fields.

TEMPLATE:
    {
        name: "Example",
        date: "2026-01-01",
        people: [""],

        listImage: require('../assets/projects/your-project/outer-image.jpg'),
        bannerImage: require('../assets/projects/your-project/banner-image.jpg'),
        
        image1: require('../assets/projects/your-project/image1.jpg'),
        text1: "text",
        
        image2: require('../assets/projects/your-project/image2.jpg'),
        text2: "text",

        // FOLLOW SAME FORMAT FOR ADDING MORE IMAGE TEXT BLOCKS
        
        collection: [
          require('../assets/projects/your-project/collection3.mp4'),
          require('../assets/projects/your-project/collection1.png'),
          require('../assets/projects/your-project/collection2.jpg'),
          // FOLLOW SAME FORMAT AS ABOVE TO ADD MORE MEDIA
        ],
    },

*/

export const projects = [
    {
        name: "Margaree Example",
        date: "2026-01-01",
        people: ["Boyd Pelley", "Robert Lennox"],

        listImage: require('../assets/projects/margaree-example/margaree-proj1.jpg'),
        bannerImage: require('../assets/projects/margaree-example/margaree-proj1.jpg'),
        
        image1: require('../assets/projects/margaree-example/margaree-proj1.jpg'),
        text1: "Opening paragraph for this project. This block renders with the image on the left side of the screen and this text on the right side.",
        
        image2: require('../assets/projects/margaree-example/margaree-proj2.jpg'),
        text2: "Second block of text. Text and images swap sides each block that gets added. You can add up to 5 blocks and have colelctions up to 10. Supports video and images.",
        
        collection: [
          require('../assets/projects/margaree-example/margaree-collection1.png'),
          require('../assets/projects/margaree-example/margaree-collection2.jpg'),
          require('../assets/projects/margaree-example/margaree-collection3.mp4'),
        ],
    },
]