import '../Main.css'
const Hexa = props => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card col-5 mx-5">
                <img src="https://imagens.ebc.com.br/BTEwIobKmkLh0N67tSvkiAVglRU=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/selecao_brasileira_2022_pre_mundial.jpg?itok=zzP7n0RC" className="card-img-top mt-2" alt="imagem-nova-selecao"></img>
                <div className="card-body">
                    <h5 className="card-title">Sonhado Hexa</h5>
                    <p className="card-text">Em 2022, o Brasil tem uma nova esperança, depositada nas costas de uma nova geração que surgiu.<br />
                        O hexa é desejado por todos o brasileiros, após 20 anos de espera para a conquista de mais um título. O líder do time, Neymar, parece estar mais preparado do que nunca, para ir em busca da sonhada taça.</p>
                    <a href="/" className="btn veja-mais">Voltar</a>
                </div>
            </div>

        </div>
    )
}

export default Hexa