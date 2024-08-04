import { useDispatch, useSelector } from "react-redux";
import PageNav from "../../components/page-nav/PageNav";
import styles from "./Homepage.module.css";
import { loginAction } from "../../redux/actions";
import {
  descreaseCount,
  increaseCount,
} from "../../redux-toolkit/counterSlice";
import { fetchCities } from "../../redux-toolkit/citiesSlice";

export default function Homepage() {
  // memoized - state data - cache
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(counterState);
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <a className="cta" href="/login">
          Start Tracking Now
        </a>

        <button
          onClick={() => {
            dispatch(
              fetchCities({
                id: 1,
              })
            );
          }}
        >
          ++
        </button>
      </section>
    </main>
  );
}
