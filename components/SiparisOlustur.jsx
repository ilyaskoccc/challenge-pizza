import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  CardBody,
  CardText,
  CardTitle,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import axios from "axios";
import "./SiparisOlustur.css";

const initialForm = {
  isim: "",
  boyut: "",
  malzemeler: [],
  özel: "",
  fiyat: 85.5,
  adet: 1,
};

const errorMessages = {
  isim: "Boyut seçmelisiniz.",
  boyut: "Hamur seçmelisiniz.",
  malzemeler: "En az 4 malzeme seçmelisiniz.",
};

export default function SiparisOlustur() {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  const isMaxDisabled = form.malzemeler.length >= 10;

  const [errors, setErrors] = useState({
    isim: true,
    boyut: true,
    malzemeler: true,
  });

  useEffect(() => {
    if (
      errors.isim === false &&
      errors.boyut === false &&
      errors.malzemeler === false
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

  const handleChange = (event) => {
    let { name, value } = event.target;

    setForm({ ...form, [name]: value });

    if (name === "isim") {
      if (value === "kücük" || value === "orta" || value === "büyük") {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "boyut") {
      if (
        value === "İncecik Hamur" ||
        value === "İnce Hamur" ||
        value === "Klasik Hamur"
      ) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "malzemeler") {
      if (form.malzemeler.includes(value)) {
        //çıkarılan malzemeler 4 ün aşağısındaysa validasyon hatasını gösterecek.
        if (form.malzemeler.length < 5) {
          setErrors({ ...errors, [name]: true });
        }
        setForm({
          ...form,
          ["malzemeler"]: form.malzemeler.filter((item) => {
            return item !== value;
          }),
        });
      } else {
        if (form.malzemeler.length < 3) {
          setForm({ ...form, ["malzemeler"]: [...form.malzemeler, value] });
          setErrors({ ...errors, [name]: true });
        } else if (form.malzemeler.length > 3 || form.malzemeler.length < 10) {
          setForm({ ...form, ["malzemeler"]: [...form.malzemeler, value] });
          setErrors({ ...errors, [name]: false });
        }
      }
    }
  };

  const handleIncrement = () => {
    setForm({ ...form, adet: form.adet + 1 });
    console.log(form.adet);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    axios
      .get("https://reqres.in/api/pizza")
      .then((response) => {
        setForm(initialForm);
        history.push("/siparis-basarili");
        console.log(response.data);
      })
      .catch((err) => {
        history.push("/error");
      });
  };

  return (
    <>
      <header className="header">
        <section>
          <Link to="/">
            <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />
          </Link>
        </section>
      </header>
      <section className="header1">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/3dc3/888e/fb1b2dee44748bbd31d4f786edc3a4d1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LDdi33mFegnT3spOf4tpN6XQb5WpfxLBYC3Xzfusteb4oxscwTWHXVgzOFsF52BARpTjcjU7li0cggFKCyIS4WDtpUSwFy2RH3ybW~nwz2JDNBGmga03Mqk6BXqy6J-nfQaByzQ6xUmrf5um0kuyr1l5bqNOXYnwmGxo8QKPRNdlb7TZy2m9SX3hQDsq5xC~D0P-KP6ARYl2z8OuTCtP1jGKZjZdCpPMnC62OUwoVDLe5T5Pmu5qrrNRFJL2ypwTSLvyMXJgA5lLVuj7o4cTM0S4w1Ok6FN7RbX6s-t1ZewFroWh0RfFNog9f4eNPPjzMpk5LbP1v-S9AQRs0juQow__"
            alt="item1.jpg"
          />
        </div>
        <div className="yazi">
          <Link to="/">Anasayfa</Link> -{" "}
          <Link to="/siparis-olustur" style={{ color: "#CE2829" }}>
            Sipariş Oluştur
          </Link>
          <CardBody>
            <CardTitle tag="h2">
              <section className="baslik">Position Absolute Acı Pizza</section>
            </CardTitle>
            <CardText className="fy">
              <section className="fiyat">{form.fiyat.toFixed(2)}₺</section>
              <section className="yorumdegerlendirme">
                <p>4.9</p>
                <p>(200)</p>
              </section>
            </CardText>
          </CardBody>
          <p className="giris">
            Frontent Dev olarak hala position: absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
      </section>
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <FormGroup className="boyutHamur">
            <FormGroup className="yeni" tag="fieldset">
              <legend>Boyut Seç</legend>
              <div className="yeniBoyut">
                <div className="boyutSecim">S</div>
                <div className="boyutSecim">M</div>
                <div className="boyutSecim" style={{ background: "#FFEECC" }}>
                  L
                </div>
              </div>
              {errors.isim && (
                <FormFeedback
                  tooltip
                  style={{ display: "flex", marginTop: "550px" }}
                >
                  {errorMessages.isim}
                </FormFeedback>
              )}
            </FormGroup>
            <FormGroup className="yeni">
              <Label htmlFor="exampleSelect">Hamur Seç</Label>
              <Input
                id="exampleSelect"
                name="boyut"
                type="select"
                style={{ background: "#FAF7F2" }}
                onChange={handleChange}
                invalid={errors.boyut}
              >
                <option>--Hamur Kalınlığı--</option>
                <option>İncecik Hamur</option>
                <option>İnce Hamur</option>
                <option>Klasik Hamur</option>
              </Input>
            </FormGroup>
            {errors.boyut && (
              <FormFeedback
                tooltip
                style={{
                  display: "flex",
                  marginLeft: "135px",
                  marginTop: "515px",
                }}
              >
                {errorMessages.boyut}
              </FormFeedback>
            )}
          </FormGroup>
          <legend>Ek Malzemeler</legend>
          <legend className="malzemeSec">
            En Fazla 10 Malzeme Seçebilirsiniz. (5₺)
          </legend>
          <FormGroup className="malzemeList">
            <FormGroup className="ekMalzemeler">
              {["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas"].map(
                (item) => (
                  <FormGroup check inline className="malzemeBosluk" key={item}>
                    <Input
                      type="checkbox"
                      name="malzemeler"
                      id={item}
                      value={item}
                      onChange={handleChange}
                      disabled={
                        isMaxDisabled && !form.malzemeler.includes(item)
                      }
                      invalid={errors.malzemeler}
                      className="checkStil"
                    />
                    <Label htmlFor={item} check>
                      {item}
                    </Label>
                  </FormGroup>
                )
              )}
            </FormGroup>
            <FormGroup className="ekMalzemeler">
              {["Sosis", "Soğan", "Sucuk", "Biber", "Kabak"].map((item) => (
                <FormGroup check inline className="malzemeBosluk" key={item}>
                  <Input
                    type="checkbox"
                    name="malzemeler"
                    id={item}
                    value={item}
                    onChange={handleChange}
                    disabled={isMaxDisabled && !form.malzemeler.includes(item)}
                    invalid={errors.malzemeler}
                  />
                  <Label htmlFor={item} check>
                    {item}
                  </Label>
                </FormGroup>
              ))}
            </FormGroup>
            <FormGroup className="ekMalzemeler">
              {["Kanada Jambonu", "Domates", "Jalepeno", "Kaşar Peyniri"].map(
                (item) => (
                  <FormGroup check inline className="malzemeBosluk" key={item}>
                    <Input
                      type="checkbox"
                      name="malzemeler"
                      id={item}
                      value={item}
                      onChange={handleChange}
                      disabled={
                        isMaxDisabled && !form.malzemeler.includes(item)
                      }
                      invalid={errors.malzemeler}
                    />
                    <Label htmlFor={item} check>
                      {item}
                    </Label>
                  </FormGroup>
                )
              )}
            </FormGroup>
            {errors.malzemeler && (
              <FormFeedback
                tooltip
                style={{ display: "flex", marginTop: "940px" }}
              >
                {errorMessages.malzemeler}
              </FormFeedback>
            )}
          </FormGroup>
          <FormGroup className="textAlani">
            <Label htmlFor="özel" style={{ fontWeight: "bold" }}>
              Sipariş Notu
            </Label>
            <Input
              id="özel"
              name="özel"
              type="text"
              placeholder="Siparişinize Eklemek İstediğiniz Not Var Mı?"
              className="not"
              onChange={handleChange}
            />
          </FormGroup>
          <div className="siparisGör">
            <FormGroup className="arttir">
              <Button
                color="warning"
                className="arttirbtn"
                onClick={() => {
                  setForm({ ...form, adet: form.adet > 1 ? form.adet - 1 : 1 }); // 1'in altına düşmesini engelliyor
                }}
              >
                -
              </Button>
              <Input
                id="exampleText"
                name="text"
                type="text"
                value={form.adet} // placeholder yerine value kullanılıyor
                readOnly // Kullanıcı manuel olarak değiştiremesin diye readOnly ekledik
                className="arttirtxt"
              />
              <Button
                color="warning"
                className="arttirbtn"
                onClick={handleIncrement}
              >
                +
              </Button>
            </FormGroup>
            <div className="siparisDetay">
              <div className="siparis">Sipariş Toplamı</div>
              <div className="secimler">
                <div className="left">Seçimler</div>
                <div className="right">
                  {form.malzemeler.length * 5 * form.adet}₺
                </div>
              </div>
              <div className="toplami">
                <div className="left">Toplam</div>
                <div className="right">
                  {(form.malzemeler.length * 5 + form.fiyat).toFixed(2) *
                    form.adet}
                  ₺
                </div>
              </div>
            </div>
          </div>
          <FormGroup className="btnSiparis">
            <Button color="warning" className="siparisVer" disabled={!isValid}>
              Sipariş Ver
            </Button>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}
