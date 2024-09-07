import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SiparisBasarili() {
  const history = useHistory();
  /*
  useEffect(() => {
    toast.success("Anasayfaya yönlendiriliyorsunuz", {
      position: "top-center",
      autoClose: 10000, // 5 saniye sonra otomatik kapanır
      hideProgressBar: false, // Progress bar'ı göster
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: "green", color: "white" }, // Yeşil arka plan ve beyaz yazı
    });

    const myTimeout = setTimeout(() => {
      history.push("/"); // Burada hedef sayfanın yolunu belirtin, örneğin ana sayfa için "/"
    }, 10000);

    return () => clearTimeout(myTimeout); // Komponent unmount olduğunda timeout'u temizlemek için
  }, [history]);
*/
  return (
    <div className="siparisBasarili">
      <section className="siparisBasariliHeader">
        <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />
      </section>
      <section className="SiparisBasariliTxt">
        <p>
          <p className="lezzet">lezzetin yolda</p> SİPARİŞ ALINDI!
        </p>
      </section>
      <section className="cizgi"></section>
      <div>
        <section className="siparisBasariliBaslik">
          Position Absolute Acı Pizza
        </section>
      </div>
      <div className="siparisBasariliDetay">
        <div className="siparisOzet">
          Boyut: <strong> L </strong>
        </div>
        <div className="siparisOzet">
          Hamur: <strong>İncecik Hamur</strong>
        </div>
        <div className="siparisOzet">
          Malzemeler:{" "}
          <strong>
            Sucuk, Kaşar, Domates, Mısır, Sucuk, Kaşar, Domates, Mısır
          </strong>
        </div>
      </div>
      <div className="siparisBasariliFiyat">
        <div className="siparis siparisRenk">Sipariş Toplamı</div>
        <div className="secimler siparisRenk">
          <div className="left siparisRenk">Seçimler</div>
          <div className="right siparisRenk">12₺</div>
        </div>
        <div className="toplami siparisRenk">
          <div className="left siparisRenk">Toplam</div>
          <div className="right siparisRenk">12₺</div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
