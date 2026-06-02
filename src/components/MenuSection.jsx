import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';

const menuGroups = [
  {
    title: 'Starters',
    description: 'Crispy, spicy, and perfectly shareable bites.',
    items: [
      { id: 'starter-1', name: 'Masala Fries', price: 105, isVeg: true, desc: 'Seasoned fries with chili flakes and herb salt.' },
      { id: 'starter-2', name: 'Paneer Tikka Roll', price: 150, isVeg: true, desc: 'Grilled paneer wrap with mint chutney and onions.' },
      { id: 'starter-3', name: 'Chicken Popcorn', price: 170, isVeg: false, desc: 'Crispy chicken bites tossed in spicy garlic rub.' },
    ],
  },
  {
    title: 'Main Course',
    description: 'Bold plates that keep the city buzzing.',
    items: [
      { id: 'main-1', name: 'Neon Glaze Burger', price: 285, isVeg: false, desc: 'Double patty burger with cheese, slaw, and secret sauce.' },
      { id: 'main-2', name: 'Spicy Paneer Sandwich', price: 160, isVeg: true, desc: 'Toasted sandwich with spicy paneer, peppers and greens.' },
      { id: 'main-3', name: 'Chili Garlic Noodles', price: 170, isVeg: true, desc: 'Stir-fried noodles with crunchy veggies and hot garlic oil.' },
    ],
  },
  {
    title: 'Beverages',
    description: 'Chilled, creamy, and energizing sips.',
    items: [
      { id: 'bev-1', name: 'Midnight Mango Shake', price: 220, isVeg: true, desc: 'Creamy mango shake topped with toasted almonds.' },
      { id: 'bev-2', name: 'Blue Ocean Mocktail', price: 150, isVeg: true, desc: 'Refreshing citrus mocktail with blueberry and mint.' },
      { id: 'bev-3', name: 'Cold Coffee Blast', price: 180, isVeg: true, desc: 'Rich cold coffee with chocolate foam and almond crunch.' },
    ],
  },
  {
    title: 'Desserts',
    description: 'Sweet endings with a playful twist.',
    items: [
      { id: 'dessert-1', name: 'Glow Berry Sundae', price: 195, isVeg: true, desc: 'Berry sundae with cream, compote, and sparkling sugar.' },
      { id: 'dessert-2', name: 'Chocolate Lava Cake', price: 210, isVeg: true, desc: 'Warm molten cake with a silky chocolate center.' },
      { id: 'dessert-3', name: 'Royal Falooda', price: 205, isVeg: true, desc: 'Falooda layered with vermicelli, jelly, and kulfi.' },
    ],
  },
];

export default function MenuSection({ cart, onUpdateCart }) {
  const getItemQty = (itemId) => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddOne = (item) => {
    onUpdateCart(item, 1);
  };

  const handleRemoveOne = (item) => {
    onUpdateCart(item, -1);
  };

  return (
    <section id="digital-menu" className="py-20 bg-[#141414] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#171717] to-transparent pointer-events-none" />
      <div className="absolute left-10 top-20 w-72 h-72 rounded-full bg-secondary/10 filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-primary-container/10 filter blur-3xl opacity-25 pointer-events-none" />

      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary mb-4 font-bold text-[12px] border border-secondary/20 uppercase tracking-widest">
            Digital Menu
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            A clean, category-first menu experience.
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Skip noisy imagery and focus on elegant typography, spacing, and menu structure. Choose by category and enjoy a sharper ordering flow.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {menuGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-[2rem] glass-card border border-white/10 p-8 shadow-2xl overflow-hidden"
              style={{ background: 'rgba(24, 24, 24, 0.78)' }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">{group.title}</h3>
                  <p className="text-on-surface-variant text-sm mt-2 max-w-xl font-light leading-relaxed">
                    {group.description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.24em] font-black text-on-surface-variant border border-white/10">
                  {group.items.length} items
                </div>
              </div>

              <div className="space-y-5">
                {group.items.map((item) => {
                  const itemQty = getItemQty(item.id);
                  return (
                    <div key={item.id} className="rounded-3xl border border-white/5 p-5 bg-[#111111]/80 transition-shadow hover:shadow-[0_0_35px_rgba(198,243,17,0.12)]">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-lg font-bold text-white">{item.name}</span>
                            <span className={`text-[10px] uppercase tracking-[0.3em] font-black px-2 py-1 rounded-full ${item.isVeg ? 'bg-[#00e676]/15 text-[#b6ffb3]' : 'bg-[#ff4d4d]/15 text-[#ffb3b3]'}`}>
                              {item.isVeg ? 'VEG' : 'NON-VEG'}
                            </span>
                          </div>
                          <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-3">
                          <span className="text-base font-black text-primary-container">₹{item.price}</span>
                          {itemQty === 0 ? (
                            <button
                              onClick={() => handleAddOne(item)}
                              className="inline-flex items-center gap-2 rounded-full bg-primary-container/95 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-on-primary-container hover:opacity-95 transition-opacity"
                            >
                              <ShoppingCart className="w-4 h-4" />
                              Add
                            </button>
                          ) : (
                            <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-3 py-2">
                              <button
                                onClick={() => handleRemoveOne(item)}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm font-black"
                              >
                                -
                              </button>
                              <span className="text-sm font-black">{itemQty}</span>
                              <button
                                onClick={() => handleAddOne(item)}
                                className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-sm font-black"
                              >
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
