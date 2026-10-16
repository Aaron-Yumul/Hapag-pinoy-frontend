// SAMPLE DETAILS - replace these with the real restaurant information.
// Opening hours live in src/data/schedule.js.
export const restaurantInfo = {
  name: 'HapagPinoy',
  address: '123 Sample Street, Sample Barangay, Sample City, Philippines',
  phone: '+63 900 000 0000',
  email: 'hello@hapagpinoy.example',
  // Add real URLs here later (e.g. 'https://facebook.com/yourpage'). Empty ones are not shown.
  socialLinks: [
    { label: 'Facebook', url: '' },
    { label: 'Instagram', url: '' },
  ],
  // Replace these with your own dining-area photos. If a photo cannot load, a placeholder is shown.
  spacePhotos: [
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=75',
      alt: 'Restaurant dining room with wooden tables and warm lighting',
      caption: 'Main dining room',
      art: 'main',
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=75',
      alt: 'Cozy restaurant seating area with pendant lights',
      caption: 'Cozy corner seating',
      art: 'coffee',
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=75',
      alt: 'Restaurant tables set for dinner service',
      caption: 'Tables set for dinner',
      art: 'pasta',
    },
  ],
}
