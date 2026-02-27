type SpecialItem = {
  imgSrc: string;
  name: string;
  description: string;
  price: string;
};

const specials: SpecialItem[] = [
  {
    imgSrc: 'https://images.unsplash.com/photo-1598515214211-89d3c7373b14?q=80&w=800&auto=format&fit=crop',
    name: 'Grilled Octopus',
    description: 'Tender grilled octopus served with a lemon-herb vinaigrette and roasted potatoes.',
    price: '$28'
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1625944228741-cf3b9b2a42de?q=80&w=800&auto=format&fit=crop',
    name: 'Lamb Tagine',
    description: 'Slow-cooked lamb with apricots, almonds, and aromatic spices, served with couscous.',
    price: '$34'
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1543339308-43e59d6b70a6?q=80&w=800&auto=format&fit=crop',
    name: 'Seafood Paella',
    description: 'A classic Spanish dish with saffron rice, shrimp, mussels, and chorizo.',
    price: '$38'
  }
];

const Specials = () => {
  return (
    <section id="specials" className="section specials-section">
      <div className="container">
        <h2>Chef's Specials</h2>
        <div className="specials-grid">
          {specials.map((special) => (
            <div key={special.name} className="special-card">
              <img src={special.imgSrc} alt={special.name} className="special-card-img" />
              <div className="special-card-content">
                <h3>{special.name}</h3>
                <p>{special.description}</p>
                <span className="special-card-price">{special.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;