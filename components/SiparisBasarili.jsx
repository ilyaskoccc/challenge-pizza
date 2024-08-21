import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SiparisBasarili() {
    const history = useHistory();

    useEffect(() => {
        toast.success("Anasayfaya yönlendiriliyorsunuz", {
            position: "top-center",
            autoClose: 5000, // 5 saniye sonra otomatik kapanır
            hideProgressBar: false, // Progress bar'ı göster
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: 'green', color: 'white' } // Yeşil arka plan ve beyaz yazı
        });

        const myTimeout = setTimeout(() => {
            history.push("/"); // Burada hedef sayfanın yolunu belirtin, örneğin ana sayfa için "/"
        }, 5000);

        return () => clearTimeout(myTimeout); // Komponent unmount olduğunda timeout'u temizlemek için

    }, [history]);

    return (
        <div className="siparisBasarili">
            <section className="siparisBasariliHeader">
                <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />
            </section>
            <section className="SiparisBasariliTxt">
                <p>
                    Tebrikler! <br /> SİPARİŞİNİZ ALINDI!
                </p>
            </section>
            <ToastContainer />
        </div>
    );
}
