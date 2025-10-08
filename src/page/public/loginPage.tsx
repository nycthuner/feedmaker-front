import styled from "styled-components";
import CardLogin from "../../component/login/cardLogin";
import DynamicInput from "../../component/DynamicInput";
import DynamicButton from "../../component/DynamicButton";
import imgLogin from "../../assets/imgLogin.png";
import { login } from "../../utils/loginFuntion";
import '../../assets/css/loginPage.css'
import { toast } from "react-toastify";

type LoginType = {
  classname?: string;
};

const data: any = {};

const LoginPage = ({ classname }: LoginType) => {
  const getData = (key: string, value: any) => {
    data[key] = value;
  };

  const sendData = async () => {
    const body = {
      user: data["user"],
      password: data['password']
    };
    if (!body['user'] || !body['password']) {
        toast.warning("Preencha usuário e senha!");
        return;
    }
    let success:boolean = await login(body);
    if(success){
        toast.success("Login realizado com sucesso!");
    }else{
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
              onChange={(e: any) => getData("user", e.target.value)}
            />
            <DynamicInput
              classname="login-input"
              type="password"
              placeholder="Senha..."
              id="pwa-value"
              onChange={(e: any) => getData("password", e.target.value)}
            />

            <a href="#" className="forgot-password">
              esqueceu a senha?
            </a>

            <DynamicButton
              classname="login-button"
              label={"ENTRAR"}
              onClick={sendData}
            />
          </CardLogin>
        </div>
      </div>
    </div>
  );
};

export default styled(LoginPage)`
`;
