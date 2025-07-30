import React from 'react';
import './App.css';
import logoImage from './assets/logo_1753833531.png';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a className="flex items-center gap-2" href="/">
            <img alt="Raspou, levou!" className="max-h-10 w-auto" src={logoImage} />
          </a>
          <nav className="hidden md:flex items-center gap-4">
            <a className="text-sm font-medium text-primary hover:text-primary-foreground transition" href="/raspadinhas">
              Raspadinhas
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Cadastrar
            </Button>
            <Button>
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Floating WhatsApp Icons */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
            </svg>
          </div>
          
          <div className="absolute top-32 right-20 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
            </svg>
          </div>

          <div className="absolute bottom-20 left-16 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center animate-bounce delay-300">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
            </svg>
          </div>

          {/* Character Illustration */}
          <div className="absolute right-10 bottom-0 w-64 h-64 bg-gradient-to-t from-yellow-400 to-orange-400 rounded-full opacity-20"></div>
          
          <div className="relative z-10 max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              ACESSE O CANAL<br />
              <span className="text-orange-300">E TENHA PRÊMIOS</span><br />
              E SORTEIOS EXCLUSIVOS
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Participe da nossa comunidade e concorra a prêmios incríveis!
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-lg">
              CLIQUE AQUI E RESGATE SEU PRÊMIO
            </Button>
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-8">
          <div className="container mx-auto px-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-6">
              <div className="w-32 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-xs text-center">
                  <div className="text-gray-300">Eletrodomésticos</div>
                  <div className="text-white font-bold">Kit Completo</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-orange-200 text-sm font-bold">ATENÇÃO!</div>
              <h2 className="text-2xl md:text-4xl font-bold">
                DEPÓSITOS FEITOS<br />
                DE <span className="text-yellow-300">TERÇA A QUINTA</span>
              </h2>
              <p className="text-lg">ATÉ 23:59 VALEM PRÊMIOS EXCLUSIVOS!</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
                Destaque
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                PIX na Conta
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                Eletrônico
              </Button>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                Veículo
              </Button>
              <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
                Cosméticos
              </Button>
            </div>
          </div>
        </section>

        {/* Scratch Cards Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* PIX na conta */}
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">R$ 100</div>
                    <div className="text-sm">PIX DIRETO</div>
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                    R$ 0,50
                  </div>
                  <div className="absolute bottom-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    FORTUNA
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">PIX na conta</h3>
                  <p className="text-muted-foreground text-sm mb-2">PRÊMIOS ATÉ R$ 2000,00</p>
                  <p className="text-muted-foreground text-xs mb-4">
                    Raspe e receba prêmios em DINHEIRO R$$ até R$2.000 diretamente no seu PIX.
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Jogar Raspadinha →
                  </Button>
                </div>
              </div>

              {/* Sonho de Consumo */}
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">ELETRÔNICOS</div>
                    <div className="text-sm">PREMIUM</div>
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                    R$ 2,00
                  </div>
                  <div className="absolute bottom-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    FORTUNA
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Sonho de Consumo ©</h3>
                  <p className="text-muted-foreground text-sm mb-2">PRÊMIOS ATÉ R$ 5000,00</p>
                  <p className="text-muted-foreground text-xs mb-4">
                    Eletro, eletrônicos e componentes, receba prêmios exclusivos de alto valor agregado, o...
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Jogar Raspadinha →
                  </Button>
                </div>
              </div>

              {/* Me mimei */}
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                <div className="h-48 bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center relative">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">COSMÉTICOS</div>
                    <div className="text-sm">PREMIUM</div>
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                    R$ 2,50
                  </div>
                  <div className="absolute bottom-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    FORTUNA
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Me mimei</h3>
                  <p className="text-muted-foreground text-sm mb-2">PRÊMIOS ATÉ R$ 1000,00</p>
                  <p className="text-muted-foreground text-xs mb-4">
                    Shopee, shein, presentinhos... Quer se mimar mas tá muito caro? não se preocupe, é só dar...
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Jogar Raspadinha →
                  </Button>
                </div>
              </div>

              {/* Super Prêmios */}
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
                <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center relative">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">VEÍCULOS</div>
                    <div className="text-sm">PREMIUM</div>
                  </div>
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                    R$ 5,00
                  </div>
                  <div className="absolute bottom-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    FORTUNA
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Super Prêmios</h3>
                  <p className="text-muted-foreground text-sm mb-2">PRÊMIOS ATÉ R$ 20000,00</p>
                  <p className="text-muted-foreground text-xs mb-4">
                    Cansado de ficar a pé? Essa sua chance de sair motorizado, prêmios de até R$20.000
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Jogar Raspadinha →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sidebar py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-4">
            <div className="text-gray-400 text-xs pb-4">
              <img alt="Raspou, levou!" className="max-h-10 w-auto mb-2" src={logoImage} />
              <p className="mb-2">Raspou, levou! é a maior e melhor plataforma de raspadinhas do Brasil</p>
              <p>© 2025 Raspou, levou!. Todos os direitos reservados.</p>
            </div>
            <div className="flex flex-col gap-2">
              <a className="text-xs text-gray-300 hover:text-white transition" href="/">
                Raspadinhas
              </a>
              <a className="text-xs text-gray-300 hover:text-white transition" href="/account/carrinho">
                Carrinho
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a className="text-xs text-gray-300 hover:text-white transition" href="/account/carteira">
                Carteira
              </a>
              <a className="text-xs text-gray-300 hover:text-white transition" href="/account/deposito">
                Depósito
              </a>
              <a className="text-xs text-gray-300 hover:text-white transition" href="/account/saque">
                Saques
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a className="text-xs text-gray-300 hover:text-white transition" href="/terms">
                Termos de Uso
              </a>
              <a className="text-xs text-gray-300 hover:text-white transition" href="/privacy">
                Política de Privacidade
              </a>
              <a className="text-xs text-gray-300 hover:text-white transition" href="/terms">
                Termos de Bônus
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-sidebar border-t border-sidebar rounded-t-2xl h-16 md:hidden">
        <div className="flex items-center justify-around h-full relative">
          <a className="flex flex-col items-center justify-center w-1/5 h-full text-xs text-primary" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="mb-1">
              <path d="M247.5,181.7h-.1L231.1,97.2c0-.1,0-.1-.1-.2a60,60,0,0,0-59-49.3h0L84,48A59.9,59.9,0,0,0,24.9,97.6v.2L8.6,181.6h0a35.9,35.9,0,0,0,29.2,41.7,31.8,31.8,0,0,0,6.2.6,36.4,36.4,0,0,0,25.5-10.5l.4-.5,40.7-45,34.9-.2L186.1,213l.5.5A36,36,0,0,0,212,224a33.6,33.6,0,0,0,6.3-.6A36.1,36.1,0,0,0,247.5,181.7ZM104,116H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V92a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H152A8,8,0,0,1,144,108Zm71.5,99.7a20.1,20.1,0,0,1-17.5-5.4l-31.1-34.5H172a60,60,0,0,0,51-28.3l8.7,45.2A20,20,0,0,1,215.5,207.7Z"/>
            </svg>
          </a>
          <a className="flex flex-col items-center justify-center w-1/5 h-full text-xs text-muted-foreground" href="/account/carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="mb-1">
              <path d="M223.9,65.4l-12.2,66.9A24,24,0,0,1,188.1,152H72.1l4.4,24H184a24,24,0,1,1-24,24,23.6,23.6,0,0,1,1.4-8H102.6a23.6,23.6,0,0,1,1.4,8,24,24,0,1,1-42.2-15.6L34.1,32H16a8,8,0,0,1,0-16H34.1A16,16,0,0,1,49.8,29.1L54.7,56H216a7.9,7.9,0,0,1,6.1,2.9A7.7,7.7,0,0,1,223.9,65.4Z"/>
            </svg>
          </a>
          <a className="flex items-center justify-center w-1/5 h-full relative" href="/account/deposito">
            <div className="absolute -top-2 flex items-center justify-center w-12 h-12 rounded-full bg-primary shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="text-sidebar">
                <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24.1,24.1,0,0,0,32,64V192a24.1,24.1,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm-36,84a12,12,0,1,1,12-12A12,12,0,0,1,180,156Z"/>
              </svg>
            </div>
          </a>
          <a className="flex flex-col items-center justify-center w-1/5 h-full text-xs text-muted-foreground" href="/login">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="mb-1">
              <path d="M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"/>
            </svg>
          </a>
          <a className="flex flex-col items-center justify-center w-1/5 h-full text-xs text-muted-foreground" href="/register">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="mb-1">
              <path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

