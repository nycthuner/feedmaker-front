import styled from "styled-components";
import DynamicInput from "../../component/DynamicInput";
import DynamicButton from "../../component/DynamicButton";
import { toast } from "react-toastify";
import "../../assets/css/createUserPage.css";
import ProfessorSelect from "../../component/feedback/FeedBackSelect";
import { useNavigate } from "react-router-dom";
import { createUserFunction } from "../../utils/createUserFuntion";

type CreateUserPageType = {
  classname?: string;
};

const data: any = {};

const CreateUserPage = ({ classname }: CreateUserPageType) => {
    const type = {'STUDENT': 'Aluno', 'TEACHER': 'Professor', 'COORDINATOR': 'Coordenador'}
    const getData = (key: string, value: any) => {
        data[key] = value;
    };
    const navigate = useNavigate();
    const sendData = async () => {
        const body = {
        'Username': data["Username"],
        'Password': data['Password'],
        'Name': data['Name'],
        'Type': data['Type']
        };
        if (!body['Username'] || !body['Password']|| !body['Name']|| !body['Type']) {
            toast.warning("Preencha todos os dados!");
            return;
        }
        let success = await createUserFunction(body)
        if(success){
            toast.success("Usuario criado com sucesso!");
        }else{
            toast.error("Erro ao criar Usuario!");
        }
        navigate("/")
    };

    return (
        <div className={classname}>
        <div className="form-container">
            <main className="user-form">
            
            <div className="navigation">
                <DynamicButton
                classname="btn-back"
                label="Voltar"
                onClick={() => navigate("/")}
                />
            </div>

            <div className="user-card">
                <h2 className="user-card-title">Criar Usuário</h2>

                <label htmlFor="typeSelect" className="label">Tipo de Usuário</label>
                <ProfessorSelect
                classname="select-type"
                id="typeSelect"
                onChange={(e: any) => getData("Type", e.target.value)}
                >
                {Object.entries(type).map(([key, value]) => (
                    <option key={key} value={key}>
                    {value}
                    </option>
                ))}
                </ProfessorSelect>

                <label htmlFor="nameInput" className="label">Nome</label>
                <DynamicInput
                classname="input-field"
                id="nameInput"
                placeholder="Nome..."
                onChange={(e: any) => getData("Name", e.target.value)}
                />

                <label htmlFor="usernameInput" className="label">Usuário</label>
                <DynamicInput
                classname="input-field"
                id="usernameInput"
                placeholder="Usuário..."
                onChange={(e: any) => getData("Username", e.target.value)}
                />

                <label htmlFor="passwordInput" className="label">Senha</label>
                <DynamicInput
                classname="input-field"
                id="passwordInput"
                placeholder="Senha..."
                type="password"
                onChange={(e: any) => getData("Password", e.target.value)}
                />

                <DynamicButton
                classname="btn-submit"
                label="Cadastrar Usuário"
                onClick={sendData}
                />
            </div>
            </main>
        </div>
        </div>
    );
};

export default styled(CreateUserPage)`
`;
