import { Container } from './styles';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { ButtonText } from '../../components/ButtonText'

export function Menu({ isAdmin, isMenuOpen, setIsMenuOpen, setSearch, isDisabled}) {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    function handleNew(){
        navigate("/new");
    };

    function handleFavorites(){
        navigate("/favorites");
    };

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    return (
        <Container isMenuOpen={isMenuOpen}>
            <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <main>
                <Search isDisabled={isDisabled} setSearch={setSearch} />

                {isAdmin ? (
                    <ButtonText onClick={handleNew}>
                        Novo prato
                    </ButtonText>
                ) : null}

                <ButtonText onClick={handleFavorites}>
                    Meus Favoritos
                </ButtonText>

                <ButtonText onClick={handleSignOut}>
                    Sair
                </ButtonText>
            </main>
        </Container>
    );
};