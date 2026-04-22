function MenuHighlights() {
  const items = [
    {
      title: 'Coffee',
      description:
        'Espresso, cappuccino, filter coffee, and seasonal specials.'
    },
    {
      title: 'Pastries',
      description:
        'Cinnamon buns, croissants, muffins, and cakes baked fresh daily.'
    },
    {
      title: 'Lunch',
      description:
        'Soup, sandwiches, and light seasonal dishes every weekday.'
    }
  ]

  return (
    <section className="content-section" id="menu">
      <h2>Menu Highlights</h2>

      <div className="menu-grid">
        {items.map((item) => (
          <article className="menu-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MenuHighlights