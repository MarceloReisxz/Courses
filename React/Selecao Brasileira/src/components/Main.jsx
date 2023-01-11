import './Main.css'
import axios from 'axios'

const Main = props => {
    function getPlayer() {

        const url3 = 'https://apiv3.apifootball.com/?action=get_teams&team_id=531&APIkey=bb3f39d91310e35b57bfdff70c1e54eec69b298e6c7159b770df34239ac92dc6'

        axios.get(url3).then(response => {
            const players = (response.data[0].players)
            console.log(players)

            players.forEach(element => {
                if (element.player_id !== '2877711449' && element.player_id !== '1486581392' && element.player_id !== '2988382009' && element.player_id !== '1818970307') /* jogadores com imagens falhadas */ {
                    const image = element.player_image
                    document.getElementsByClassName('players-area')[0].insertAdjacentHTML('afterbegin', `<img src="${image}" class="players_pictures border border-success m-1"/>`)
                }
            });
        })
    }

    return (
        <div onLoad={getPlayer()}>
            <div className="d-flex justify-content-center flex-wrap mt-5">
                <div className="card col-5 m-2">
                    <img src="https://jpimg.com.br/uploads/2017/06/749777164-ae-selecao-brasileira-de-2002-unica-campea-do-mundo-com-7-vitorias-em-7-jogos.jpg" className="card-img-top mt-2" alt="imagem-selecao"></img>
                    <div className="card-body">
                        <h5 className="card-title">Os Pentas</h5>
                        <p className="card-text">A ultima equipe Brasileira a ser Campeã Mundial.</p>
                        <a href="/penta" className="btn veja-mais">Veja Mais</a>
                    </div>
                </div>
                <div className="card col-5 m-2">
                    <img src="https://imagens.ebc.com.br/BTEwIobKmkLh0N67tSvkiAVglRU=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/selecao_brasileira_2022_pre_mundial.jpg?itok=zzP7n0RC" className="card-img-top mt-2" alt="imagem-nova-selecao"></img>
                    <div className="card-body">
                        <h5 className="card-title">Sonhado Hexa</h5>
                        <p className="card-text">A nova geração surge e gera esperança!</p>
                        <a href="/hexa" className="btn veja-mais">Veja Mais</a>
                    </div>
                </div>
            </div>
            <h2 className='sub-title mt-4 mb-5 text-success'>Os atuais defensores da Amarelinha!</h2>
            <div className='players-area container-fluid'></div>
        </div>
    )
}

export default Main