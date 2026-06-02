// Menu data generated from provided catalog
// Categories are created from the distinct "Type of Dish" values

// Use Unsplash image queries so image URLs can be used directly in <img> tags.
const googleImg = (name) => `https://source.unsplash.com/600x400/?${encodeURIComponent(name)}`;

export const menuCategories = [
  { id: 'ice-creams', name: 'Sundae Bowl', icon: '🍨' },
  { id: 'ice-cream-jelly', name: 'Ice Cream with Jelly', icon: '🍧' },
  { id: 'cake-with-ice-cream', name: 'Cake with Ice Cream', icon: '🍰' },
  { id: 'tall-cups', name: 'Tall Cups', icon: '🥤' },
  { id: 'waffle-cone', name: 'Waffle Cone', icon: '🧇' },
  { id: 'thick-shake', name: 'Thick Shake', icon: '🥛' },
  { id: 'spl-thick-shakes', name: 'Spl Thick Shakes', icon: '🧋' },
  { id: 'mocktails', name: 'Mocktails', icon: '🍹' },
  { id: 'pasta-maggie', name: 'Pasta / Maggie', icon: '🍝' },
  { id: 'sandwich-veg', name: 'Sandwich (Veg)', icon: '🥪' },
  { id: 'burgers-veg', name: 'Burgers (Veg)', icon: '🍔' },
  { id: 'appetizers', name: 'Appetizers', icon: '🍟' },
  { id: 'pizza-veg', name: 'Pizza (Veg)', icon: '🍕' },
  { id: 'starters-non-veg', name: 'Starters (Non-Veg)', icon: '🍗' },
  { id: 'sandwich-non-veg', name: 'Sandwich (Non-Veg)', icon: '🥪' },
  { id: 'burgers-non-veg', name: 'Burgers (Non-Veg)', icon: '🍔' },
  { id: 'momos', name: 'Momos', icon: '🥟' },
  { id: 'pizza-non-veg', name: 'Pizza (Non-Veg)', icon: '🍕' },
];

