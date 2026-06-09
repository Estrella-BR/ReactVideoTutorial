
import { useState } from "react";

//import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface ItemCounterProps {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1)
    };

    const handleSubstract = () => {
        if (count == 1) return;
        setCount(count - 1)
    };

    return (
        <section
            className={styles['item-row']}
        //className="item-row"
        /* style={{
            alignItems: 'center',
            display: 'flex',
            gap: 8,
            marginTop: 16
        }} */
        >
            <span
                className={styles.itemText}
                style={{ color: count == 1 ? 'red' : 'black' }}
            >{name}</span>
            <button
                onClick={handleAdd}
            >
                +1
            </button>
            <span>{count}</span>
            <button
                onClick={handleSubstract}
            >
                -1
            </button>
        </section >
    )
}