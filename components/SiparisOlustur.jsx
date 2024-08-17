import React from 'react';
import { Link } from "react-router-dom";
import { Button, CardBody, CardText, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";


export default function SiparisOlustur() {
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
                <Form>
                    <CardBody>
                        <CardTitle tag="h2">
                            <section className="baslik">
                                Position Absolute Acı Pizza
                            </section>
                        </CardTitle>
                        <CardText className="fy">
                            <section className="fiyat">
                                85.50₺
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
                            <FormGroup check disabled>
                                <Input
                                    name="radio"
                                    id="kücük"
                                    type="radio"
                                />
                                <Label check className="boyutYazi" htmlFor="kücük">
                                    Küçük
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio"
                                    id="orta"
                                    type="radio"
                                />
                                <Label check className="boyutYazi" htmlFor="orta">
                                    Orta
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio"
                                    id="büyük"
                                    type="radio"
                                />
                                <Label check className="boyutYazi" htmlFor="büyük">
                                    Büyük
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup className="yeni">
                            <Label htmlFor="kalinlik">
                                Hamur Seç
                            </Label>
                            <Input
                                id="kalinlik"
                                name="select"
                                type="select"
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
                    </FormGroup>
                    <legend>
                        Ek Malzemeler
                    </legend>
                    <legend className="malzemeSec">
                        En Fazla 10 Malzeme Seçebilirsiniz. (5₺)
                    </legend>
                    <FormGroup className="malzemeList">
                        <FormGroup className="ekMalzemeler">
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="pepperoni"
                                    id="pepperoni"
                                />
                                <Label htmlFor="pepperoni" check>
                                    Pepperoni
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="tavuk ızgara"
                                    id="tavuk ızgara"
                                />
                                <Label htmlFor="tavuk ızgara" check>
                                    Tavuk Izgara
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="mısır"
                                    id="mısır"
                                />
                                <Label htmlFor="mısır" check>
                                    Mısır
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="sarımsak"
                                    id="sarımsak"
                                />
                                <Label htmlFor="sarımsak" check>
                                    Sarımsak
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="ananas"
                                    id="ananas"
                                />
                                <Label htmlFor="ananas" check>
                                    Ananas
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup className="ekMalzemeler">
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="sosis"
                                    id="sosis"
                                />
                                <Label htmlFor="sosis" check>
                                    Sosis
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="sogan"
                                    id="sogan"
                                />
                                <Label htmlFor="sogan" check>
                                    Soğan
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="sucuk"
                                    id="sucuk"
                                />
                                <Label htmlFor="sucuk" check>
                                    Sucuk
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="biber"
                                    id="biber"
                                />
                                <Label htmlFor="biber" check>
                                    Biber
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="kabak"
                                    id="kabak"
                                />
                                <Label htmlFor="kabak" check>
                                    Kabak
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup className="ekMalzemeler">
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="kanada jambonu"
                                    id="kanada jambonu"
                                />
                                <Label htmlFor="kanada jambonu" check>
                                    Kanada Jambonu
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="domates"
                                    id="domates"
                                />
                                <Label htmlFor="domates" check>
                                    Domates
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="jalepeno"
                                    id="jalepeno"
                                />
                                <Label htmlFor="jalepeno" check>
                                    Jalepeno
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                                className="malzemeBosluk"
                            >
                                <Input
                                    type="checkbox"
                                    name="eski kaşar"
                                    id="eski kaşar"
                                />
                                <Label htmlFor="eski kaşar" check>
                                    Eski Kaşar
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup className="textAlani">
                        <Label for="exampleText" style={{ fontWeight: "bold" }}>
                            Sipariş Notu
                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="text"
                            placeholder="Siparişinize Eklemek İstediğiniz Not Var Mı?"
                            className="not"
                        />
                    </FormGroup>
                    <div className="siparisGör">
                        <FormGroup className="arttir">
                            <Button color="warning" className="arttirbtn">
                                -
                            </Button>
                            <Input
                                id="exampleText"
                                name="text"
                                type="text"
                                placeholder="1"
                                className="arttirtxt"
                            />
                            <Button color="warning" className="arttirbtn">
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
                                    25₺
                                </div>
                            </div>
                            <div className="toplami">
                                <div className="left">
                                    Toplam
                                </div>
                                <div className="right">
                                    115₺
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