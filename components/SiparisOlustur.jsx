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


export default function SiparisOlustur() {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({
        isim: false,
        boyut: false,
        malzemeler: false,
        özel: false,
    });
    const [isValid, setIsValid] = useState(false);

    const isMaxDisabled = form.malzemeler.length >= 10;


    const validateForm = () => {
        const newErrors = {
            isim: form.isim === '',
            boyut: form.boyut === '',
            malzemeler: form.malzemeler.length < 4,
            özel: form.özel.trim() === '',
        };
        setErrors(newErrors);

        setIsValid(
            !newErrors.isim &&
            !newErrors.boyut &&
            !newErrors.malzemeler &&
            !newErrors.özel
        );
    };

    const handleChange = (event) => {
        let { name, value, type } = event.target;
        value = type === 'checkbox' ? event.target.checked : value;

        if (name === "malzemeler") {
            if (form.malzemeler.includes(value)) {
                setForm({
                    ...form, ["malzemeler"]: form.malzemeler.filter((item) => {
                        return item !== value;
                    })
                });
            } else {
                if (form.malzemeler.length < 10) {
                    setForm({ ...form, ["malzemeler"]: [...form.malzemeler, value] });
                }
            }
        } else {
            setForm({ ...form, [name]: value });
        }

        validateForm();
    };


    const handleIncrement = () => {
        setForm({
            ...form,
            adet: form.adet + 1
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
        if (!isValid) {
            alert("Formdaki hataları düzeltin.");
            return;
        } else {
            // Formu gönderme işlemi burada yapılır.
            console.log("Form gönderildi:", form);
        }
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
                            {errors.isim && <FormFeedback>Boyut seçmelisiniz.</FormFeedback>}
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
                            {errors.boyut && <FormFeedback>Hamur seçmelisiniz.</FormFeedback>}
                        </FormGroup>
                    </FormGroup>
                    <legend>
                        Ek Malzemeler
                    </legend>
                    {errors.malzemeler && <FormFeedback>En az 4 malzeme seçmelisiniz.</FormFeedback>}
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
                                    />
                                    <Label htmlFor={item} check>
                                        {item}
                                    </Label>
                                    {errors.malzemeler && <FormFeedback>En az 4 malzeme seçmelisiniz.</FormFeedback>}
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
                                    />
                                    <Label htmlFor={item} check>
                                        {item}
                                    </Label>
                                </FormGroup>
                            ))}
                        </FormGroup>
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
                            invalid={errors.özel}
                        />
                        {errors.özel && <FormFeedback>Sipariş notu boş bırakılamaz.</FormFeedback>}
                    </FormGroup>
                    <div className="siparisGör">
                        <FormGroup className="arttir">
                            <Button color="warning" className="arttirbtn" onClick={() => {
                                setForm({
                                    ...form,
                                    adet: form.adet > 1 ? form.adet - 1 : 1 // 1'in altına düşmesini engelliyor
                                });
                            }}>
                                -
                            </Button>
                            <Input
                                id="exampleText"
                                name="text"
                                type="text"
                                value={form.adet}
                                className="arttirtxt"
                                readOnly
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
                                    {form.malzemeler.length * 5}₺
                                </div>
                            </div>
                            <div className="toplami">
                                <div className="left">
                                    Toplam
                                </div>
                                <div className="right">
                                    {(form.malzemeler.length * 5 + form.fiyat).toFixed(2)}₺
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