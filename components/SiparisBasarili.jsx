import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SiparisBasarili({ verilenSiparis }) {
  const history = useHistory();

  useEffect(() => {
    if (!verilenSiparis) {
      // Eğer verilenSiparis boşsa hata toast mesajı göster ve hemen yönlendir
      toast.error("Hata: Sipariş bulunamadı, anasayfaya yönlendiriliyorsunuz", {
        position: "top-right",
        autoClose: 15000, // 10 saniye sonra otomatik kapanır
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: "white", color: "red" }, // Kırmızı arka plan ve beyaz yazı
      });

      const myTimeout = setTimeout(() => {
        history.push("/"); // Hedef sayfa: Anasayfa
      }, 15000); // 10 saniye sonra yönlendirme

      return () => clearTimeout(myTimeout); // Cleanup function
    } else {
      // Eğer sipariş varsa, başarı mesajı göster ve 10 saniye sonra yönlendir
      toast.success("Anasayfaya yönlendiriliyorsunuz", {
        position: "top-right",
        autoClose: 10000, // 10 saniye sonra otomatik kapanır
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: "green", color: "white" }, // Yeşil arka plan ve beyaz yazı
      });

      const myTimeout = setTimeout(() => {
        history.push("/"); // Hedef sayfa: Anasayfa
      }, 10000); // 10 saniye sonra yönlendirme

      return () => clearTimeout(myTimeout); // Cleanup function
    }
  }, [verilenSiparis, history]);

  return verilenSiparis ? (
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
          Boyut: <strong> {verilenSiparis.isim} </strong>
        </div>
        <div className="siparisOzet">
          Hamur: <strong>{verilenSiparis.boyut}</strong>
        </div>
        <div className="siparisOzet">
          Malzemeler: <strong>{verilenSiparis.malzemeler.join(", ")}</strong>
        </div>
      </div>
      <div className="siparisBasariliFiyat">
        <div className="siparis siparisRenk">Sipariş Toplamı</div>
        <div className="secimler siparisRenk">
          <div className="left siparisRenk">Seçimler</div>
          <div className="right siparisRenk">
            {verilenSiparis.malzemeler.length * 5 * verilenSiparis.adet}₺
          </div>
        </div>
        <div className="toplami siparisRenk">
          <div className="left siparisRenk">Toplam</div>
          <div className="right siparisRenk">
            {(
              verilenSiparis.malzemeler.length * 5 +
              verilenSiparis.fiyat
            ).toFixed(2) * verilenSiparis.adet}
            ₺
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  ) : (
    <div className="siparisBasarili">
      <section className="siparisBasariliHeader">
        <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />{" "}
      </section>
      <section className="SiparisBasariliTxt">
        <img
          src="https://cdn.r10.net/editor/5718/3642958397.png"
          alt="Logo"
          style={{ width: "100%" }}
        />
      </section>
      <ToastContainer />
    </div>
  );
}
