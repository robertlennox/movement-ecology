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
        name: "The northern advantage of fish in Nunatsiavut",
        date: "2026-01-01",
        people: ["Emma Lunzmann-Cooke", "Robert Lennox"],

        listImage: require('../assets/projects/nunatsiavut1.jpg'),
        bannerImage: require('../assets/projects/nunatsiavut6.jpg'),
        
        image1: require('../assets/projects/nunatsiavut2.jpg'),
        text1: "This work is occurring on the lands of the Labrador Inuit, which is co-managed according to the Labrador Inuit Land Claims Agreement. We are working with partners from the Torngat Secretariat, Nunatsiavut Government, Ocans North, and Atlantic salmon federation to better understand fish populations in freshwater and marine habitats of Nunatsiavut.",
        
        image2: require('../assets/projects/nunatsiavut5.jpg'),
        text2: "Second block of text. Text and images swap sides each block that gets added. You can add up to 5 blocks and have colelctions up to 10. Supports video and images.",
        
        collection: [
          require('../assets/projects/nunatsiavut5.jpg'),
          require('../assets/projects/nunatsiavut5.jpg'),
          require('../assets/projects/nunatsiavut5.jpg'),
        ],
    },

         {
        name: "Impacts of lampricides on non-target Great Lakes species",
        date: "2026-01-01",
        people: ["Hugo Flavio", "Aiden Moore", "Melina Gobel"],

        listImage: require('../assets/projects/nunatsiavut1.jpg'),
        bannerImage: require('../assets/projects/margaree-proj1.jpg'),
        
        image1: require('../assets/projects/margaree-proj1.jpg'),
        text1: "The lampricide 3-trifluoromethyl-4-nitrophenol (TFM) is widely used in the tributaries of the Laurentian Great Lakes to suppress invasive populations of sea lamprey (Petromyzon marinus). While particularly effective at killing larval sea lamprey, the TFM’s mode of action impacts all organisms that rely on mitochondria for aerobic metabolism. As such, some native species may have difficulty handling the concentrations that must be used to ensure successful control of sea lamprey. Earlier work has shown that exposure to TFM leads to stepwise increases in oxygen consumption in larval sea lamprey, and may have the potential to predict lethal concentrations without requiring traditional toxicity testing. In this project, we aim to prove that this stepwise relationship between TFM concentration and oxygen consumption also holds true for four non-target species: young-of-the-year lake sturgeon (Acipenser fulvescens), rainbow trout (Oncorhynchus mykiss), smallmouth bass (Micropterus dolomieu), and the bivalve giant floater (Pyganodon grandis).",
        
        image2: require('../assets/projects/margaree-proj2.jpg'),
        text2: "Second block of text. Text and images swap sides each block that gets added. You can add up to 5 blocks and have colelctions up to 10. Supports video and images.",
        
        collection: [
          require('../assets/projects/margaree-collection1.png'),
          require('../assets/projects/margaree-collection2.jpg'),
          require('../assets/projects/margaree-collection3.mp4'),
        ],
    },

     {
        name: "Understanding Atlantic whitefish physiology and development to inform future stocking and conservation",
        date: "2026-01-01",
        people: ["Hugo Flavio", "Ethan McCarthy", "Ben Wetherell", "Robert Lennox"],

        listImage: require('../assets/projects/nunatsiavut1.jpg'),
        bannerImage: require('../assets/projects/margaree-proj1.jpg'),
        
        image1: require('../assets/projects/margaree-proj1.jpg'),
        text1: "Atlantic whitefish (Coregonus huntsmani) is Nova Scotia’s most imperilled fish species, and is certainly one of the most threatened species in Canada. A key priority in the Recovery Strategy for Atlantic whitefish is to achieve stability in the current population. Broad strategies for recovery include 1) conserving, protecting and managing the species and its habitat and 2) addressing knowledge gaps relating to the species and its habitat. The current state of knowledge about the basic biology, ecology, and physiology of Atlantic whitefish is limited, as is knowledge about how best to address current and emergent threats to survival.  Knowledge of the optimal conditions for the deposition and development of eggs, as well as the growth of larvae will be extremely valuable to future recovery and management decisions. This project will combine in-situ and laboratory approaches to vastly expand our understanding of the factors influencing Atlantic whitefish egg and larvae success, therefore advancing both the conservation of natural nursery habitats and improving the supportive breeding program.",
        
        image2: require('../assets/projects/margaree-proj2.jpg'),
        text2: "Second block of text. Text and images swap sides each block that gets added. You can add up to 5 blocks and have colelctions up to 10. Supports video and images.",
        
        collection: [
          require('../assets/projects/margaree-collection1.png'),
          require('../assets/projects/margaree-collection2.jpg'),
          require('../assets/projects/margaree-collection3.mp4'),
        ],
    },

    {
        name: "Atlantic halibut tracking project",
        date: "2026-01-01",
        people: ["Jena Edwards", "Robert Lennox"],

        listImage: require('../assets/projects/nunatsiavut1.jpg'),
        bannerImage: require('../assets/projects/margaree-proj1.jpg'),
        
        image1: require('../assets/projects/margaree-proj1.jpg'),
        text1: "Opening paragraph for this project. This block renders with the image on the left side of the screen and this text on the right side.",
        
        image2: require('../assets/projects/margaree-proj2.jpg'),
        text2: "Second block of text. Text and images swap sides each block that gets added. You can add up to 5 blocks and have colelctions up to 10. Supports video and images.",
        
        collection: [
          require('../assets/projects/margaree-collection1.png'),
          require('../assets/projects/margaree-collection2.jpg'),
          require('../assets/projects/margaree-collection3.mp4'),
        ],
    },

    {
        name: "Apoqnmatulti'k: We help each other",
        date: "2026-01-01",
        people: ["Levi Denny", "Marin Marsala", "Caitlin Bate", "Robert Lennox"],

        listImage: require('../assets/projects/debert1.jpg'),
        bannerImage: require('../assets/projects/debert2.jpg'),
        
        image1: require('../assets/projects/debert3.jpg'),
        text1: "",
        
        image2: require('../assets/projects/debert2.jpg'),
        text2: "",
        
        collection: [
          require('../assets/projects/debert1.jpg'),
          require('../assets/projects/debert2.jpg'),
          require('../assets/projects/debert3.jpg'),
        ],
    },


    {
        name: "Turning the tide for Endangered Inner Bay of Fundy Atlantic salmon",
        date: "2026-01-01",
        people: ["Imogen Bellinger", "Robert Lennox"],

        listImage: require('../assets/projects/debert1.jpg'),
        bannerImage: require('../assets/projects/debert2.jpg'),
        
        image1: require('../assets/projects/debert3.jpg'),
        text1: "",
        
        image2: require('../assets/projects/debert2.jpg'),
        text2: "",
        
        collection: [
          require('../assets/projects/debert1.jpg'),
          require('../assets/projects/debert2.jpg'),
          require('../assets/projects/debert3.jpg'),
        ],
    },

       {
        name: "Atlantic mackerel tracking program",
        date: "2026-01-01",
        people: ["Ava Sergio", "Morgan Piczak", "Robert Lennox"],

        listImage: require('../assets/projects/mack1.jpg'),
        bannerImage: require('../assets/projects/mack2.jpg'),
        
        image1: require('../assets/projects/mack3.jpg'),
        text1: "Atlantic mackerel is one of the iconic species of Atlantic Canada. For many people, mackerel is quintessential to life on the shores of Nova Scotia and mackerel are used for food by people around the coast and for bait by lobster and tuna fishers. The mackerel fishery was closed in 2022 and since then we have been working with DFO to use acoustic telemetry to better understand the movements of this important species in waters of Atlantic Canada.",
        
        image2: require('../assets/projects/mack2.jpg'),
        text2: "",
        
        collection: [
          require('../assets/projects/mack2.jpg'),
          require('../assets/projects/mack3.jpg'),
          require('../assets/projects/mack1.jpg'),
        ],
    },

        {
        name: "Nova Scotia brook trout population ecology",
        date: "2026-01-01",
        people: ["Anders Hoffmann", "Jena Edwards", "Emma Lunzmann-Cooke", "Robert Lennox"],

        listImage: require('../assets/projects/brook.jpg'),
        bannerImage: require('../assets/projects/brook.jpg'),
        
        image1: require('../assets/projects/brook.jpg'),
        text1: "",
        
        image2: require('../assets/projects/brook.jpg'),
        text2: "",
        
        collection: [
          require('../assets/projects/brook.jpg'),
          require('../assets/projects/brook.jpg'),
          require('../assets/projects/brook.jpg'),
        ],
    },

           {
        name: "Atlantic salmon in the Cape Breton Highlands",
        date: "2026-01-01",
        people: ["Natalie Koopman", "Josh Roland", "Oscar Notman-Grobler", "Morgan Piczak", "Emma Lunzmann-Cooke", "Robert Lennox"],

        listImage: require('../assets/projects/cb2.JPG'),
        bannerImage: require('../assets/projects/cb7.jpg'),
        
        image1: require('../assets/projects/cb5.JPG'),
        text1: "",
        
        image2: require('../assets/projects/cb6.JPG'),
        text2: "",
        
        collection: [
          require('../assets/projects/cb.JPG'),
          require('../assets/projects/cb2.JPG'),
          require('../assets/projects/cb3.JPG'),
        ],
    },
]



