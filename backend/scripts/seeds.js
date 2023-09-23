
const User = require('../models/User'); // Import your User model
const Item = require('../models/Item'); // Import your Item model
const Comment = require('../models/Comment'); // Import your Comment model

async function seedDatabase() {
  try {
 
        for (let i = 0; i < 100; i++) {
            const randomUsername = `user${i}`;
            const randomEmail = `user${i}@example.com`;
            const randomBio = `Bio for User ${i}`;
            const randomImage = `profile-image-${i}.jpg`; 
            const randomRole = 'user'; 
            const randomFavorites = [];
            const randomFollowing = []; 
            const randomPassword = `password-${i}`; 
      
            const user = new User({
              username: randomUsername,
              email: randomEmail,
              bio: randomBio,
              image: randomImage,
              role: randomRole,
              favorites: randomFavorites,
              following: randomFollowing,
            });
      
            user.setPassword(randomPassword); 
      
            await user.save();
          }

    // Seed 100 items
    for (let i = 0; i < 100; i++) {
        const randomTitle = `Item Title ${i}`;
        const randomDescription = `Description for Item ${i}`;
        const randomImage = `item-image-${i}.jpg`; // Replace with the image URL
        const randomTags = ['tag1', 'tag2', 'tag3']; // Replace with actual tags if needed
  
        const item = new Item({
          slug: '', // The slug will be generated automatically in the model's pre-validation hook
          title: randomTitle,
          description: randomDescription,
          image: randomImage,
          tagList: randomTags,
          seller: 'replace-with-seller-user-id', // Replace with the actual seller's user ID
        });
  
        await item.save();
      }

    // Seed 100 comments
    for (let i = 0; i < 100; i++) {
        const randomBody = `Comment body ${i}`;
        const randomSellerId = 'replace-with-seller-user-id'; // Replace with the actual seller's user ID
        const randomItemId = 'replace-with-item-id'; // Replace with the actual item's ID
  
        const comment = new Comment({
          body: randomBody,
          seller: randomSellerId,
          item: randomItemId,
        });
  
        await comment.save();
      }

    console.log('Seeding completed.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
