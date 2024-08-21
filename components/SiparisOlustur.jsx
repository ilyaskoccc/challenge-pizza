import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, CardBody, CardText, CardTitle, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

const initialForm = {
    isim: '',
    boyut: '',
    malzemeler: [],
    özel: "",
    fiyat: 85.50,
    adet: 1,
};


const errorMessages = {
    isim: "Boyut seçmelisiniz.",
    boyut: "Hamur seçmelisiniz.",
    malzemeler: "En az 4 malzeme seçmelisiniz.",
};

export default function SiparisOlustur() {

    const [form, setForm] = useState(initialForm);

    const isMaxDisabled = form.malzemeler.length >= 10;


    const [errors, setErrors] = useState({
        isim: true,
        boyut: true,
        malzemeler: true,
    });


    const handleChange = (event) => {

        let { name, value } = event.target;

        setForm({ ...form, [name]: value });

        if (name === 'isim') {
            if (value === "kücük" || value === "orta" || value === "büyük") {
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true });
            }
        }


        if (name === 'boyut') {
            if (value === "İncecik Hamur" || value === "İnce Hamur" || value === "Klasik Hamur") {
                setErrors({ ...errors, [name]: false });
            } else {
                setErrors({ ...errors, [name]: true });
            }
        }


        if (name === "malzemeler") {
            if (form.malzemeler.includes(value)) {
                if (form.malzemeler.length < 5) {
                    setErrors({ ...errors, [name]: true });
                }
                setForm({
                    ...form, ["malzemeler"]: form.malzemeler.filter((item) => {
                        return item !== value;
                    })
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
    };




    return (
        <>
            <header className="header">
                <section>
                    <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />
                </section>
                <section className="yazi">
                    <p>
                        <Link to="/">Anasayfa</Link> -  Sipariş Oluştur
                    </p>
                </section>
            </header>
            <div className="form">
                <Form onSubmit={handleSubmit}>
                    <CardBody>
                        <CardTitle tag="h2">
                            <section className="baslik">
                                Position Absolute Acı Pizza
                            </section>
                        </CardTitle>
                        <CardText className="fy">
                            <section className="fiyat">
                                {form.fiyat.toFixed(2)}₺
                            </section>
                            <section className="yorumdegerlendirme">
                                <p>4.9</p>
                                <p>(200)</p>
                            </section>
                        </CardText>
                    </CardBody>
                    <p className="giris">
                        Frontent Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre.
                        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
                        daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                        genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
                        Küçük bir pizzaya bazen pizzetta denir.
                    </p>

                    <FormGroup className="boyutHamur">
                        <FormGroup className="yeni" tag="fieldset">
                            <legend>
                                Boyut Seç
                            </legend>
                            <FormGroup check>
                                <Input
                                    name="isim"
                                    id="kücük"
                                    type="radio"
                                    value="kücük"
                                    onChange={handleChange}
                                    invalid={errors.isim}
                                />
                                <Label check className="boyutYazi" htmlFor="kücük">
                                    Küçük
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="isim"
                                    id="orta"
                                    type="radio"
                                    value="orta"
                                    onChange={handleChange}
                                    invalid={errors.isim}
                                />
                                <Label check className="boyutYazi" htmlFor="orta">
                                    Orta
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="isim"
                                    id="büyük"
                                    type="radio"
                                    value="büyük"
                                    onChange={handleChange}
                                    invalid={errors.isim}
                                />
                                <Label check className="boyutYazi" htmlFor="büyük">
                                    Büyük
                                </Label>
                            </FormGroup>
                            {errors.isim && <FormFeedback tooltip style={{ display: "flex", marginTop: "35px" }}>{errorMessages.isim}</FormFeedback>}
                        </FormGroup>
                        <FormGroup className="yeni">
                            <Label htmlFor="exampleSelect">
                                Hamur Seç
                            </Label>
                            <Input
                                id="exampleSelect"
                                name="boyut"
                                type="select"
                                onChange={handleChange}
                                invalid={errors.boyut}
                            >
                                <option>
                                    Hamur Kalınlığı
                                </option>
                                <option>
                                    İncecik Hamur
                                </option>
                                <option>
                                    İnce Hamur
                                </option>
                                <option>
                                    Klasik Hamur
                                </option>
                            </Input>
                        </FormGroup>
                        {errors.boyut && <FormFeedback tooltip style={{ display: "flex", marginLeft: "136px", marginTop: "-20px" }}>{errorMessages.boyut}</FormFeedback>}
                    </FormGroup>
                    <legend>
                        Ek Malzemeler
                    </legend>
                    <legend className="malzemeSec">
                        En Fazla 10 Malzeme Seçebilirsiniz. (5₺)
                    </legend>
                    <FormGroup className="malzemeList">
                        <FormGroup className="ekMalzemeler">
                            {['Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak', 'Ananas'].map(item => (
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
                            {['Sosis', 'Soğan', 'Sucuk', 'Biber', 'Kabak'].map(item => (
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
                            {['Kanada Jambonu', 'Domates', 'Jalepeno', 'Eski Kaşar'].map(item => (
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
                        {errors.malzemeler && <FormFeedback tooltip style={{ display: "flex", marginTop: "415px" }}>{errorMessages.malzemeler}</FormFeedback>}
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
                            <Button color="warning" className="arttirbtn" onClick={() => {
                                setForm({ ...form, adet: form.adet > 1 ? form.adet - 1 : 1 }); // 1'in altına düşmesini engelliyor
                            }}>
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
                            <Button color="warning" className="arttirbtn" onClick={handleIncrement}>
                                +
                            </Button>
                        </FormGroup>
                        <div className="siparisDetay">
                            <div className="siparis">
                                Sipariş Toplamı
                            </div>
                            <div className="secimler">
                                <div className="left">
                                    Seçimler
                                </div>
                                <div className="right">
                                    {(form.malzemeler.length * 5) * form.adet}₺
                                </div>
                            </div>
                            <div className="toplami">
                                <div className="left">
                                    Toplam
                                </div>
                                <div className="right">
                                    {((form.malzemeler.length * 5 + form.fiyat).toFixed(2) * form.adet)}₺
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormGroup className="btnSiparis">
                        <Button color="warning" className="siparisVer">
                            Sipariş Ver
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        </>
    );
}