export const menuItems = [
  // Sundae Bowl (mapped to 'ice-creams' category id so initial tab shows items)
  { id: 'sb-1', name: 'Plain Choco Sundae', price: 180, category: 'ice-creams', image: googleImg('Plain Choco Sundae'), description: '' , isVeg: true},
  { id: 'sb-2', name: 'Chocolate Sundae', price: 215, category: 'ice-creams', image: googleImg('Chocolate Sundae'), description: '' , isVeg: true},
  { id: 'sb-3', name: 'Strawberry Sundae', price: 215, category: 'ice-creams', image: googleImg('Strawberry Sundae'), description: '' , isVeg: true},
  { id: 'sb-4', name: 'Mango Sundae', price: 225, category: 'ice-creams', image: googleImg('Mango Sundae'), description: '' , isVeg: true},
  { id: 'sb-5', name: 'Blueberry Sundae', price: 215, category: 'ice-creams', image: googleImg('Blueberry Sundae'), description: '' , isVeg: true},
  { id: 'sb-6', name: 'Mix Fruit Sundae', price: 235, category: 'ice-creams', image: googleImg('Mix Fruit Sundae'), description: '' , isVeg: true},
  { id: 'sb-7', name: 'Fuit-N-Nut Sundae', price: 235, category: 'ice-creams', image: googleImg('Fruit-N-Nut Sundae'), description: '' , isVeg: true},
  { id: 'sb-8', name: 'Mix Fruit Caramel', price: 225, category: 'ice-creams', image: googleImg('Mix Fruit Caramel Sundae'), description: '' , isVeg: true},
  { id: 'sb-9', name: 'Wallnut Cherry Sundae', price: 220, category: 'ice-creams', image: googleImg('Walnut Cherry Sundae'), description: '' , isVeg: true},
  { id: 'sb-10', name: 'Lichee Sundae', price: 260, category: 'ice-creams', image: googleImg('Lichee Sundae'), description: '' , isVeg: true},
  { id: 'sb-11', name: 'Maha Sundae', price: 245, category: 'ice-creams', image: googleImg('Maha Sundae'), description: '' , isVeg: true},
  { id: 'sb-12', name: 'Black Current Almond Sundae', price: 230, category: 'ice-creams', image: googleImg('Black Current Almond Sundae'), description: '' , isVeg: true},
  { id: 'sb-13', name: 'Butter Scotch Chip Trip', price: 230, category: 'ice-creams', image: googleImg('Butter Scotch Chip Sundae'), description: '' , isVeg: true},
  { id: 'sb-14', name: 'Nutty Caramel', price: 230, category: 'ice-creams', image: googleImg('Nutty Caramel Sundae'), description: '' , isVeg: true},
  { id: 'sb-15', name: 'Nutty Mania', price: 230, category: 'ice-creams', image: googleImg('Nutty Mania Sundae'), description: '' , isVeg: true},
  { id: 'sb-16', name: 'Crunch Munch Sundae', price: 245, category: 'ice-creams', image: googleImg('Crunch Munch Sundae'), description: '' , isVeg: true},
  { id: 'sb-17', name: 'Butter Scotch Mania', price: 230, category: 'ice-creams', image: googleImg('Butter Scotch Mania Sundae'), description: '' , isVeg: true},
  { id: 'sb-18', name: 'Butter Scotch Banana Caramel', price: 215, category: 'ice-creams', image: googleImg('Butter Scotch Banana Caramel Sundae'), description: '' , isVeg: true},
  { id: 'sb-19', name: 'Straw Mango Tango', price: 225, category: 'ice-creams', image: googleImg('Straw Mango Tango Sundae'), description: '' , isVeg: true},
  { id: 'sb-20', name: 'Fig&Honey Sundae', price: 230, category: 'ice-creams', image: googleImg('Fig and Honey Sundae'), description: '' , isVeg: true},
  { id: 'sb-21', name: 'Pista Choco Nuts Sundae', price: 240, category: 'ice-creams', image: googleImg('Pista Choco Nuts Sundae'), description: '' , isVeg: true},
  { id: 'sb-22', name: 'Kaju Badam Sundae', price: 240, category: 'ice-creams', image: googleImg('Kaju Badam Sundae'), description: '' , isVeg: true},
  { id: 'sb-23', name: 'Kaju Anjeer Sundae', price: 230, category: 'ice-creams', image: googleImg('Kaju Anjeer Sundae'), description: '' , isVeg: true},
  { id: 'sb-24', name: 'Rainbow Sundae', price: 220, category: 'ice-creams', image: googleImg('Rainbow Sundae'), description: '' , isVeg: true},
  { id: 'sb-25', name: 'Spl.Dry Fruit Sundae', price: 250, category: 'ice-creams', image: googleImg('Special Dry Fruit Sundae'), description: '' , isVeg: true},
  { id: 'sb-26', name: 'Titanic', price: 260, category: 'ice-creams', image: googleImg('Titanic Sundae'), description: '' , isVeg: true},
  { id: 'sb-27', name: 'Banana Split', price: 255, category: 'ice-creams', image: googleImg('Banana Split'), description: '' , isVeg: true},
  { id: 'sb-28', name: 'Arabian Sundae', price: 225, category: 'ice-creams', image: googleImg('Arabian Sundae'), description: '' , isVeg: true},

  // Ice Cream with Jelly
  { id: 'j-1', name: 'Spl.Strawberry Jellows', price: 210, category: 'ice-cream-jelly', image: googleImg('Spl Strawberry Jellows Ice Cream'), description: '' , isVeg: true},
  { id: 'j-2', name: 'Strawberry Jellows Wonder', price: 220, category: 'ice-cream-jelly', image: googleImg('Strawberry Jellows Wonder'), description: '' , isVeg: true},
  { id: 'j-3', name: 'Orange Jellows', price: 210, category: 'ice-cream-jelly', image: googleImg('Orange Jellows Ice Cream'), description: '' , isVeg: true},
  { id: 'j-4', name: 'Orange Jellows Wonder', price: 220, category: 'ice-cream-jelly', image: googleImg('Orange Jellows Wonder'), description: '' , isVeg: true},
  { id: 'j-5', name: 'Pineapple Jellows', price: 210, category: 'ice-cream-jelly', image: googleImg('Pineapple Jellows Ice Cream'), description: '' , isVeg: true},
  { id: 'j-6', name: 'Pineapple Jellows Wonder', price: 220, category: 'ice-cream-jelly', image: googleImg('Pineapple Jellows Wonder'), description: '' , isVeg: true},
  { id: 'j-7', name: 'Lichee Jellows Wonder', price: 235, category: 'ice-cream-jelly', image: googleImg('Lichee Jellows Wonder'), description: '' , isVeg: true},
  { id: 'j-8', name: 'Raspberry Jellows', price: 210, category: 'ice-cream-jelly', image: googleImg('Raspberry Jellows Ice Cream'), description: '' , isVeg: true},
  { id: 'j-9', name: 'Double Jellows', price: 210, category: 'ice-cream-jelly', image: googleImg('Double Jellows Ice Cream'), description: '' , isVeg: true},

  // Cake with Ice Cream
  { id: 'c-1', name: 'Cake Fantasy (Any Flavour)', price: 215, category: 'cake-with-ice-cream', image: googleImg('Cake Fantasy any flavour with ice cream'), description: '' , isVeg: true},
  { id: 'c-2', name: 'Chocolate Dream', price: 225, category: 'cake-with-ice-cream', image: googleImg('Chocolate Dream cake with ice cream'), description: '' , isVeg: true},
  { id: 'c-3', name: 'Butterscotch Dream', price: 225, category: 'cake-with-ice-cream', image: googleImg('Butterscotch Dream cake with ice cream'), description: '' , isVeg: true},
  { id: 'c-4', name: 'Honey Dream', price: 225, category: 'cake-with-ice-cream', image: googleImg('Honey Dream cake with ice cream'), description: '' , isVeg: true},
  { id: 'c-5', name: 'Choco Tuffle Fantasy', price: 235, category: 'cake-with-ice-cream', image: googleImg('Choco Truffle Fantasy cake with ice cream'), description: '' , isVeg: true},
  { id: 'c-6', name: 'Choco Cherry Passion', price: 235, category: 'cake-with-ice-cream', image: googleImg('Choco Cherry Passion cake with ice cream'), description: '' , isVeg: true},
  { id: 'c-7', name: 'Black Forest Dream', price: 235, category: 'cake-with-ice-cream', image: googleImg('Black Forest Dream cake with ice cream'), description: '' , isVeg: true},
  { id: 'c-8', name: 'Rainbow Casatta', price: 230, category: 'cake-with-ice-cream', image: googleImg('Rainbow Cassata Cake with ice cream'), description: '' , isVeg: true},
  { id: 'c-9', name: 'Rich Brownie', price: 235, category: 'cake-with-ice-cream', image: googleImg('Rich Brownie with ice cream'), description: '' , isVeg: true},

  // Tall Cups
  { id: 'tc-1', name: 'Fruit Punch', price: 195, category: 'tall-cups', image: googleImg('Fruit Punch tall cup'), description: '' , isVeg: true},
  { id: 'tc-2', name: 'Lichee Punch', price: 215, category: 'tall-cups', image: googleImg('Lichee Punch tall cup'), description: '' , isVeg: true},
  { id: 'tc-3', name: 'Mango Punch', price: 195, category: 'tall-cups', image: googleImg('Mango Punch tall cup'), description: '' , isVeg: true},
  { id: 'tc-4', name: 'Tall Beauty', price: 235, category: 'tall-cups', image: googleImg('Tall Beauty tall cup'), description: '' , isVeg: true},
  { id: 'tc-5', name: 'American Beauty', price: 235, category: 'tall-cups', image: googleImg('American Beauty tall cup'), description: '' , isVeg: true},
  { id: 'tc-6', name: 'Spl. Faluda', price: 240, category: 'tall-cups', image: googleImg('Special Faluda tall cup'), description: '' , isVeg: true},

  // Waffle Cone
  { id: 'wc-1', name: 'Vanilla Waffle Cone', price: 110, category: 'waffle-cone', image: googleImg('Vanilla Waffle Cone'), description: '' , isVeg: true},
  { id: 'wc-2', name: 'Chocolate Waffle Cone', price: 125, category: 'waffle-cone', image: googleImg('Chocolate Waffle Cone'), description: '' , isVeg: true},
  { id: 'wc-3', name: 'Strawberry Waffle Cone', price: 165, category: 'waffle-cone', image: googleImg('Strawberry Waffle Cone'), description: '' , isVeg: true},
  { id: 'wc-4', name: 'Choco Dip Waffle', price: 130, category: 'waffle-cone', image: googleImg('Choco Dip Waffle Cone'), description: '' , isVeg: true},
  { id: 'wc-5', name: 'Mango Waffle', price: 165, category: 'waffle-cone', image: googleImg('Mango Waffle Cone'), description: '' , isVeg: true},
  { id: 'wc-6', name: 'Nutty Crunch Waffle', price: 165, category: 'waffle-cone', image: googleImg('Nutty Crunch Waffle'), description: '' , isVeg: true},
  { id: 'wc-7', name: 'Nut Butterscotch Waffle', price: 165, category: 'waffle-cone', image: googleImg('Nut Butterscotch Waffle'), description: '' , isVeg: true},
  { id: 'wc-8', name: 'Lichee Passion Waffle', price: 195, category: 'waffle-cone', image: googleImg('Lichee Passion Waffle'), description: '' , isVeg: true},
  { id: 'wc-9', name: 'Pista Waffle', price: 175, category: 'waffle-cone', image: googleImg('Pista Waffle'), description: '' , isVeg: true},
  { id: 'wc-10', name: 'Black Current Waffle', price: 165, category: 'waffle-cone', image: googleImg('Black Current Waffle'), description: '' , isVeg: true},
  { id: 'wc-11', name: 'Butter Scotch Caramel Waffle', price: 165, category: 'waffle-cone', image: googleImg('Butter Scotch Caramel Waffle'), description: '' , isVeg: true},
  { id: 'wc-12', name: 'Fruit Delight Waffle', price: 170, category: 'waffle-cone', image: googleImg('Fruit Delight Waffle'), description: '' , isVeg: true},
  { id: 'wc-13', name: 'Badam Waffle', price: 175, category: 'waffle-cone', image: googleImg('Badam Waffle'), description: '' , isVeg: true},
  { id: 'wc-14', name: 'Choco Caramel Waffle', price: 160, category: 'waffle-cone', image: googleImg('Choco Caramel Waffle'), description: '' , isVeg: true},

  // Thick Shake
  { id: 'ts-1', name: 'Vanilla Shake', price: 140, category: 'thick-shake', image: googleImg('Vanilla Thick Shake'), description: '' , isVeg: true},
  { id: 'ts-2', name: 'Mango Shake', price: 160, category: 'thick-shake', image: googleImg('Mango Thick Shake'), description: '' , isVeg: true},
  { id: 'ts-3', name: 'Spl. Strawberry Shake', price: 160, category: 'thick-shake', image: googleImg('Special Strawberry Shake'), description: '' , isVeg: true},
  { id: 'ts-4', name: 'Spl. Lichee Shake', price: 190, category: 'thick-shake', image: googleImg('Special Lichee Shake'), description: '' , isVeg: true},
  { id: 'ts-5', name: 'Chocolate Shake', price: 160, category: 'thick-shake', image: googleImg('Chocolate Thick Shake'), description: '' , isVeg: true},
  { id: 'ts-6', name: 'Almond Shake', price: 190, category: 'thick-shake', image: googleImg('Almond Shake'), description: '' , isVeg: true},
  { id: 'ts-7', name: 'Spl. Black Current Shake', price: 190, category: 'thick-shake', image: googleImg('Special Black Current Shake'), description: '' , isVeg: true},
  { id: 'ts-8', name: 'Coffee Shake', price: 170, category: 'thick-shake', image: googleImg('Coffee Shake'), description: '' , isVeg: true},
  { id: 'ts-9', name: 'Spl. Cherry Shake', price: 170, category: 'thick-shake', image: googleImg('Special Cherry Shake'), description: '' , isVeg: true},
  { id: 'ts-10', name: 'Kaju Angeer Shake', price: 185, category: 'thick-shake', image: googleImg('Kaju Anjeer Shake'), description: '' , isVeg: true},
  { id: 'ts-11', name: 'Badam, Pista, Anjer Shake', price: 200, category: 'thick-shake', image: googleImg('Badam Pista Anjeer Shake'), description: '' , isVeg: true},
  { id: 'ts-12', name: 'Spl. Choco Shake', price: 180, category: 'thick-shake', image: googleImg('Special Choco Shake'), description: '' , isVeg: true},
  { id: 'ts-13', name: 'Pista Shake', price: 190, category: 'thick-shake', image: googleImg('Pista Shake'), description: '' , isVeg: true},
  { id: 'ts-14', name: 'Banana Shake', price: 160, category: 'thick-shake', image: googleImg('Banana Shake'), description: '' , isVeg: true},
  { id: 'ts-15', name: 'Nut Butterscotch Shake', price: 185, category: 'thick-shake', image: googleImg('Nut Butterscotch Shake'), description: '' , isVeg: true},
  { id: 'ts-16', name: 'Raspberry Shake', price: 160, category: 'thick-shake', image: googleImg('Raspberry Shake'), description: '' , isVeg: true},
  { id: 'ts-17', name: 'Date Nut Shake', price: 190, category: 'thick-shake', image: googleImg('Date Nut Shake'), description: '' , isVeg: true},
  { id: 'ts-18', name: 'Blueberry Shake', price: 180, category: 'thick-shake', image: googleImg('Blueberry Shake'), description: '' , isVeg: true},

  // Spl Thick Shakes
  { id: 'sts-1', name: 'Rasamalai Shake', price: 190, category: 'spl-thick-shakes', image: googleImg('Rasamalai Shake'), description: '' , isVeg: true},
  { id: 'sts-2', name: 'Cold Coffee Shake', price: 190, category: 'spl-thick-shakes', image: googleImg('Cold Coffee Shake'), description: '' , isVeg: true},
  { id: 'sts-3', name: 'Oreo Shake', price: 190, category: 'spl-thick-shakes', image: googleImg('Oreo Shake'), description: '' , isVeg: true},
  { id: 'sts-4', name: 'Kitkat Shake', price: 190, category: 'spl-thick-shakes', image: googleImg('Kitkat Shake'), description: '' , isVeg: true},
  { id: 'sts-5', name: 'Peanut Butter Shake', price: 190, category: 'spl-thick-shakes', image: googleImg('Peanut Butter Shake'), description: '' , isVeg: true},

  // Mocktails
  { id: 'm-1', name: 'Blue Ocean', price: 150, category: 'mocktails', image: googleImg('Blue Ocean Mocktail'), description: '' , isVeg: true},
  { id: 'm-2', name: 'Mint Mojito', price: 150, category: 'mocktails', image: googleImg('Mint Mojito'), description: '' , isVeg: true},
  { id: 'm-3', name: 'Green Apple Mojito', price: 150, category: 'mocktails', image: googleImg('Green Apple Mojito'), description: '' , isVeg: true},
  { id: 'm-4', name: 'Water Melon Mojito', price: 150, category: 'mocktails', image: googleImg('Watermelon Mojito'), description: '' , isVeg: true},
  { id: 'm-5', name: 'Ice Tea (Lemon)', price: 150, category: 'mocktails', image: googleImg('Iced Lemon Tea'), description: '' , isVeg: true},

  // Pasta / Maggie
  { id: 'pm-1', name: 'White Pasta', price: 150, category: 'pasta-maggie', image: googleImg('White Pasta'), description: '' , isVeg: true},
  { id: 'pm-2', name: 'Deshi Creamy Pasta', price: 150, category: 'pasta-maggie', image: googleImg('Deshi Creamy Pasta'), description: '' , isVeg: true},
  { id: 'pm-3', name: 'Red Pasta (Spicy)', price: 150, category: 'pasta-maggie', image: googleImg('Red Spicy Pasta'), description: '' , isVeg: true},
  { id: 'pm-4', name: 'Classic Maggie', price: 100, category: 'pasta-maggie', image: googleImg('Classic Maggi'), description: '' , isVeg: true},
  { id: 'pm-5', name: 'Peri Peri Maggie', price: 100, category: 'pasta-maggie', image: googleImg('Peri Peri Maggi'), description: '' , isVeg: true},
  { id: 'pm-6', name: 'Chilly Maggie', price: 100, category: 'pasta-maggie', image: googleImg('Chilly Maggi'), description: '' , isVeg: true},

  // Sandwich (Veg)
  { id: 'sv-1', name: 'Panner Tikka Sandwich', price: 130, category: 'sandwich-veg', image: googleImg('Paneer Tikka Sandwich'), description: '' , isVeg: true},
  { id: 'sv-2', name: 'Grill Veg Sandwich', price: 130, category: 'sandwich-veg', image: googleImg('Grill Veg Sandwich'), description: '' , isVeg: true},
  { id: 'sv-3', name: 'Mushroom Sandwich', price: 130, category: 'sandwich-veg', image: googleImg('Mushroom Sandwich'), description: '' , isVeg: true},
  { id: 'sv-4', name: 'Chilly Cheese Toast', price: 120, category: 'sandwich-veg', image: googleImg('Chilly Cheese Toast'), description: '' , isVeg: true},
  { id: 'sv-5', name: 'Corn Sandwich', price: 130, category: 'sandwich-veg', image: googleImg('Corn Sandwich'), description: '' , isVeg: true},
  { id: 'sv-6', name: 'Cheese Garlic Toast', price: 120, category: 'sandwich-veg', image: googleImg('Cheese Garlic Toast'), description: '' , isVeg: true},
  { id: 'sv-7', name: 'English Sandwich', price: 150, category: 'sandwich-veg', image: googleImg('English Sandwich'), description: '' , isVeg: true},

  // Burgers (Veg)
  { id: 'bv-1', name: 'Veg Burger', price: 125, category: 'burgers-veg', image: googleImg('Veg Burger'), description: '' , isVeg: true},
  { id: 'bv-2', name: 'Aloo Tikki Burger', price: 125, category: 'burgers-veg', image: googleImg('Aloo Tikki Burger'), description: '' , isVeg: true},
  { id: 'bv-3', name: 'Veg Cheese Burger', price: 145, category: 'burgers-veg', image: googleImg('Veg Cheese Burger'), description: '' , isVeg: true},
  { id: 'bv-4', name: 'Panner Burger', price: 150, category: 'burgers-veg', image: googleImg('Paneer Burger'), description: '' , isVeg: true},
  { id: 'bv-5', name: 'Spicy Veg Burger', price: 130, category: 'burgers-veg', image: googleImg('Spicy Veg Burger'), description: '' , isVeg: true},

  // Appetizers
  { id: 'ap-1', name: 'French Fries', price: 90, category: 'appetizers', image: googleImg('French Fries'), description: '' , isVeg: true},
  { id: 'ap-2', name: 'Masala Fries', price: 105, category: 'appetizers', image: googleImg('Masala Fries'), description: '' , isVeg: true},
  { id: 'ap-3', name: 'Loaded Saucee Fries', price: 100, category: 'appetizers', image: googleImg('Loaded Sauce Fries'), description: '' , isVeg: true},
  { id: 'ap-4', name: 'Peri Peri Fries', price: 110, category: 'appetizers', image: googleImg('Peri Peri Fries'), description: '' , isVeg: true},
  { id: 'ap-5', name: 'Aloo Tikki', price: 110, category: 'appetizers', image: googleImg('Aloo Tikki'), description: '' , isVeg: true},
  { id: 'ap-6', name: 'Paneer Roll', price: 100, category: 'appetizers', image: googleImg('Paneer Roll'), description: '' , isVeg: true},
  { id: 'ap-7', name: 'Cheese Corn Nugest', price: 110, category: 'appetizers', image: googleImg('Cheese Corn Nuggets'), description: '' , isVeg: true},
  { id: 'ap-8', name: 'Spring Rool', price: 100, category: 'appetizers', image: googleImg('Spring Roll'), description: '' , isVeg: true},
  { id: 'ap-9', name: 'Smileys', price: 100, category: 'appetizers', image: googleImg('Smileys Potato'), description: '' , isVeg: true},
  { id: 'ap-10', name: 'Veg Roll', price: 100, category: 'appetizers', image: googleImg('Veg Roll'), description: '' , isVeg: true},
  { id: 'ap-11', name: 'Cheese Balls', price: 110, category: 'appetizers', image: googleImg('Cheese Balls'), description: '' , isVeg: true},
  { id: 'ap-12', name: 'Twin Tower Pottoto', price: 105, category: 'appetizers', image: googleImg('Twin Tower Potato'), description: '' , isVeg: true},

  // Pizza (Veg)
  { id: 'pz-1', name: 'Plain Cheese Pizza', price: 155, category: 'pizza-veg', image: googleImg('Plain Cheese Pizza'), description: '' , isVeg: true},
  { id: 'pz-2', name: 'Spicy Veg Pizza', price: 185, category: 'pizza-veg', image: googleImg('Spicy Veg Pizza'), description: '' , isVeg: true},
  { id: 'pz-3', name: 'Veg Pizza', price: 175, category: 'pizza-veg', image: googleImg('Veg Pizza'), description: '' , isVeg: true},
  { id: 'pz-4', name: 'Mushroom Pizza', price: 215, category: 'pizza-veg', image: googleImg('Mushroom Pizza'), description: '' , isVeg: true},
  { id: 'pz-5', name: 'Panner Pizza', price: 215, category: 'pizza-veg', image: googleImg('Paneer Pizza'), description: '' , isVeg: true},
  { id: 'pz-6', name: 'Lips Spl Pizza', price: 235, category: 'pizza-veg', image: googleImg('Special Pizza'), description: '' , isVeg: true},
  { id: 'pz-7', name: 'Corn Feast Pizza', price: 215, category: 'pizza-veg', image: googleImg('Corn Feast Pizza'), description: '' , isVeg: true},

  // Starters Non-Veg
  { id: 'snv-1', name: 'Popcorn Chicken', price: 180.00, category: 'starters-non-veg', image: googleImg('Popcorn Chicken'), description: '' , isVeg: false},
  { id: 'snv-2', name: 'Loaded Chicken Fries', price: 220.00, category: 'starters-non-veg', image: googleImg('Loaded Chicken Fries'), description: '' , isVeg: false},
  { id: 'snv-3', name: 'Spicy Wings', price: 170.00, category: 'starters-non-veg', image: googleImg('Spicy Chicken Wings'), description: '' , isVeg: false},
  { id: 'snv-4', name: 'Fried Chick Drumstick', price: 190.00, category: 'starters-non-veg', image: googleImg('Fried Chicken Drumstick'), description: '' , isVeg: false},
  { id: 'snv-5', name: 'Chicken Cheese Balls', price: 130.00, category: 'starters-non-veg', image: googleImg('Chicken Cheese Balls'), description: '' , isVeg: false},
  { id: 'snv-6', name: 'Chick Shek Kaban', price: 200.00, category: 'starters-non-veg', image: googleImg('Chicken Seekh Kebab'), description: '' , isVeg: false},
  { id: 'snv-7', name: 'Crispy Fried Prawns', price: 220.00, category: 'starters-non-veg', image: googleImg('Crispy Fried Prawns'), description: '' , isVeg: false},
  { id: 'snv-8', name: 'Crispy Fish Fillet', price: 220.00, category: 'starters-non-veg', image: googleImg('Crispy Fish Fillet'), description: '' , isVeg: false},
  { id: 'snv-9', name: 'Finger Fish', price: 150.00, category: 'starters-non-veg', image: googleImg('Finger Fish'), description: '' , isVeg: false},
  { id: 'snv-10', name: 'Crab Lolypop', price: 170.00, category: 'starters-non-veg', image: googleImg('Crab Lollipop'), description: '' , isVeg: false},

  // Sandwich Non-Veg
  { id: 'snv-11', name: 'Club Chicken', price: 180.00, category: 'sandwich-non-veg', image: googleImg('Club Chicken Sandwich'), description: '' , isVeg: false},
  { id: 'snv-12', name: 'Grilled Chicken', price: 200.00, category: 'sandwich-non-veg', image: googleImg('Grilled Chicken Sandwich'), description: '' , isVeg: false},
  { id: 'snv-13', name: 'Chicken Tikka Sandwich', price: 200.00, category: 'sandwich-non-veg', image: googleImg('Chicken Tikka Sandwich'), description: '' , isVeg: false},
  { id: 'snv-14', name: 'Cheesy Chicken Sandwich', price: 220.00, category: 'sandwich-non-veg', image: googleImg('Cheesy Chicken Sandwich'), description: '' , isVeg: false},

  // Burgers Non-Veg
  { id: 'bnv-1', name: 'Double Egg', price: 150.00, category: 'burgers-non-veg', image: googleImg('Double Egg Burger'), description: '' , isVeg: false},
  { id: 'bnv-2', name: 'Crisp Chicken', price: 200.00, category: 'burgers-non-veg', image: googleImg('Crisp Chicken Burger'), description: '' , isVeg: false},
  { id: 'bnv-3', name: 'Fish Burger', price: 200.00, category: 'burgers-non-veg', image: googleImg('Fish Burger'), description: '' , isVeg: false},
  { id: 'bnv-4', name: 'Double Deck', price: 250.00, category: 'burgers-non-veg', image: googleImg('Double Deck Burger'), description: '' , isVeg: false},
  { id: 'bnv-5', name: 'Roasted Chicken', price: 200.00, category: 'burgers-non-veg', image: googleImg('Roasted Chicken Burger'), description: '' , isVeg: false},
  { id: 'bnv-6', name: 'Pan Grilled Chicken', price: 200.00, category: 'burgers-non-veg', image: googleImg('Pan Grilled Chicken Burger'), description: '' , isVeg: false},
  { id: 'bnv-7', name: 'Korean Sweet Chilly', price: 220.00, category: 'burgers-non-veg', image: googleImg('Korean Sweet Chilly Burger'), description: '' , isVeg: false},
  { id: 'bnv-8', name: 'Korean Hot Chilly', price: 220.00, category: 'burgers-non-veg', image: googleImg('Korean Hot Chilly Burger'), description: '' , isVeg: false},
  { id: 'bnv-9', name: 'Mongolian Hot Pepper', price: 220.00, category: 'burgers-non-veg', image: googleImg('Mongolian Hot Pepper Burger'), description: '' , isVeg: false},
  { id: 'bnv-10', name: 'Prawn', price: 240.00, category: 'burgers-non-veg', image: googleImg('Prawn Burger'), description: '' , isVeg: false},
  { id: 'bnv-11', name: 'Crispy Prawn', price: 240.00, category: 'burgers-non-veg', image: googleImg('Crispy Prawn Burger'), description: '' , isVeg: false},

  // Momos
  { id: 'mm-1', name: 'Chicken Momos', price: 150.00, category: 'momos', image: googleImg('Chicken Momos'), description: '' , isVeg: false},
  { id: 'mm-2', name: 'Cheese Chicken Momos', price: 170.00, category: 'momos', image: googleImg('Cheese Chicken Momos'), description: '' , isVeg: false},
  { id: 'mm-3', name: 'Pan Tossed Momos', price: 160.00, category: 'momos', image: googleImg('Pan Tossed Momos'), description: '' , isVeg: false},
  { id: 'mm-4', name: 'Schezwan Chicken Momos', price: 160.00, category: 'momos', image: googleImg('Schezwan Chicken Momos'), description: '' , isVeg: false},
  { id: 'mm-5', name: 'Hot N Sweet Momos', price: 180.00, category: 'momos', image: googleImg('Hot and Sweet Momos'), description: '' , isVeg: false},
  { id: 'mm-6', name: 'Peri Peri Chicken Momos', price: 170.00, category: 'momos', image: googleImg('Peri Peri Chicken Momos'), description: '' , isVeg: false},

  // Pizza Non-Veg
  { id: 'pnv-1', name: 'Stuffed Chicken', price: 240.00, category: 'pizza-non-veg', image: googleImg('Stuffed Chicken Pizza'), description: '' , isVeg: false},
  { id: 'pnv-2', name: 'Stuffed Chicken Tikka', price: 250.00, category: 'pizza-non-veg', image: googleImg('Stuffed Chicken Tikka Pizza'), description: '' , isVeg: false},
  { id: 'pnv-3', name: 'Stuffed Korean Hot Chicken', price: 250.00, category: 'pizza-non-veg', image: googleImg('Stuffed Korean Hot Chicken Pizza'), description: '' , isVeg: false},
  { id: 'pnv-4', name: 'Stuffed BBQ Chicken', price: 250.00, category: 'pizza-non-veg', image: googleImg('Stuffed BBQ Chicken Pizza'), description: '' , isVeg: false},
  { id: 'pnv-5', name: 'Stuffed Peri Peri Chicken', price: 250.00, category: 'pizza-non-veg', image: googleImg('Stuffed Peri Peri Chicken Pizza'), description: '' , isVeg: false},
  { id: 'pnv-6', name: 'Stuffed Prawn', price: 240.00, category: 'pizza-non-veg', image: googleImg('Stuffed Prawn Pizza'), description: '' , isVeg: false},
  { id: 'pnv-7', name: 'Stuffed Prawn Tikka', price: 250.00, category: 'pizza-non-veg', image: googleImg('Stuffed Prawn Tikka Pizza'), description: '' , isVeg: false},
  { id: 'pnv-8', name: 'Stuffed Korean Hot Prawn', price: 250.00, category: 'pizza-non-veg', image: googleImg('Stuffed Korean Hot Prawn Pizza'), description: '' , isVeg: false},
  { id: 'pnv-9', name: 'Stuffed BBQ Prawn', price: 250.00, category: 'pizza-non-veg', image: googleImg('Stuffed BBQ Prawn Pizza'), description: '' , isVeg: false},
  { id: 'pnv-10', name: 'Stuffed Peri Peri Prawn', price: 250.00, category: 'pizza-non-veg', image: googleImg('Stuffed Peri Peri Prawn Pizza'), description: '' , isVeg: false},
];

// Note: Image links currently point to Google Image search results for each dish.
// If you prefer direct image URLs, I can fetch and save them into `public/assets/` and update these fields.
