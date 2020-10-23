import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel, Button, Form, Card } from "react-bootstrap";
import "./styles.css";
import "./responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";

import slider1 from "../../Assets/slider1.jpg";
import slider2 from "../../Assets/slider2.jpg";
import logo from "../../Assets/logoprojeto1.png";
import imgClinico from "../../Assets/a.jpg";
import imgCardiologia from "../../Assets/b.jpg";
import imgFisioterapia from "../../Assets/c.jpg";
import seta from "../../Assets/next.png";
import iconeAgendamento from "../../Assets/icone-agendamento.png";
import iconeMedico from "../../Assets/icone-medico.png";
import iconeCovid from "../../Assets/icone-covid.png";
import fundoCovid from "../../Assets/fundo-medicos.jpg";
import iconeDica1 from "../../Assets/muiecommascara (1).png";
import iconeDica2 from "../../Assets/ficaremcasa.png";
import iconeDica3 from "../../Assets/limpar.png";
import iconeDica4 from "../../Assets/cobriraboga (1).png";
import iconeDica5 from "../../Assets/laveasmaos.png";
import iconeMissao from "../../Assets/mission.png";
import iconeVisao from "../../Assets/idea.png";
import iconeValores from "../../Assets/onboarding.png";
import iconePlataformas from "../../Assets/icones-plataformas (1).png";
import celular from "../../Assets/tela-aplicativo.png";
import iconeWpp from "../../Assets/whatsapp.png";
import iconeTelefone from "../../Assets/phone.png";
import iconeTelefoneMobile from "../../Assets/phone (1).png";
import menuMobile from "../../Assets/open-menu (1).png";
import slider3 from "../../Assets/slider3.jpg";
import api from "../../Services/api";

