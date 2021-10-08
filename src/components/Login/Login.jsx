import { TextField } from '@mui/material';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


const Login = () => {
    const { login, loginWithGoogle } = useAuth()

    const emailRef = useRef()
    const passwordRef = useRef()

    const history = useHistory()

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            alert('Не удалось войти в аккаунт')
        }
    }

    const googleLogin = async () => {
        try {
            await loginWithGoogle()
            history.push('/')
        } catch {
            alert('Failed to login. Please try again')
        }
    }
    return (
        <div className="login-container">
            <h1 className='title-login'>Авторизация</h1>
            <div className='imput-content'>
                <input type="email" ref={emailRef} placeholder='E-mail' />
                <input type="password" ref={passwordRef} placeholder='Password' />
                <button onClick={handleClick}>Войти</button>
            </div>
            <div className="google-login">
                <span>Войти с помощью Google</span>
                <button onClick={googleLogin}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAGe0lEQVRoge2ZaWxUVRTH//e96czQmQ5laUvHthSsZWljkaSyFmiUiAElMQEFWYyEABGQRSQRTSaoIPJBihILBT7IEoMhUaEFDYgsRWgiskhoy9YWaKEsLfOmne29d/xAgDLzZt4yA/FDf5+ac8+99/x73733nDtAJ510Eg0Wz8HIZR6IdnEGPGwE2qg3gmSHHxYAAI8grExAImuAjSqRZNrKXIHqeM0dsxByIRv3+dVolMejiZJAOmZOYwLSuX2wS4vYKjTFEodhIfQFMtHE70SNNAL+GP8hFhBy+OPoLk0yKshQALSMX4+z0gdoB2ekf0TsTEZ/VsK+kZfo7apLCH2NXqjhKlEr99U7kS5yuEvoLRcyF1q1dtEshFZZcvFP4BRuks1YdDrpxQTkUZZWMSYtTrTcnIeqwN+4S5bYotNBGneEuSTNK6L6jdN6pOBq8OQzFZHP72ffSRP0dFFfkdPcCTTJ+j4nHkBPJiCZNYNnLQAYAnI3eJCCWypHdAFfrlcEoCKElvHrcULSvrHTWDsyuO3IklayJXQDChHTp+gDgV+OBnkm7pD1iUaDIoAom53WIAOHWT0EUj9ibZAxgN+EYdJ8NhmSlonJBRPu89/inDQHfrBYRADRhGxJ2Izd4iwIKld1KvNiID+WfS5WGgmAPjONhptmshLpfSP9H6IohI6iG2RLHdrJgd0iUCMr9+7JfMilfmwNGmIJIh4ofzaSZRoABxIZMC0BGGcK301dQCjgX/k/iAAiCWFs+uO/AYzkgdlmoHuHBcznS5lLPP6U49NM2KdFlfZUiMGbSm3wA/g1CDSSD++QXevGfhaEH79iYAzAlA8BC4BJCUA9lrPJfs0iXKXLpxmOsAMMkpDI+85avOzuwoXfuju2hQthXAEo6kklwmne8WB5tLHxyrvbNDtrYEL6H8cAFHW0he8RmXKjD0NV7FXhbjwD08u9QNfeobZwIQxpKuNcjVdARhFEW1KoTenUskcfhsVUksYDn2Qxh9qMVHhxfbAwAimEoCTEE30Ylh6fcIxj4QLBUFu4EMKt6MPI2XGLyCAOs8cdagsXwrHa6MOwIXQoqWfcojKAgxfC0qLwe0SWT0e6DwGgWkzmTwTTVgBnF2udeE7fHdPVvR7Q4HXO39dUPCSaT2Zi49FQW7gQzvwnKEhQ2NR7fNnY6u2HXlz73F2EjyYzbSmKa+6a7Zr8XC7uIutTFs3HxCQ40bIxLOxQAxvluQ1QVUebj0xY21aATe0DIBKH65Ld2lRRWKolOD0IPUybL7VlW6P55CTVCfPmldaF2iMcv+xRSnFNsmOxexiO+J1PePwlpszatS9vpKGIFVj5/bIRFU1j3lPzy0uqKVeyKwuR/TsAuI8EnFjiHobrUvgd6ZHN7GDQeeCHPXlZOmMOY23Z/D6/NY852Co6ot5RSaY26mevXarUpiiEFaP1J2/OgbWeAvgo8vvEDclmqSRnzbb9LxZFdFLhq01Lhv/c+PqFK22Zqs9Nw7qfOrlg1tZGpbaIN7sj0TO/B6eeqt+QbNYKX8bhkvLCsl0EXs3/IS4CV7KvsKy6x9UjSeYWVRFdE9xyuu32lEjtUZeytGLQur3+7A+1BpfFC97chPs780TvyrFvnFcsgcsO5Ke1B61fVgeSp16T7V0AwCRzMNUXo/Lm6Ihjv+Xcv3HDoo/nRmpXzZtW7h1eWxVMfUGDjkfwIGTygqc7F2i2QG4hgPxgyS2ytdc1yW6XFKZlxJB6uz/2X3kbcsgL1ODkcw3ln0zNBljEQkn1pbEY14fc4y0Nl6SuKlnxYyQw1EkOe52klkk/hhjhVuoFvGbegkO1M+CTHnxt2bbr3pyUupejiQA0ZL9FExpaCizuwizeo70kjIHm5GsYlb8BPc338Jz1VrC4a9XQktkrVPI/HSn5jgO5fY97M07Xi46wouZpkCtTq6M5r8g1b9W/Wvx11Ra7KnJSquXUSr17Ri+DE+5czDe1DJ087vw9rX0MFUmlFYPWHQs6F7TK5rj+9NaNBeQR1hvr5o47o3jpRcNwtffL75nOWjF9Z1UgdZSXTDFVjTYWpJcS7hwdILZOmTixRvHCUyPmsnV7RU5GCyWvviw73rwsOhzaf50m9DEJ7mwmVDwvuZcaFfB4vDjyY3lBrsDTzDtSlyKBzL0DxNm9MFmIGEuAHEhkomDnA/XJ8B23E22ZOf6MShHXSSedxIv/ADklUJlYpGMOAAAAAElFTkSuQmCC" /></button>
            </div>
            <div>
                <div className="text-center">
                    Создать аккаунт? <Link to="/signup">sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;