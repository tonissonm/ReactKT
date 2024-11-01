const MealItem = (props) => {
    let currency = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(props.meal.price);
    return (
        <li className="meal-item">
            <article className="meal-item article">
                <img 
                    src={require(`../assets/${props.meal.image}`)}
                    alt={props.meal.name}
                    className="meal-item img"
                />
                <div className="meal-info">
                    <h3 className="meal-item-name">{props.meal.name}</h3>
                    <p className="meal-item-price">{currency}</p>
                    <p className="meal-item-description"> {props.meal.description}</p>
                </div>
                <div className="meal-item-actions">
                    <button className="button">Add to Cart</button>
                </div>
            </article>
        </li>
        
    )
}

export default MealItem