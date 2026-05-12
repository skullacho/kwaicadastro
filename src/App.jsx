import "./App.css";

function App() {
  return (
    <div className="container">
      
      <div className="left">
        <div className="overlay">
          <h1>Kwai</h1>
          <p>Compartilhe momentos, conecte pessoas</p>
        </div>
      </div>

      <div className="right">
        <div className="login-box">
          <h2 className="logo">Kwai</h2>
          <h3>Cadastro</h3>

          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="text" placeholder="Digite seu login..." />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input type="password" placeholder="Digite sua senha..." />
            </div>

            <div className="input-group">
              <label>Confirmar Senha</label>
              <input type="password" placeholder="Digite sua senha..." />
            </div>

            <button type="submit">CADASTRAR</button>

            <a href="https://kwailogin.vercel.app/">já tenho cadastro</a>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;