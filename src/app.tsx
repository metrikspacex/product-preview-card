import styles from "./styles/app.module.scss";
import { ReactComponent as CartIcon } from "./assets/icon-cart.svg";

export default function App() {
  return (
    <main className={styles.root}>
      <div />
      <div>
        <h3>PERFUME</h3>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <h2>
          <span>$149.99</span>
          <span>
            <s>$169.99</s>
          </span>
        </h2>
        <button type="button">
          <span>
            <CartIcon />
          </span>
          <span>Add To Cart</span>
        </button>
      </div>
    </main>
  );
}
