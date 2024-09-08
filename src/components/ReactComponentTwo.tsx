import { useStore } from '@nanostores/react';
import { locale} from "../store/store.ts";

const ReactComponentTwo = () => {
    const $locale = useStore(locale);
    console.log("Value of locale:" + $locale)

    return (
        <section>
            <h2>Sett locale to nn</h2>
            <p>The value will persist across pages</p>
            <button onClick={() => locale.set("nn")}>
                Button
            </button>
        </section>
    );
}

export default ReactComponentTwo;