
const categories = [
    {
      title: 'Hospital',
      images: ["https://thumbs.dreamstime.com/z/modern-hospital-building-close-up-view-59693685.jpg", "https://i.pinimg.com/originals/eb/2f/95/eb2f955cc1ba643c0d3a9e68543a9aa7.jpg", "https://sdk-image2.s3.ap-south-1.amazonaws.com/small_Sarvodaya_Building_New_Image_final_8d5554a560.jpg", "https://media.gettyimages.com/id/173799627/photo/study-of-architectural-form-05.jpg?s=612x612&w=gi&k=20&c=Hmpwj_jsuDdp2IjnuR6fgAw9l06R1HjPzh3Pf5aMEKc="],
      description: 'Find nearby hospitals and emergency care centers',
      explore: 'Explore Hospitals'
    }, 
    {
        title: 'Pharmacy',
        images: ["https://media.istockphoto.com/id/1299847050/photo/pharmacy-with-a-people-wearing-a-mask-during-pandemic-covid-19.jpg?s=612x612&w=0&k=20&c=GxBR1rUN4D8ujE_tlo78n6EU4J6rjc6h5EifRIvps8Y=", "https://img.freepik.com/premium-photo/pharmacy-storefront-exterior_1234738-320429.jpg", "https://media.istockphoto.com/id/1326842116/photo/pharmacy-on-nissi-avenue-in-ayia-napa-cyprus.jpg?s=612x612&w=0&k=20&c=XdyRyodnhqfb2Q1UBqoXlIXgtbrsOea72DOAeULRgQ4=", "https://media.istockphoto.com/id/1299847050/photo/pharmacy-with-a-people-wearing-a-mask-during-pandemic-covid-19.jpg?s=612x612&w=0&k=20&c=GxBR1rUN4D8ujE_tlo78n6EU4J6rjc6h5EifRIvps8Y="],
        description: 'Local pharmacies and medical stores'
      },
      {
        title: 'Garage',
        images: ["https://www.garageliving.com/hs-fs/hubfs/Imported_Blog_Media/minimalist-garage-example.jpg?width=1600&height=768&name=minimalist-garage-example.jpg", "https://images.homify.com/v1444311900/p/photo/image/984046/garage.jpg", "https://media.architecturaldigest.com/photos/629148b7b0fb4a921c0a94e7/3:2/w_1680,h_1120,c_limit/ManCaveGarage.jpeg", "https://www.garageliving.com/hubfs/Homepage%20Slider%20Images/2024_04_15_GLF_Website_Slider_Options36.jpg"],
        description: 'Auto repair and maintenance services'
      },
      {
        title: 'FoodShop',
        images: ["https://i.pinimg.com/736x/27/2f/6b/272f6b29382c98e2cdf976337499762c.jpg", "https://c8.alamy.com/comp/ET20F0/jumboking-vada-pav-express-indian-fast-food-veg-restaurant-princess-ET20F0.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIrTJircl697FaQdGmaq_xggKp18Yjc42vw&s", "https://static.toiimg.com/thumb/msid-112726543,width-400,resizemode-4/112726543.jpg"],
        description: 'Popular shopping destinations and markets'
      },
      {
        title: 'Hotel',
        images: ["https://media.istockphoto.com/id/472899538/photo/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab.jpg?s=612x612&w=0&k=20&c=rz-WSe_6gKfkID6EL9yxCdN_UIMkXUBsr67884j-X9o=", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/620719916.webp?k=616cefe723433fd501f4fe89c7f415ce49822b10d769c7a725f8e35b39be66af&o=", "https://i.ytimg.com/vi/YaTV7vB1P-k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBj6FqyJDqfIPjG-qR-w0J6zsPUhQ", "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="],
        description: 'Comfortable stays for every budget'
      },
      {
        title: 'Restaurant',
        images: ["https://www.milagrocorp.com/wp-content/uploads/2021/11/Maintaining-Your-Restaurants-Exterior.webp", "https://images.nanawall.com/blog/2023-06/Benefits_of_Outdoor_Seating_Blog-1.jpg?auto=format&sharp=20&fit=max"," https://i.pinimg.com/736x/4d/af/aa/4dafaab409cd3a3f43beca2c60f7fb66.jpg", "https://www.milagrocorp.com/wp-content/uploads/2021/11/Maintaining-Your-Restaurants-Exterior.webp", "https://images.nanawall.com/blog/2023-06/Benefits_of_Outdoor_Seating_Blog-1.jpg?auto=format&sharp=20&fit=max", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dYIgcrRO5C5KcFlhvJl6QPckupkFSQq1FA&s"],
        description: 'Best dining experiences in town'
      },
      {
        title: 'Attractions',
        images: ["https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186669/top-10-tourist-attractions-in-india-taj-mahal-building/top-10-tourist-attractions-in-india-taj-mahal-building.jpg", "https://www.holidify.com/images/bgImages/DELHI.jpg", "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-new-york-statue-of-liberty.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeTLrYQuHq_c5ZEUdE4w0v6bGrKkF-dyddQ&s"],
        description: 'Must-visit tourist spots and landmarks'
      },
      {
        title: 'Events',
        images: ["https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg", "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg", "https://media.licdn.com/dms/image/v2/C4D1BAQFAC3o2eHS_vA/company-background_10000/company-background_10000/0/1583354651497/gl_events_cover?e=2147483647&v=beta&t=vYbDxX-8NtFbXXygSIhuJHveB3fzVMLW9BEQJWOf-yU", "https://cdn.prod.website-files.com/61f29c609f84a86e418fbcfb/63ecdf6e6df724eab1f0e8ca_20230215T0132-25bece5c-5ab8-4c33-98c7-60ad2668054b.webp", "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg", "https://media.licdn.com/dms/image/v2/C4D1BAQFAC3o2eHS_vA/company-background_10000/company-background_10000/0/1583354651497/gl_events_cover?e=2147483647&v=beta&t=vYbDxX-8NtFbXXygSIhuJHveB3fzVMLW9BEQJWOf-yU"],
        description: 'Upcoming local events and festivals'
      },
      {
        title: 'Sports',
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKq0EeZGH2DCjRYLxbwytpcjdLejbVPLfDQQ&s", "https://www.vedantu.com/seo/content-images/27a1bd37-5e70-4e9d-990c-f1a1a06997f1.jpg"," https://www.pewresearch.org/wp-content/uploads/2024/03/SR_24.03.11_sports_feature-jpg.webp?w=640", "https://cdn5.parksmedia.wdprapps.disney.com/media/espnwwos/home/WWoS_Hero_375x279_Multi.jpg"],
        description: 'Sports facilities and activities'
      }  
  ];
  export default categories;