//0 Roteador
//1 Redes WI-FI
//2 Segurança Das Redes WI-FI
//3 Canais WI-FI
//4 Tipos de Redes e conexões
//5 Sem conteúdo encontrado

const pageTitle = [
    "Roteador",
    "Redes WI-FI",
    "Segurança Das Redes WI-FI",
    "Canais WI-FI",
    "Tipos de Redes e Conexões",
    "Sem contéudo encontrado"
];

const pageTexts = [
    "Um roteador é um dispositivo que fornece Wi-Fi e que geralmente está conectado a um modem.<br>Ele envia informações da Internet a dispositivos pessoais, como computadores, smartphones e tablets.<br>Esses dispositivos conectados à Internet na sua casa formam uma Rede local (LAN).<br>Um roteador é um dispositivo que conecta duas ou mais redes ou sub-redes comutadas por pacotes.<br>Ele tem duas funções principais: gerenciar o tráfego entre essas redes, encaminhando pacotes de dados para os endereços de IP desejados, permitindo que vários dispositivos usem a mesma conexão de internet.",
    "Wi-Fi é uma abreviação de 'Wireless Fidelity', que significa fidelidade sem fio, em português.<br>Wi-fi, ou wireless é uma tecnologia de comunicação que não faz uso de cabos, e geralmente é transmitida através de frequências de rádio, infravermelhos, etc.<br>O wi-fi não necessita de licença para instalação e/ou operação.<br>O espectro Wi-Fi de 2,4 GHz tem 70 MHz de largura, e os dispositivos são limitados tipicamente a três canais de 20 MHz.<br>O espectro Wi-Fi de 5 GHz tem aproximadamente 500 MHz de largura, e os dispositivos podem usar até seis canais maiores de 80 MHz para velocidades mais rápidas.",
    "<h2>A Importância da Segurança Wi-Fi</h2>Se sua rede Wi-Fi não estiver protegida, você está abrindo as portas para uma série de riscos, incluindo: Acesso não autorizado de hackers, que podem invadir sua rede, acessar seus dispositivos e roubar informações confidenciais. Monitoramento não autorizado das suas atividades online.<br>A segurança de rede é o conjunto de medidas, ferramentas e processos que visam a proteger a infraestrutura de rede de uma empresa contra ataques cibernéticos, como vírus, malwares e outros. Sua principal prioridade é impedir o acesso, a modificação ou a invasão da rede.",
    "O canal Wi-Fi é uma das principais características de uma rede sem fio.<br>Ele funciona como uma espécie de 'faixa de frequência' reservada para a transmissão dos dados.<br>Imagine que você está em uma sala cheia de pessoas conversando.<br>Cada pessoa representa um dispositivo conectado à rede Wi-Fi.",
    "<h2>Rede de Área Local (LAN)</h2>Uma rede que conecta dispositivos em um espaço pequeno, como uma casa ou escritório.<h2>Rede de Área Metropolitana (MAN)</h2>Conecta várias LANs em uma área urbana ou cidade.<h2>Rede de Longa Distância (WAN)</h2>Abrange grandes distâncias, conectando redes em diferentes cidades ou países.<h2>Redes de Provedores de Serviços</h2>Infraestrutura de empresas que oferecem internet e outros serviços de comunicação.<h2>Redes em Nuvem</h2>Recursos de computação e armazenamento acessados via internet.",
    "Por favor clique no ícone de menu no canto superior esquerdo para ver os conteúdo desta página."
];

function ChangePage(PagePath){
    url = PagePath
    document.location.href = url
}

//data - String --> "Text"
//pagePath - String --> "subpages/content.html"
function sendDataToPage(data,pagePath) {
    url = pagePath + "?name=" + encodeURIComponent(data);

    document.location.href = url;
}


function ChangeCurrentPage(titleNumber,textNumber){
    var h1Title = document.getElementById("topic-title");
    var pText = document.getElementById("text-paragraph");

    h1Title.innerHTML = pageTitle[titleNumber]
    pText.innerHTML = pageTexts[textNumber]
}