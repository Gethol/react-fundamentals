import { LevelContext } from "./LevelContext.js";

export default function Section({ children }){
    return(
        <section className="section">
            {children}
        </section>
    );
}