import img from "../../public/assets/use.png"
import style from "../styles/login1.module.css"
export default function Login() {

    return (
        <div className={style.conteiner}>
            <div className={style.conteiner_login}>
                <div className={style.wrap_login}>
                    <form className={style.form_login}>
                        <span className={style.login_form_title}>Login</span>
                        <div className={style.wrap_input}>
                            <input type="email" className={style.input_form} name="email" autoComplete="off" />
                            <span className={style.focus_input_form} data-placeholder="E-mail"></span>
                        </div>

                        <div className={style.wrap_input}>
                            <input type="password" className={style.input_form} name="password" autoComplete="off" />
                            <span className={style.focus_input_form} data-placeholder="Password">Senha</span>
                        </div>

                        <div className={style.container_login_form_btn}>
                            <button className={style.login_form_btn}>Login</button>
                        </div>
                        <ul className={style.login_utils}>
                            <li className={style.login_list}>
                                <span className={style.text1}>Esqueceu a </span>
                                <a href="" className={style.text2}>senha?</a>
                            </li>
                            <li className={style.login_list}>
                                <span className={style.text1}>Não tem conta? </span>
                                <a href="" className={style.text2}>Criar</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>

    )
}