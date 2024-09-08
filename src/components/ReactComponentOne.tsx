import { useStore } from '@nanostores/react';
import { locale} from "../store/store.ts";

const ReactComponentOne = () => {
    const $locale = useStore(locale);
    console.log("Value of locale:" + $locale);

    return (
        <section>
            <h2>Sett locale to nb</h2>
            <p>The value of locale will persist across pages</p>
            <button onClick={() => locale.set("nb")}>
                Button
            </button>
        </section>
    );
}

export default ReactComponentOne;