function Home() {
  const [size, setSize] = useState();
  const [display, setDisplay] = useState("none");
  const [filiais, setFiliais] = useState([]);
  const [servicosFilial, setServicosFilial] = useState([]);

  const tamanhoTela = () => {
    const width = window.innerWidth;

    if (width > 720) {
      setSize(3);
    } else {
      setSize(1);
    }
  };

  useEffect(() => {
    tamanhoTela();
    carregarFiliais();
    scrollNav();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size,
    slidesToScroll: size,
  };

  const go = (elem) => {
    window.scroll({
      top: document.querySelector(elem).offsetTop - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollNav = () => {
    window.addEventListener("scroll", function () {
      var nav = document.querySelector("#container-menu");

      if (nav != null) {
        nav.classList.toggle("sticky", window.scrollY > 0);
      }

    });
  };

  const menuItensMobile = (d) => {
    var menu = document.getElementById("menu-itens-mobile");

    if (display === "none") {
      setDisplay("block");
      menu.style.display = `${display}`;
    } else if (d == "none") {
      setDisplay("none");
      menu.style.display = `${display}`;
    } else {
      setDisplay("none");
      menu.style.display = `${display}`;
    }
  };

  const carregarFiliais = async () => {
    try {
      const filiais = await api.get("/filiais");

      setFiliais(filiais.data);
    } catch (error) {
      console.log(error);
    }
  };

  const buscarServicos = async () => {
    const select = document.getElementById("selectServico");

    const filialIdSelecionada = select.options[
      select.selectedIndex
    ].getAttribute("values");

    try {
      const filial = await api.get(`/filial/${filialIdSelecionada}`);

      setServicosFilial(filial.data.Servicos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav id="container-menu-mobile">
        <div id="menu-mobile">
          <img onClick={menuItensMobile} src={menuMobile} alt="menu" />
        </div>
        <div id="menu-itens-mobile">
          <ul>
            <li
              onClick={() => {
                go("#container-oferecimento");
                menuItensMobile(setDisplay("none"));
              }}
            >
              O que oferecemos?
            </li>
            <li
              onClick={() => {
                go("#covid");
                menuItensMobile(setDisplay("none"));
              }}
            >
              Como se previnir do covid-19?
            </li>
            <li
              onClick={() => {
                go("#servicos");
                menuItensMobile(setDisplay("none"));
              }}
            >
              Nossos Serviços
            </li>
            <li
              onClick={() => {
                go("#hospitais");
                menuItensMobile(setDisplay("none"));
              }}
            >
              Nossos Hospitais
            </li>
            <li
              onClick={() => {
                go("#app");
                menuItensMobile(setDisplay("none"));
              }}
            >
              Conheça nosso App
            </li>
            <li
              onClick={() => {
                go("#sobre");
                menuItensMobile(setDisplay("none"));
              }}
            >
              Sobre Nós
            </li>
          </ul>
        </div>
        <div id="icone-telefone">
          <img src={iconeTelefoneMobile} alt="telefone" />
        </div>
        <div id="logo-mobile">
          <img src={logo} alt="logo" />
        </div>
      </nav>
      <header>
        <nav id="container-menu">
          <div id="menu">
            <div id="logo">
              <img src={logo} alt="logo" onClick={() => go(".imgSlider")} />
            </div>
            <div id="menu-itens">
              <ul>
                <li onClick={() => go("#container-oferecimento")}>
                  O que oferecemos?
                </li>
                <li onClick={() => go("#covid")}>
                  Como se previnir do covid-19?
                </li>
                <li onClick={() => go("#servicos")}>Nossos Serviços</li>
                <li onClick={() => go("#hospitais")}>Nossos Hospitais</li>
                <li onClick={() => go("#app")}>Conheça nosso App</li>
                <li onClick={() => go("#sobre")}>Sobre Nós</li>

                <li>
                  <Link to="/login"> Admin </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Carousel>
          <Carousel.Item>
            <div className="txtSlider">
              <h1>
                Bem-Vindo
                <br />
                ao
                <br />
                ConsuLine
              </h1>
              <h2>
                Todos os dias
                <br /> das 8:00 ás 22:00
              </h2>
            </div>
            <div className="imgSlider">
              <img src={slider1} alt="imagem slider1" />
            </div>
            <img
              className="d-block w-100"
              src=""
              alt="Classe que define o tamanho"
            />
          </Carousel.Item>
          <Carousel.Item>
            <div className="txtSlider2">
              <h1>
                +100.000 pessoas
                <br /> morreram <br />
                pelo Covid-19
              </h1>
              <h2>Fique em casa para salvar vidas</h2>
            </div>

            <div className="imgSlider">
              <img src={slider2} alt="imagem slider 2" />
            </div>
            <img
              className="d-block w-100"
              src=""
              alt="Classe que define o tamanho"
            />
          </Carousel.Item>
          <Carousel.Item>
            <div className="txtSlider2">
              <h1>
                Conheça nosso <br />
                App móvel{" "}
              </h1>
              <h2>
                Clique em "Saiba Mais" para ver as vantagens de ter nosso
                aplicativo
              </h2>
              <div className="containerBotao">
                <button
                  onClick={() => go("#app")}
                  type="button"
                  className="botao"
                >
                  {" "}
                  Saiba Mais
                </button>
              </div>
            </div>

            <div className="imgSlider">
              <img src={slider3} alt="imagem slider 3" />
            </div>
            <img
              className="d-block w-100"
              src=""
              alt="Classe que define o tamanho"
            />
          </Carousel.Item>
        </Carousel>
      </header>
      <body>
        <section id="container-oferecimento">
          <h1>O que oferecemos?</h1>
          <div id="oferecimento">
            <div id="container-card-oferecimento">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="200"
                className="card-oferecimento"
              >
                <div className="img-card-oferecimento">
                  <img src={iconeAgendamento} alt="Icone Especialidade" />
                </div>
                <h1>Agendamento Online</h1>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1300"
                data-aos-offset="250"
                className="card-oferecimento"
              >
                <div className="img-card-oferecimento">
                  <img src={iconeMedico} alt="Icone Especialidade" />
                </div>
                <h1>
                  Consultas <br /> online/presencial
                </h1>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-offset="300"
                className="card-oferecimento"
              >
                <div className="img-card-oferecimento">
                  <img src={iconeCovid} alt="Icone Especialidade" />
                </div>
                <h1>
                  Teste para Covid-19 <br /> online
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section id="covid">
          <div id="container-covid">
            <h1
              id="tituloMobile"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="900"
            >
              Como se previnir do Covid-19?
            </h1>
            <div id="img-covid">
              <h1
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="900"
              >
                Como se previnir do Covid-19?
              </h1>
              <img
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="1900"
                src={fundoCovid}
                alt="Médicos"
              />
            </div>
            <div id="dicas-covid">
              <div id="container-card-dicas">
                <div className="card-dica">
                  <div className="icone-dica">
                    <img src={iconeDica1} alt="Icone Dica" />
                  </div>
                  <h2>
                    {" "}
                    Use <br /> Mascara
                  </h2>
                </div>
                <div className="card-dica">
                  <div className="icone-dica">
                    <img src={iconeDica2} alt="Icone Dica" />
                  </div>
                  <h2>
                    {" "}
                    Fique em <br /> casa
                  </h2>
                </div>
                <div className="card-dica">
                  <div className="icone-dica">
                    <img src={iconeDica3} alt="Icone Dica" />
                  </div>
                  <h2>
                    Limpe as <br /> superfícies
                  </h2>
                </div>
                <div className="card-dica">
                  <div className="icone-dica">
                    <img src={iconeDica4} alt="Icone Dica" />
                  </div>
                  <h2>
                    {" "}
                    Cubra <br /> a boca
                  </h2>
                </div>
                <div className="card-dica">
                  <div className="icone-dica">
                    <img src={iconeDica5} alt="Icone Dica" />
                  </div>
                  <h2>
                    {" "}
                    Lave as <br /> mãos
                  </h2>
                </div>
                <div className="card-dica">
                  <div className="icone-dica">
                    <img src={iconeDica1} alt="Icone Dica" />
                  </div>
                  <h2>
                    {" "}
                    Não toque <br /> no rosto
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos">
          <div id="tituloSection">
            <h1>Nossos Serviços</h1>
            <div id="selectFiliais">
              <label>Filiais</label>
              <Form>
                <Form.Group
                  controlId="exampleForm.SelectCustom"
                  onChange={() => buscarServicos()}
                >
                  <Form.Control as="select" custom id="selectServico">
                    {filiais.map((filial) => (
                      <option values={filial.id}>{filial.nome}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </div>
          <div id="carrossel">
            <Slider {...settings}>
              {servicosFilial.map((servico) => (
                <div className="cardCarousel">
                  <div className="card">
                    <h1>{servico.nome}</h1>
                    <img src={imgClinico} alt="Imagem Card" />
                    <p>{servico.descricao}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section id="hospitais">
          <div id="listaEndereco">
            <h1>Nossos Hospitais</h1>

            <div
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-duration="900"
              id="containerEnderecos"
            >
              <div className="enderecos">
                <span> Rua Teste Alvez da Silva </span>
                <img id="seta" src={seta} alt="seta" />
                <div id="informacao">
                  <h3>
                    Horário: <br />
                    7:00 às 20:00
                  </h3>
                  <h3>
                    Telefone: <br />
                    (11) 4002-8922
                  </h3>
                </div>
              </div>
              <div className="enderecos">
                <span> Rua Teste Alvez da Silva </span>
                <img id="seta" src={seta} alt="seta" />
                <div id="informacao">
                  <h3>
                    Horário: <br />
                    7:00 às 20:00
                  </h3>
                  <h3>
                    Telefone: <br />
                    (11) 4002-8922
                  </h3>
                </div>
              </div>
              <div className="enderecos">
                <span> Rua Teste Alvez da Silva </span>
                <img id="seta" src={seta} alt="seta" />
                <div id="informacao">
                  <h3>
                    Horário: <br />
                    7:00 às 20:00
                  </h3>
                  <h3>
                    Telefone: <br />
                    (11) 4002-8922
                  </h3>
                </div>
              </div>
              <div className="enderecos">
                <span> Rua Teste Alvez da Silva </span>
                <img id="seta" src={seta} alt="seta" />
                <div id="informacao">
                  <h3>
                    Horário: <br />
                    7:00 às 20:00
                  </h3>
                  <h3>
                    Telefone: <br />
                    (11) 4002-8922
                  </h3>
                </div>
              </div>
              <div className="enderecos">
                <span> Rua Teste Alvez da Silva </span>
                <img id="seta" src={seta} alt="seta" />
                <div id="informacao">
                  <h3>
                    Horário: <br />
                    7:00 às 20:00
                  </h3>
                  <h3>
                    Telefone: <br />
                    (11) 4002-8922
                  </h3>
                </div>
              </div>
              <div className="enderecos">
                <span> Rua Teste Alvez da Silva </span>
                <img id="seta" src={seta} alt="seta" />
                <div id="informacao">
                  <h3>
                    Horário: <br />
                    7:00 às 20:00
                  </h3>
                  <h3>
                    Telefone: <br />
                    (11) 4002-8922
                  </h3>
                </div>
              </div>
              <div className="enderecos">
                <span> Rua Teste Alvez da Silva </span>
                <img id="seta" src={seta} alt="seta" />
                <div id="informacao">
                  <h3>
                    Horário: <br />
                    7:00 às 20:00
                  </h3>
                  <h3>
                    Telefone: <br />
                    (11) 4002-8922
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div id="container-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117054.83385336596!2d-46.85448746022399!3d-23.533813087614025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5583db0fdfef%3A0x90ee3c33b723aa9c!2sOsasco%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1600106423254!5m2!1spt-BR!2sbr"
              id="mapa"
            ></iframe>
          </div>
        </section>

        <section id="app">
          <div id="container-app">
            <div id="titulo">
              <div id="container-titulo-app">
                <span
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  {" "}
                  CONHEÇA NOSSO APP{" "}
                </span>
                <span
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1600"
                >
                  {" "}
                  CONHEÇA NOSSO APP{" "}
                </span>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="2100"
                >
                  {" "}
                  CONHEÇA NOSSO APP{" "}
                </h1>
              </div>
              <img src={iconePlataformas} alt="icone plataformas" />
            </div>
            <div id="celular">
              <img src={celular} alt="celular" />
            </div>
            <div id="container-vantagens">
              <h2> VANTAGENS DE TER NOSSO APP: </h2>
              <div
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1600"
                id="vantagens"
              >
                <h3>Consultas Online</h3>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="60"
                data-aos-duration="2100"
                id="vantagens"
              >
                <h3>Agendamentos Online</h3>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="70"
                data-aos-duration="2600"
                id="vantagens"
              >
                <h3>Resultado de Exames</h3>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="80"
                data-aos-duration="3100"
                id="vantagens"
              >
                <h3>Atendimento Rápido</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-offset="200"
            id="img-fundo-sobre"
          ></div>
          <div id="infrm-sobre">
            <h1
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              Sobre Nós
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-offset="100"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              enim eveniet, harum labore quia quibusdam saepe aut laborum
              asperiores dicta aliquam tempora eaque ut voluptatibus ex velit
              dolore laudantium tenetur! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Inventore corrupti ex alias, temporibus
              accusantium dolorum nulla commodi enim veniam, placeat voluptates?
              Neque expedita quibusdam tenetur atque iste a, corporis corrupti!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
              laborum animi error provident omnis recusandae deserunt deleniti
              aut molestiae exercitationem perspiciatis nulla sit! In similique
              omnis repudiandae magni nulla! Commodi.
            </p>
            <div
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-offset="200"
              id="container-card-sobre"
            >
              <div className="card-sobre">
                <img src={iconeMissao} alt="Icone Sobre" />
                <h1>Missão</h1>
                <div id="texto">
                  <p>Hello World n similique omnis repudiassae magni.</p>
                </div>
              </div>
              <div className="card-sobre">
                <img src={iconeVisao} alt="Icone Sobre" />
                <h1>Visão</h1>
                <div id="texto">
                  <p>Hello World n similique omnis repudiassae magni.</p>
                </div>
              </div>
              <div className="card-sobre">
                <img src={iconeValores} alt="Icone Sobre" />
                <h1>Valores</h1>
                <div id="texto">
                  <p>Hello World n similique omnis repudiassae magni.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div id="container-footer">
            <div id="titulo-footer">
              <h2> Todos os direitos reservados </h2>
            </div>
            <div id="contatos-footer">
              <h2> Contatos: </h2>
              <div className="container-contatos">
                <img src={iconeWpp} alt="icone Contatos" />
                <h3>(00) 00000-000</h3>
              </div>

              <div className="container-contatos">
                <img src={iconeTelefone} alt="icone Contatos" />
                <h3>(00) 0000-000</h3>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

AOS.init();

export default Home;
