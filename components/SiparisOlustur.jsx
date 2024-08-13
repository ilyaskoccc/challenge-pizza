import { Button, CardBody, CardText, CardTitle, Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function SiparisOlustur() {
    return (
        <>
            <header className="header">
                <section className="yazi">
                    <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />
                </section>
            </header>
            <div className="header1">
                <section className="navigasyon">
                    <p>Anasayfa - Seçenekler - </p>
                    <p>Sipariş Oluştur</p>
                </section>
            </div>
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
                        <FormGroup className="flex">
                            <legend>
                                Boyut Seç
                            </legend>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    Küçük
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    Orta
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                />
                                {' '}
                                <Label check>
                                    Büyük
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup className="flex">
                            <Label for="exampleSelect">
                                Hamur Seç
                            </Label>
                            <Input
                                id="exampleSelect"
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
                    <FormGroup>
                        <FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Pepperoni
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Sosis
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Kanada Jambonu
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Tavuk Izgara
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Soğan
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Domates
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Mısır
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Sucuk
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Jalepeno
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Sarımsak
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Biber
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Sucuk
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Ananas
                                </Label>
                            </FormGroup>
                            <FormGroup
                                check
                                inline
                            >
                                <Input type="checkbox" />
                                <Label check>
                                    Kabak
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