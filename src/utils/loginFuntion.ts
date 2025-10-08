export const login = async(data:{
    user: string,
    password: string
})=>{
    if(data.user == 'aluno@teste' && data.password == '123'){
        return true
    }else{
        return false
    }
}