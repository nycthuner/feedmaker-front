
import styled from "styled-components";
import CardLogin from "../../component/login/cardLogin";
import DynamicInput from "../../component/DynamicInput";
import DynamicButton from "../../component/DynamicButton";
import imgLogin from "../../assets/imgLogin.png";
import { loginFunction } from "../../utils/loginFuntion";
import { useAuth } from "../../context/AuthContext";
import "../../assets/css/loginPage.css";
import { toast } from "react-toastify";
import SHA256 from "crypto-js/sha256";

type LoginType = {
  classname?: string;
};

const data: Record<string, any> = {};

const LoginPageRoot = ({ classname }: LoginType) => {
  const getData = (key: string, value: any) => {
    data[key] = value;
  };
  const { login } = useAuth();
  const sendData = async () => {
    const body = {
      Username: data["Username"],
      Password: SHA256(data['Password']).toString(),
    };
    if (!body.Username || !body.Password) {
      toast.warning("Preencha usuário e senha!");
      return;
    }
    const success: any = await loginFunction(body);
    if (success && success.token) {
      toast.success("Login realizado com sucesso!");

      login(success);
    } else {
      toast.error("Usuário ou senha inválidos!");
    }
  };

  return (
    <div className={classname}>
      <div className="container">
        <div className="left-side">
          <img src={imgLogin} alt="Login" className="image" />
          <h1 className="title">FEEDMAKER</h1>
          <p className="subtitle">AVALE SEU FUTURO</p>
        </div>

        <div className="right-side">
          <CardLogin className="login-card">
            <h2 className="login-title">Acesso sua conta</h2>

            <DynamicInput
              classname="login-input"
              type="text"
              placeholder="Usuário..."
              id="user-value"
              onChange={(e: any) => getData("Username", e.target.value)}
            />
            <DynamicInput
              classname="login-input"
              type="password"
              placeholder="Senha..."
              id="pwa-value"
              onChange={(e: any) => getData("Password", e.target.value)}
            />

            <a href="#" className="forgot-password">
              esqueceu a senha?
            </a>

            <DynamicButton classname="login-button" label={"ENTRAR"} onClick={sendData} />
          </CardLogin>
        </div>
      </div>
    </div>
  );
};

export default styled(LoginPageRoot)`
`;