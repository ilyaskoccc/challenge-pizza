import { Button } from "reactstrap";

export default function Anasayfa() {
    return (
        <>
            <div class="hero-image">
                <div class="hero-text">
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
                            ACIKTIM
                        </Button>
                    </section>
                </div>
            </div>
        </>
    );
}