import logo from "../../public/assets/login.png"
import style from "../styles/loginTeste.module.css"
import Image from "next/image"
import { useState } from "react"
export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={style.conteiner}>
            <div className={style.conteiner_login}>
                <div className={style.wrap_login}>
                    <form className={style.login_form}>
                        <span className={style.login_form_title}>Bem Vindo</span>
                        <span className={style.login_form_title}>
                            <Image src={logo} width={'75px'} height={'75px'} />
                        </span>
                        <div className={style.wrap_input}>
                            <input 
                            className={style.input}
                             type="email"
                             value={email}
                             onChange={e => setEmail(e.target.value)}
                              />
                            <span className={style.focus_input} data-placeholder="Email"></span>
                        </div>
                        <br />
                        <div className={style.wrap_input}>
                            <input 
                            className={email !== ""?style.has_val : style.input} 
                            type="password" 
                             value={password}
                             onChange={e => setPassword(e.target.value)}
                            />
                            <span className={style.focus_input} data-placeholder="Password"></span>
                        </div>

                        <div className={style.conteiner_login_form_btn}>
                            <button className={style.login_form_btn}>Login</button>
                        </div>

                        <div className={style.text_center}>
                            <span className={style.txt1}>Não Possui conta?</span>
                            <a href="" className={style.txt2}>Criar conta</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
