import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

import { TestContext } from '../App'

export function Home() {
    const history = useHistory();
    const value = useContext(TestContext)

    function handleCreateRoom() {
        console.log('aqui')
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result)
            // history.push('/rooms/new');
        })
            .catch(function (error) {
                console.log(process.env.REACT_APP_API_KEY)
                console.log(error)
            })
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Toda pergunta tem uma resposta</strong>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}