type MenuItem = {
  name: string;
  description: string;
  price: string;
};

const mezze: MenuItem[] = [
  { name: 'Hummus', description: 'Classic chickpea puree with tahini, lemon, and garlic.', price: '$12' },
  { name: 'Baba Ghanoush', description: 'Smoky eggplant dip with parsley, garlic, and olive oil.', price: '$13' },
  { name: 'Spicy Feta Dip', description: 'Whipped feta with roasted red peppers and a hint of chili.', price: '$14' },
  { name: 'Falafel', description: 'Crispy fried chickpea patties with tahini sauce.', price: '$11' },
];

const fromTheGrill: MenuItem[] = [
  { name: 'Chicken Kebab', description: 'Marinated chicken skewers served with saffron rice.', price: '$24' },
  { name: 'Lamb Chops', description: 'Grilled lamb chops with a mint and pistachio crust.', price: '$32' },
  { name: 'Branzino', description: 'Whole grilled Mediterranean sea bass with lemon and herbs.', price: '$29' },
];

const salads: MenuItem[] = [
  { name: 'Fattoush Salad', description: 'Mixed greens, tomatoes, cucumbers, and crispy pita bread.', price: '$16' },
  { name: 'Greek Salad', description: 'Tomatoes, cucumbers, red onion, feta cheese, and olives.', price: '$15' },
];

const Menu = () => {
  return (
    <section id="menu" className="section">
      <div className="container">
        <h2>Our Menu</h2>
        <div className="menu-grid">
          <div className="menu-category">
            <h3>Mezze / Small Plates</h3>
            {mezze.map(item => (
              <div key={item.name} className="menu-item">
                <div className="menu-item-header">
                  <h4>{item.name}</h4>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="menu-category">
            <h3>From The Grill</h3>
            {fromTheGrill.map(item => (
              <div key={item.name} className="menu-item">
                <div className="menu-item-header">
                  <h4>{item.name}</h4>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="menu-category">
            <h3>Salads</h3>
            {salads.map(item => (
              <div key={item.name} className="menu-item">
                <div className="menu-item-header">
                  <h4>{item.name}</h4>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;