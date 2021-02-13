import './Footer.css';

function Footer() {
    return(
        <footer class="page-footer font-small blue">
            <div class="footer-copyright text-center py-3 bg-warning" >
                <p> Formas de Pagamento: </p>
                <img className="logo" src={require(`../card/img/formas-de-pagamento.png`).default} /> <p></p>
                <p>© 2020 Copyright:
                <a href="https://www.recodepro.org.br/"> Larissa - Recode Pro </a></p>
            </div>
        </footer>
    )
}

export default Footer;