import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Anasayfa() {
    return (
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <section className="anasayfaHeader">
                        <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />
                    </section>
                    <section className="anasayfaTxt">
                        <p>
                            KOD ACIKTIRIR Pizza, DOYURUR
                        </p>
                    </section>
                    <section>
                        <Button color="warning" className="anasayfaBtn">
                            <Link to="/siparis-olustur">ACIKTIM</Link>
                        </Button>
                    </section>
                </div>
            </div>
        </>
    );
}