
const BurgerStack = (props) => {
    return (
            <ul>
            {props.stack.map((burger, index)=>(
                <li key={index} style={{ backgroundColor: burger.color }}>
                {burger.name}
                <button onClick={()=>props.removeFromBurger(index)}>x</button>
                </li>
            ))}
            </ul>
    )
};

export default BurgerStack;
