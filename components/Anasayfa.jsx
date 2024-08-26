import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle } from "reactstrap";
import "./Anasayfa.css"

export default function Anasayfa() {
    return (
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <section>
                        <Link to="/">
                            <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />
                        </Link>
                    </section>
                    <p className="firsat">fırsatı kaçırma</p>
                    <section className="anasayfaTxt">
                        <p>
                            KOD ACIKTIRIR Pizza, DOYURUR
                        </p>
                    </section>
                    <section>
                        <Link to="/siparis-olustur">
                            <Button color="warning" className="anasayfaBtn">
                                ACIKTIM
                            </Button>
                        </Link>
                    </section>
                </div>
            </div>
            <div>
                <div className="gövdeNav">
                    <a href="#">
                        <img src="https://s3-alpha-sig.figma.com/img/2a12/f370/cf32c9057ad4d91cff5bfb6cf82c7087?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6m1L3SfIz8KvFZU2KN3Ge2p6mluz-h8qkQSG2XS03fiqQ95akFkjxoKsbB1SSxMJb3bc8NbiphJhFlurc8blc2ot5Ub9pxGz4gjmdNuIZw2oJaOCOaIKbmsyphmqpOHUziYWRY-qrxMgEK5ooGAaPRSHUvMMnMhe9Q0x~vSkzbhiG6oNhXz~h-GFSMoV1zioI~KVY3qIPoCMLs9SCooiplwTkaEZkfbrxEvzpzySF43NU7F3TVI3XoBF~kd6NBLlvcs9CUSlzqT2FRjmMPUFgoX0P-SckIdP3BkzI14B5ElAPuCmdGNvFbrMXWOurw3MpoeHH~p9fdzoWpyIl809Q__" alt="resim1" />
                        YENİ! Kore
                    </a>
                    <a href="#">
                        <img src="https://s3-alpha-sig.figma.com/img/3db5/2209/4bb26a7c6402da2e5f2c39e566b59480?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFgd2u4ftIVayDyVrFMSG4q-OmpcokV16GVhB5k83An14cTsoXKanh9qkUYVbu38Ff~yiMzCNU9J4YAbFxxgjcInX1dOu25fBuCmAnHp62BCTeByX08oPiQAgvbflDcV0F-T0XTha6JgjrdUsrc45Cz3xo1K6n1DUvr8Jh6xNMYlza3adwTapxSwSMne3Pznl17ZRHl5-08eNVOFBpa9dujekgJ7RSijXhM0t2rUWtkE0XdyLsxdNAoxMWwS1bstUVqyLWw4xk5RWDTL6mUAHTyLlCKW-ThhlL3r1vC~R5MSc2TcjlrUSDxrqbPayi3jwCpLEziHUCGqhTebec8-7g__" alt="resim2" />
                        Pizza
                    </a>
                    <a href="#">
                        <img src="https://s3-alpha-sig.figma.com/img/150a/f637/0ef0632109b215d5033b6aaeb40d4e2b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZTmBkHAZIVNdD8SqwTvIZPsSz9g93e~hXmOprx~QBYizBIxY0C9u5GYKtWcqw1kzZZGQ5Sz-BbXkKFUuNH0v3kCbO66YY3VCVInwab0KikEwmlQ8PKrnT~apEXPgwzMGe89y1-70D3~2565VSiQCP~yi-3j83W5GT2AXCTLnMtoirAT2NXzphb1UjxDnoyrhDhy5OnbgXLpcF9L-J5j3nWwPXnwrc4IF59iUWGrpdo2eka-fA8Ijh92zp4RXmEWaySoItbTH73Nn745r8yMkTk3a91VfMso5o46oIssDq2Mn4s8QUn~dtBfKxk5amwt2I6Sjm8u5L-LmG8uwjIxd3Q__" alt="resim3" />
                        Burger
                    </a>
                    <a href="#">
                        <img src="https://s3-alpha-sig.figma.com/img/1309/5a0d/52da3b4e6fe7e8ad5ab9c0703474762e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oc1ApFYyVFriqlEg-lX4onBo-WqlaxZuaRVIx~I8vWooQISHd0RiNVgaAOe8mXhDov17wSqTglzn7lih4jxbHfqkrpXPC3HUil3CYipAFsrbU4gBEul3WDmnsZgiZbWNFTHLJPb-1fiHK7feEx651vACaVpZ7OVZGY~Unmsl7fJT2kvabyc7Igp6xQVYhG4iHM~QU5uKCT3bU4Aw868HRIa6TFY0DdNdNUw2-ViTQBXrHAYG~DXeM8XVyKEx32NJkVGkSaHnSOSxuC55FcUGeYI9i12lN4Gr-sesF3PvgWliFL2drL84G2jIGyPZMuqF87zQr7us1Wte9RhROOEyRQ__" alt="resim4" />
                        Kızartmalar
                    </a>
                    <a href="#">
                        <img src="https://s3-alpha-sig.figma.com/img/a0bd/3d89/c8ba4e927016ed3c458e1e2b03a0fd47?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKHg8ovbG39tnbk9lsGYAhwBcqDFhUuyVE1Hd2yqeQ0SVlhDTSTWhurQJ4lTli4Nb7ZrYGM801Vkb28hWOrIHbTNmcXQGSSzY4K3pZ7YIZKlhjLXxiQzXMDN2hcX2FgqZBfKnfMCuesWkzNHOfRJDG65CvScMbjTNaiaWoivWwXsV2gM-zlpOeI4oPf0rcHt3DQSped6mX2ubNXkF32jeCkKKyBr9ehV9jVD8FYir-9kcqpVm6FNzVdiWbBfBOkTZ2ms4GQ2jPQ92UF5wWfY~ZYqC9IkWnSzIsKH70b7NBoCtJc3Mrrd3rG2UEmAL94zw2w7DKyChrO7UU5Ita7fkg__" alt="resim5" />
                        Fast food
                    </a>
                    <a href="#">
                        <img src="https://s3-alpha-sig.figma.com/img/d0a0/bb89/ccb1059768c63af268f17153b667d4b8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhZbvZGQsht5oXODRR102rCZ8RF6YksI0a9~bwgG8425C0tlZqGoJDLXI9aBLkaE3a0~xD60dXt-rG93WCi-WlJVZkbGZflaCeZTfdCz07LfWpmA2hVjHiAwPufPOfXEgLndm29hXeOGQc-UQPNAFuxahGOpgx9LADhl6EWSioacf~8bJDY9t8MnB4PsblvJHlOQVfTibs2VyYG9yKMaPy5zc~qmyew1S8EUQMHFBKTOmcbtd3EE~MxSX0SjMpnyNzYVqxeW6lard6LKwqxJMjN7xkuJOd7PyhEf6psLUeM7PqV03R8ovPMmL-h8v4tReI~8ucMVepZyKq2hKMTTdQ__" alt="resim6" />
                        Gazlı İçecek
                    </a>
                </div>
                <div className="icerik">
                    <Card inverse className="box" style={{ background: "#CE2829" }}>
                        <CardImg
                            alt="Card image cap"
                            src="https://s3-alpha-sig.figma.com/img/c436/3ab0/a2144978475fda5e250917960da4ea56?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObTrVwAspvJilZ9sR1dY4IqGUL5BJwAbLyIEEIwPAZDr5vEzhles8VGBxwtLdbkUzjBVoWbqqLyrMAGz47TdrUm5~YkPfDxrh5ZShjCa30OBivBqR53iLZAnn~VumX-ZTvrHqk1goiryKqxFpVcNUikt2EUXYVclJ20pxQXz~v7HPcqhswtYqOrCteVPSS0mJQ-lVj4eH20VSi8M~ykEDqCIbhlZVZcIO49RHHCa1ebdZ6TYheeudBc0dcD7Mqe~dC8UtQD7vTwkLQSIkiwsVRP9vL1zfAri2elywDn40RsDzDiEGYw1s0m3bD29v8xRj1znWg~319-bwNF3Li91NA__"
                            style={{
                                height: 465
                            }}
                            width="100%"
                        />
                        <CardImgOverlay>
                            <CardTitle className="boxHeader">
                                Özel Lezzetus
                            </CardTitle>
                            <CardText className="boxBody">
                                Position:Absolute Acı Burger
                            </CardText>
                            <CardText className="boxBody">
                                <a className="boxButton" href="#">
                                    SİPARİŞ VER
                                </a>
                            </CardText>
                        </CardImgOverlay>
                    </Card>
                    <div>
                        <Card inverse className="box" style={{ background: "#292929", marginBottom: "15px" }}>
                            <CardImg
                                alt="Card image cap"
                                src="https://s3-alpha-sig.figma.com/img/6166/ed58/d63154ac0f2a8d7ea2d719fc064bc3f6?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJ~h5SLrio5hR68cDYpXS7XkWanWHUDxLl2roRZ3cxdaE3Blp02yqajLrIVs3uLvZhYgKePaeQnhhh1N4j8aWpAhHCE0GhEjSgq7ghW9gOTwnQBR4zpkwCVMxqNmZ9uB1ot0gZj8aIzvuIOciJWnAbtm~GABxHvDKGGRDVNVGVUoZsrMf4Vw2liFxJe83GF~WRa42WG5u0uWHg~UgC2UXcjzvPSnh1QIdHFmPzlQzLeaHYH8HgTae6dUvJGsG90owVWu~flifeEDSJyftSU0SbwKbyxkAWtxIrdoGmcRGNsV0AAbXDTZFFxmzyGsKvN4lqd0LwVlFoi8XP9OFQwWRg__"
                                style={{
                                    height: 225
                                }}
                                width="100%"
                            />
                            <CardImgOverlay>
                                <CardTitle className="box1Body">
                                    Hackathlon Burger Menü
                                </CardTitle>
                                <CardText className="box1Body">
                                    <a className="boxButton" href="#">
                                        SİPARİŞ VER
                                    </a>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <div className="yeniDeneme">
                            <div className="bosluk">
                                <h3 className="box2Body" style={{ color: "#CE2829" }}>
                                    Çoooook <span style={{ color: "black" }}>hızlı npm gibi kurye</span>
                                </h3>
                                <a className="boxButton" href="#">
                                    SİPARİŞ VER
                                </a>
                            </div>
                            <div>
                                <img src="https://s3-alpha-sig.figma.com/img/3eca/c553/7e43419d60a8258a07300efc67447fa4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPcrgSGm5F8pqEfMa~RtxAB9VplSFGVbyh31SpgXLmxc0NbzEw-owp5z4rNYfKEMNpFKpcCDjmZxPJbQ3XhyFfgMiPopbDkf2nD6Oji5OH-6aeQL8KuMPEHUlRCSe1Bo4fNCtF6CG11rPjTF5DYo2O-pwActY7795VHi~OiArFY-Av~eLJrmIhpY4Z460JVyPtNAZtdteZPuukHBDQFJn~Z7q9kfIJ8rSDg~K6Du9fHzfl~tQOVfkVoWXgaArv170ZRUJiExgn1G~U9u0eMyKFGOy1QiEh5eT8qs1UUPZvX67B8E6lIC9B78Jka6u~ZuKdsHH7cYFeGGvk8tDwl1~Q__" style={{ width: "387.6px", height: "194px", paddingRight: "20%" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="paketHeader">
                    <div className="slogan1">
                        en çok paketlenen menüler
                    </div>
                    <div className="slogan2">
                        Acıktıran Kodlara Doyuran Lezzetler
                    </div>
                </div>
                <div className="footterHeader">
                    <div className="headerButton">
                        <a href="#">
                            <img src="https://s3-alpha-sig.figma.com/img/2a12/f370/cf32c9057ad4d91cff5bfb6cf82c7087?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6m1L3SfIz8KvFZU2KN3Ge2p6mluz-h8qkQSG2XS03fiqQ95akFkjxoKsbB1SSxMJb3bc8NbiphJhFlurc8blc2ot5Ub9pxGz4gjmdNuIZw2oJaOCOaIKbmsyphmqpOHUziYWRY-qrxMgEK5ooGAaPRSHUvMMnMhe9Q0x~vSkzbhiG6oNhXz~h-GFSMoV1zioI~KVY3qIPoCMLs9SCooiplwTkaEZkfbrxEvzpzySF43NU7F3TVI3XoBF~kd6NBLlvcs9CUSlzqT2FRjmMPUFgoX0P-SckIdP3BkzI14B5ElAPuCmdGNvFbrMXWOurw3MpoeHH~p9fdzoWpyIl809Q__" alt="resim1" />
                            Ramen
                        </a>
                    </div>
                    <div className="headerButton" style={{ background: "#292929" }}>
                        <a href="#" style={{ color: "white" }}>
                            <img src="https://s3-alpha-sig.figma.com/img/3db5/2209/4bb26a7c6402da2e5f2c39e566b59480?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFgd2u4ftIVayDyVrFMSG4q-OmpcokV16GVhB5k83An14cTsoXKanh9qkUYVbu38Ff~yiMzCNU9J4YAbFxxgjcInX1dOu25fBuCmAnHp62BCTeByX08oPiQAgvbflDcV0F-T0XTha6JgjrdUsrc45Cz3xo1K6n1DUvr8Jh6xNMYlza3adwTapxSwSMne3Pznl17ZRHl5-08eNVOFBpa9dujekgJ7RSijXhM0t2rUWtkE0XdyLsxdNAoxMWwS1bstUVqyLWw4xk5RWDTL6mUAHTyLlCKW-ThhlL3r1vC~R5MSc2TcjlrUSDxrqbPayi3jwCpLEziHUCGqhTebec8-7g__" alt="resim2" />
                            Pizza
                        </a>
                    </div>
                    <div className="headerButton">
                        <a href="#">
                            <img src="https://s3-alpha-sig.figma.com/img/150a/f637/0ef0632109b215d5033b6aaeb40d4e2b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZTmBkHAZIVNdD8SqwTvIZPsSz9g93e~hXmOprx~QBYizBIxY0C9u5GYKtWcqw1kzZZGQ5Sz-BbXkKFUuNH0v3kCbO66YY3VCVInwab0KikEwmlQ8PKrnT~apEXPgwzMGe89y1-70D3~2565VSiQCP~yi-3j83W5GT2AXCTLnMtoirAT2NXzphb1UjxDnoyrhDhy5OnbgXLpcF9L-J5j3nWwPXnwrc4IF59iUWGrpdo2eka-fA8Ijh92zp4RXmEWaySoItbTH73Nn745r8yMkTk3a91VfMso5o46oIssDq2Mn4s8QUn~dtBfKxk5amwt2I6Sjm8u5L-LmG8uwjIxd3Q__" alt="resim3" />
                            Burger
                        </a>
                    </div>
                    <div className="headerButton">
                        <a href="#">
                            <img src="https://s3-alpha-sig.figma.com/img/1309/5a0d/52da3b4e6fe7e8ad5ab9c0703474762e?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oc1ApFYyVFriqlEg-lX4onBo-WqlaxZuaRVIx~I8vWooQISHd0RiNVgaAOe8mXhDov17wSqTglzn7lih4jxbHfqkrpXPC3HUil3CYipAFsrbU4gBEul3WDmnsZgiZbWNFTHLJPb-1fiHK7feEx651vACaVpZ7OVZGY~Unmsl7fJT2kvabyc7Igp6xQVYhG4iHM~QU5uKCT3bU4Aw868HRIa6TFY0DdNdNUw2-ViTQBXrHAYG~DXeM8XVyKEx32NJkVGkSaHnSOSxuC55FcUGeYI9i12lN4Gr-sesF3PvgWliFL2drL84G2jIGyPZMuqF87zQr7us1Wte9RhROOEyRQ__" alt="resim4" />
                            Kızartmalar
                        </a>
                    </div>
                    <div className="headerButton">
                        <a href="#">
                            <img src="https://s3-alpha-sig.figma.com/img/a0bd/3d89/c8ba4e927016ed3c458e1e2b03a0fd47?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKHg8ovbG39tnbk9lsGYAhwBcqDFhUuyVE1Hd2yqeQ0SVlhDTSTWhurQJ4lTli4Nb7ZrYGM801Vkb28hWOrIHbTNmcXQGSSzY4K3pZ7YIZKlhjLXxiQzXMDN2hcX2FgqZBfKnfMCuesWkzNHOfRJDG65CvScMbjTNaiaWoivWwXsV2gM-zlpOeI4oPf0rcHt3DQSped6mX2ubNXkF32jeCkKKyBr9ehV9jVD8FYir-9kcqpVm6FNzVdiWbBfBOkTZ2ms4GQ2jPQ92UF5wWfY~ZYqC9IkWnSzIsKH70b7NBoCtJc3Mrrd3rG2UEmAL94zw2w7DKyChrO7UU5Ita7fkg__" alt="resim5" />
                            Fast food
                        </a>
                    </div>
                    <div className="headerButton">
                        <a href="#">
                            <img src="https://s3-alpha-sig.figma.com/img/d0a0/bb89/ccb1059768c63af268f17153b667d4b8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhZbvZGQsht5oXODRR102rCZ8RF6YksI0a9~bwgG8425C0tlZqGoJDLXI9aBLkaE3a0~xD60dXt-rG93WCi-WlJVZkbGZflaCeZTfdCz07LfWpmA2hVjHiAwPufPOfXEgLndm29hXeOGQc-UQPNAFuxahGOpgx9LADhl6EWSioacf~8bJDY9t8MnB4PsblvJHlOQVfTibs2VyYG9yKMaPy5zc~qmyew1S8EUQMHFBKTOmcbtd3EE~MxSX0SjMpnyNzYVqxeW6lard6LKwqxJMjN7xkuJOd7PyhEf6psLUeM7PqV03R8ovPMmL-h8v4tReI~8ucMVepZyKq2hKMTTdQ__" alt="resim6" />
                            Gazlı İçecek
                        </a>
                    </div>
                </div>
                <div className="pizzas">
                    <div>
                        <Card
                            style={{
                                width: '334.67px',
                                height: "419px",
                                padding: "5%",
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://s3-alpha-sig.figma.com/img/d864/d5f2/cfeae804c5416af75c83724fea1e8a2a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hAzZ3NJmZ3ybWEKebQM6R6YW4mx36cvjrRzzjsAmsPA~ELhfDrdWCC~Od1YDhzRZGauTGIZcHleTVT3iCvACeb6ffdHhuG18pcgKd49XQSKVtbrf2curg~8mEJHHz0Ss7RZRNrm5h45vwfpxXc6MZ7eOjg1m3xv~4F5HiO8ve0zdcEGx42NVBacg9xix0xKxVQrbo55Lr6Ho2r1tXLkbHo3jUSBs4ZLBw2BrK2bm44W~xYyQtKEQbzdhOfr9o-iZE~py~AkV8~V3iXoQ0aFDp1zxv7nwfo2KR5TiLaYUclZtGD9ymupdFBgd~oLynLOYQLO2QLbUxhf8d1Pdz1TN7Q__"
                            />
                            <CardBody>
                                <CardTitle className="pizzaHeader">
                                    Terminal Pizza
                                </CardTitle>
                                <div className="pizzaİnfo">
                                    <CardText className="pizzaStar">
                                        4.9
                                    </CardText>
                                    <CardText className="pizzaComment">
                                        (200)
                                    </CardText>
                                    <CardText className="pizzaMoney">
                                        60₺
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{
                                width: '334.67px',
                                height: "419px",
                                padding: "5%",
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://s3-alpha-sig.figma.com/img/b4ef/f9b1/a666a9eaf37b96abc3aa028f58013324?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFaubq~Lg3WuyFXBU3-nI8ERUfIl-rO0zMhkU32BRTPYVB6D40q5btuE2i1YKYAIBDtzFjtR2cF4M9VC44bJAWmo6DJK5p8U3xgHiMNzdmE6bJHoiCoyFA60l7hYdJvOcT-q6WriqifpxhPq1LZPHs~ukI46VjmnqA3GP3Bo~bRirtuN7r541RQch84MjDEuBDSDLZWCpu7oijHICFwLE~1N5jOWOF5QMQxw3pCLaZZVh4rgvmrxpkAbQcM8BrJEsnqBvrzMaujTgdTndW4YiGwA~i~vLOnPefmo-tLTenSzZPeWn7XmHgLs-J-AuNI0COT6diHP04FshMMgy1VxeQ__"
                            />
                            <CardBody>
                                <CardTitle className="pizzaHeader">
                                    Position Absolute Acı Pizza
                                </CardTitle>
                                <div className="pizzaİnfo">
                                    <CardText className="pizzaStar">
                                        4.9
                                    </CardText>
                                    <CardText className="pizzaComment">
                                        (200)
                                    </CardText>
                                    <CardText className="pizzaMoney">
                                        60₺
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{
                                width: '334.67px',
                                height: "419px",
                                padding: "5%",
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://s3-alpha-sig.figma.com/img/458e/326c/cd5af55f8af508250a5509f485252911?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EC5JkEiBjoojca~BM~y1HOs80yNJsBMixj9Smi2-na5rvhwYcSujOM3Io8yw7yrpmUV4DPH~Lt2z6U6fSM7vbRtM958CBHhIar8STNEAfuV24NYKiSWbHi0sXVqpIxK5Eud7Kx9S6lZNTXuyLkCuGs2EczL-cCqik2YFgBp5nuI50jUL-o4homvhIG~8KE4j-IsgU4RhZ4bcipsFa78aysxns779CxLMlLnWr0YDzcQCFvr~jNN5BdzOlsTDAuq2~xIU20O~E0Eq8wZs3iA4LPsEXo32FPbMJqvuVJDMr9P0BfzXiBpnsbmdcWCPT629r4bugge3pUf6Cff21M3PSQ__"
                            />
                            <CardBody>
                                <CardTitle className="pizzaHeader">
                                    useEffect Tavuklu Burger
                                </CardTitle>
                                <div className="pizzaİnfo">
                                    <CardText className="pizzaStar">
                                        4.9
                                    </CardText>
                                    <CardText className="pizzaComment">
                                        (200)
                                    </CardText>
                                    <CardText className="pizzaMoney">
                                        60₺
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    );
}